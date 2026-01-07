"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';

// Vertex Shader: Handles geometry distortion (wave effect)
const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;

  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Sine wave distortion based on time and Y position
    float wave = sin(pos.y * 2.0 + uTime) * 0.1;
    
    // Mouse proximity distortion (simple ripple fallback)
    float dist = distance(uv, uMouse);
    float mouseEffect = smoothstep(0.5, 0.0, dist) * 0.2;

    pos.z += wave + mouseEffect;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

// Fragment Shader: Handles pixel color (video texture mapping)
const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    // Subtle chromatic aberration
    vec2 offset = vec2(0.01 * sin(uTime), 0.0);
    vec4 colorR = texture2D(uTexture, vUv + offset);
    vec4 colorG = texture2D(uTexture, vUv);
    vec4 colorB = texture2D(uTexture, vUv - offset);
    
    vec4 color = vec4(colorR.r, colorG.g, colorB.b, 1.0);
    
    // Scanline effect
    float scanline = sin(vUv.y * 800.0) * 0.04;
    color.rgb -= scanline;

    gl_FragColor = color;
  }
`;

export function VideoMonolith() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Load video texture
    const texture = useVideoTexture('/hero-video.mp4', {
        start: true,
        muted: true,
        loop: true,
        playsInline: true,
    });

    useFrame((state) => {
        if (meshRef.current) {
            // Update shader uniforms
            (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.elapsedTime;

            // Basic mouse tracking (normalized -1 to 1) - Optional refinement
            const mouse = state.pointer;
            (meshRef.current.material as THREE.ShaderMaterial).uniforms.uMouse.value = new THREE.Vector2(mouse.x * 0.5 + 0.5, mouse.y * 0.5 + 0.5);
        }
    });

    return (
        <mesh ref={meshRef} position={[2, 0, 0]} rotation={[0, -0.2, 0]}>
            <planeGeometry args={[5, 8, 64, 64]} />
            <shaderMaterial
                uniforms={{
                    uTime: { value: 0 },
                    uTexture: { value: texture },
                    uMouse: { value: new THREE.Vector2(0.5, 0.5) }
                }}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                side={THREE.DoubleSide}
                transparent
            />
        </mesh>
    );
}
