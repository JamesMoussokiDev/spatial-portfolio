"use client";

import React from "react";
import { ProjectCard } from "./project-card";

const projects = [
    {
        title: "Lica",
        category: "Founding Designer",
        color: "#FF3366",
        link: "#",
    },
    {
        title: "Apple",
        category: "Interface Design",
        color: "#007AFF",
        link: "#",
    },
    {
        title: "Visavis",
        category: "Design System",
        color: "#CCFF00",
        link: "#",
    },
    {
        title: "SoundCloud",
        category: "Mobile App",
        color: "#FF5500",
        link: "#",
    },
];

export function SelectedWork() {
    return (
        <section id="work" className="py-24 md:py-32 container mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                    Selected <span className="text-muted-foreground">Work</span>
                </h2>
                <span className="hidden md:block text-muted-foreground text-sm">(04)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} {...project} index={index} />
                ))}
            </div>
        </section>
    );
}
