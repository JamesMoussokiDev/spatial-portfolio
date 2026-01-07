import React from "react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-24 border-t border-white/10 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">

                    {/* Column 1: Brand */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-6">James Moussoki</h3>
                        <p className="text-muted-foreground max-w-xs">
                            Crafting digital experiences with focus, passion, and precision.
                        </p>
                    </div>

                    {/* Column 2: Pages */}
                    <div>
                        <h4 className="font-medium mb-6 text-white">Pages</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="#work" className="hover:text-primary transition-colors">Work</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Connect */}
                    <div>
                        <h4 className="font-medium mb-6 text-white">Connect</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Email</a></li>
                        </ul>
                    </div>

                </div>

                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/60">
                    <p>© 2026 James Moussoki. All rights reserved.</p>
                    <p>Designed & Developed with ❤️</p>
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        </footer>
    );
}
