"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ position, color, speed, rotationSpeed }: { position: [number, number, number], color: string, speed: number, rotationSpeed: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * rotationSpeed;
        meshRef.current.rotation.y = time * rotationSpeed * 0.5;
        meshRef.current.position.y += Math.sin(time * speed) * 0.002;
    });

    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} position={position}>
                <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                <meshPhysicalMaterial
                    color={color}
                    roughness={0}
                    metalness={0.5}
                    transmission={0.6} // Glass effect
                    thickness={2}
                    ior={1.5}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float>
    );
}

function FloatingSphere({ position, color, scale }: { position: [number, number, number], color: string, scale: number }) {
    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            <mesh position={position} scale={scale}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={2}
                    toneMapped={false}
                />
            </mesh>
        </Float>
    )
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#ccff00" />
            <pointLight position={[-10, -10, -10]} intensity={1.5} color="#00ffff" />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <FloatingShape position={[-3, 2, -5]} color="#ccff00" speed={1.5} rotationSpeed={0.2} />
            <FloatingShape position={[4, -2, -8]} color="#00ffff" speed={1.2} rotationSpeed={0.15} />
            <FloatingShape position={[-4, -4, -10]} color="#ff0055" speed={2} rotationSpeed={0.3} />

            <FloatingSphere position={[2, 3, -4]} color="#ffffff" scale={0.2} />
            <FloatingSphere position={[-2, -3, -6]} color="#ccff00" scale={0.15} />
            <FloatingSphere position={[5, 1, -12]} color="#00ffff" scale={0.3} />

            <Environment preset="city" />
        </>
    );
}

export function GlobalBackground() {
    return (
        <div className="fixed inset-0 z-[-5] pointer-events-none opacity-30">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <Scene />
            </Canvas>
            <div className="absolute inset-0 bg-black/60" /> {/* Overlay to ensure text readability */}
        </div>
    );
}
