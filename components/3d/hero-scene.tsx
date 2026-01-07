"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShape({ position, color, speed = 1, scale = 1 }: { position: [number, number, number], color: string, speed?: number, scale?: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <icosahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color={color}
                    envMapIntensity={0.5}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    metalness={0.1}
                    distort={0.4}
                    speed={2}
                />
            </mesh>
        </Float>
    );
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <Environment preset="city" />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                {/* Main large shape */}
                <FloatingShape position={[3, 0, 0]} color="#CCFF00" scale={2.5} speed={0.8} />

                {/* Background shapes */}
                <FloatingShape position={[-4, 2, -5]} color="#00FFFF" scale={1.5} speed={0.5} />
                <FloatingShape position={[-3, -3, -2]} color="#A1A1AA" scale={1} speed={1.2} />

                {/* Tiny particles/tech bits */}
                <FloatingShape position={[5, 4, -4]} color="#CCFF00" scale={0.5} speed={2} />
                <FloatingShape position={[0, 5, -5]} color="#00FFFF" scale={0.4} speed={1.5} />
            </Canvas>
        </div>
    );
}
