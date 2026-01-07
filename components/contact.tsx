"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 container mx-auto px-6 mb-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                    >
                        Let's build something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">extraordinary.</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg">
                        Have a project in mind? Drop me a line and let's talk.
                    </p>
                </div>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                            <input type="text" id="name" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                            <input type="email" id="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
                        </div>
                    </div>

                    <div className="space-y-2 mb-8">
                        <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                        <textarea id="message" rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Tell me about your project..." />
                    </div>

                    <button className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors group">
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
