"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
            <nav className="pointer-events-auto bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl shadow-black/50">
                <ul className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Magnetic>
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group block p-2"
                                >
                                    {item.name}
                                    <span className="absolute bottom-1 left-2 w-[calc(100%-16px)] h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                </Link>
                            </Magnetic>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}
