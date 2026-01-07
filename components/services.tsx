"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Code, Lightbulb } from "lucide-react";
import { Tilt3D } from "@/components/tilt-3d";

const services = [
    {
        icon: Palette,
        title: "UI/UX Design",
        description: " crafting intuitive, accessible, and beautiful interfaces. I focus on micro-interactions and spatial design principles to creating engaging user journeys.",
        color: "#CCFF00"
    },
    {
        icon: Code,
        title: "Development",
        description: "Building scalable, high-performance web applications with modern technologies like Next.js, React, and WebGL for immersive experiences.",
        color: "#00FFFF"
    },
    {
        icon: Lightbulb,
        title: "Brand Strategy",
        description: "Defining your digital identity. I help brands stand out through cohesive visual systems and strategic storytelling that connects with audiences.",
        color: "#FF3366"
    }
];

export function Services() {
    return (
        <section className="py-24 md:py-32 container mx-auto px-6" id="services">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">
                        My <span className="text-muted-foreground">Expertise</span>
                    </h2>
                </div>
                <span className="hidden md:block text-muted-foreground text-sm">(02)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="perspective-1000"
                    >
                        <Tilt3D className="group relative h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500 overflow-hidden">
                            {/* Hover Gradient Background */}
                            <div
                                className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-white/5 to-transparent blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                                style={{ background: `radial-gradient(circle, ${service.color}20 0%, transparent 70%)` }}
                            />

                            <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500"
                                    style={{ color: service.color }}
                                >
                                    <service.icon size={24} />
                                </div>

                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>

                            {/* Bottom Accent Line */}
                            <div
                                className="absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                style={{ backgroundColor: service.color }}
                            />
                        </Tilt3D>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
