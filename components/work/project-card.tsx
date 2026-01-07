"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    category: string;
    image?: string; // We'll use a placeholder gradient for now
    color: string;
    link: string;
    index: number;
}

export function ProjectCard({ title, category, color, link, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <Link href={link} className="block group">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted/20 border border-white/5 transition-transform duration-500 group-hover:-translate-y-2">
                    {/* Gradient Placeholder (replacing image for now) */}
                    <div
                        className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                        style={{ background: `linear-gradient(to bottom right, ${color}, transparent)` }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                        <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-sm font-medium text-white/60 mb-2 block tracking-wider uppercase">{category}</span>
                            <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
                                {title}
                            </h3>
                        </div>
                    </div>

                    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="text-white w-6 h-6" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
