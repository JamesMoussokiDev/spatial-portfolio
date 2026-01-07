"use client";

import React, { useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { VideoMonolith } from "@/components/3d/video-monolith";

export function Hero() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="relative w-full h-[120vh] flex items-center pt-20 overflow-hidden">

            {/* 3D Scene Layer */}
            <div className="absolute inset-0 z-0">
                <Canvas gl={{ antialias: true, alpha: true }}>
                    <Suspense fallback={null}>
                        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                        <Environment preset="city" />
                        <VideoMonolith />
                        {/* Ambient Particles could go here */}
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Layer */}
            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-none">
                {/* Text Content - Left Side */}
                <div className="max-w-2xl pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-8 h-[2px] bg-primary" />
                        <span className="text-sm font-semibold tracking-wider uppercase text-primary">James Moussoki</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 mix-blend-difference"
                    >
                        Digital <br />
                        Alchemist <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Experiments.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground/80 max-w-md leading-relaxed"
                    >
                        Pushing the boundaries of the web with WebGL, Shaders, and Immersive Interactions.
                    </motion.p>
                </div>
            </div>

            {/* Vignette & texture overalys */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-[1]" />
        </section>
    );
}
