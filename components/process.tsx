"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "I dive deep into your goals, audience, and challenges to understand the core problem we're solving."
    },
    {
        number: "02",
        title: "Strategy",
        description: "Defining the roadmap. We establish the visual direction, user flows, and technical architecture."
    },
    {
        number: "03",
        title: "Design",
        description: "Crafting the visual experience. I create high-fidelity prototypes and interactions for your review."
    },
    {
        number: "04",
        title: "Development",
        description: "Bringing it to life. I write clean, performant code to build a robust and responsive final product."
    }
];

export function Process() {
    return (
        <section className="py-24 md:py-32 container mx-auto px-6 relative">
            <div className="flex justify-between items-end mb-24">
                <div>
                    <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">
                        The <span className="text-muted-foreground">Process</span>
                    </h2>
                </div>
                <span className="hidden md:block text-muted-foreground text-sm">(03)</span>
            </div>

            <div className="relative max-w-3xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                <div className="space-y-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row gap-8 md:gap-24 items-start md:items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Number/Node */}
                            <div className="relative shrink-0 z-10 md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-mono glow-shadow shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]">
                                    {step.number}
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm ml-0 inline-block">
                                    {step.description}
                                </p>
                            </div>

                            {/* Empty side for layout balance */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
