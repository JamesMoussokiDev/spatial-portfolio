"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Tilt3D } from "@/components/tilt-3d";

export function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden">

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content - Left Side */}
                <div className="max-w-2xl">
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
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
                    >
                        Designing <br />
                        through a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">different lens.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground/80 max-w-md leading-relaxed"
                    >
                        UX/UI Developer crafting spatial, interactive, and human-centered digital experiences.
                    </motion.p>
                </div>

                {/* 3D Image - Right Side - Parallax */}
                <motion.div
                    style={{ y, opacity }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                    className="relative h-[500px] md:h-[700px] w-full flex items-center justify-center lg:justify-end perspective-1000"
                >
                    <Tilt3D className="relative w-full h-full max-w-[800px] flex items-center justify-center">
                        <div className="relative w-full h-full" style={{ transform: "translateZ(50px)" }}>
                            <Image
                                src="/hero-3d.png"
                                alt="Futuristic Workspace 3D"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                        {/* Floating Glow Effect behind image - moved deeper in Z */}
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[120px] -z-10 rounded-full mix-blend-screen"
                            style={{ transform: "translateZ(-80px)" }}
                        />
                    </Tilt3D>
                </motion.div>
            </div>

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] pointer-events-none" />
        </section>
    );
}
