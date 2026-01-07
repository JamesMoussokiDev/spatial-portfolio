"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
    { name: "Next.js", color: "#FFFFFF" },
    { name: "React", color: "#61DAFB" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Tailwind CSS", color: "#38BDF8" },
    { name: "Framer Motion", color: "#FF0055" },
    { name: "Three.js", color: "#000000" }, // White glow on black
    { name: "Node.js", color: "#339933" },
    { name: "Figma", color: "#F24E1E" },
];

export function TechStack() {
    return (
        <section className="py-24 overflow-hidden relative">
            <div className="container mx-auto px-6 text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
                    Tech <span className="text-muted-foreground">Arsenal</span>
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    The cutting-edge tools I use to bring spatial experiences to life.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto perspective-1000">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{
                            scale: 1.1,
                            rotateX: 10,
                            rotateY: 10,
                            z: 50,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                        className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors backdrop-blur-md cursor-default"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Glow backing */}
                        <div
                            className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 rounded-full"
                            style={{ backgroundColor: tech.color === "#000000" ? "#ffffff" : tech.color }}
                        />
                        <div className="relative px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md flex items-center gap-3 transition-colors group-hover:bg-white/10 group-hover:border-white/20">
                            <span
                                className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]"
                                style={{ backgroundColor: tech.color === "#000000" ? "#ffffff" : tech.color, color: tech.color === "#000000" ? "#ffffff" : tech.color }}
                            />
                            <span className="font-medium tracking-wide text-sm">{tech.name}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
