"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter",
        price: "$2,500",
        description: "Perfect for personal portfolios and small landing pages.",
        features: ["One Page Design", "Mobile Responsive", "Basic SEO", "Contact Form", "1 Week Support"],
        featured: false
    },
    {
        name: "Professional",
        price: "$5,000",
        description: "For startups and businesses needing a robust digital presence.",
        features: ["Up to 5 Pages", "CMS Integration", "Advanced SEO", "Animations & Interactions", "1 Month Support", "Analytics Setup"],
        featured: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Complex applications and full-scale platforms.",
        features: ["Unlimited Pages", "Custom Web App", "Database Integration", "3D/WebGL Features", "Priority Support", "Design System"],
        featured: false
    }
];

import { Tilt3D } from "@/components/tilt-3d";

export function Pricing() {
    return (
        <section className="py-24 md:py-32 container mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">
                        Investment <span className="text-muted-foreground">Plans</span>
                    </h2>
                </div>
                <span className="hidden md:block text-muted-foreground text-sm">(04)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="perspective-1000"
                    >
                        <Tilt3D className={cn(
                            "relative p-8 rounded-2xl border flex flex-col h-full",
                            plan.featured
                                ? "bg-white/5 border-primary shadow-[0_0_30px_-10px_rgba(204,255,0,0.3)]"
                                : "bg-black border-white/10 hover:border-white/20 transition-colors"
                        )}>
                            {plan.featured && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider" style={{ transform: "translateZ(30px)" }}>
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8" style={{ transform: "translateZ(20px)" }}>
                                <h3 className="text-lg font-medium mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                                <p className="text-muted-foreground text-sm">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1" style={{ transform: "translateZ(10px)" }}>
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm">
                                        <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0", plan.featured ? "bg-primary/20 text-primary" : "bg-white/10 text-white")}>
                                            <Check size={12} />
                                        </div>
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={cn(
                                "w-full py-3 rounded-xl font-medium transition-all duration-300 relative z-20",
                                plan.featured
                                    ? "bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(204,255,0,0.4)]"
                                    : "bg-white/10 text-white hover:bg-white/20"
                            )} style={{ transform: "translateZ(25px)" }}>
                                Get Started
                            </button>
                        </Tilt3D>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
