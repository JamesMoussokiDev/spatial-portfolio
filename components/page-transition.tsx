"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

function FrozenRouter(props: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}

const columns = 5;

export function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathname} className="h-full">
                <FrozenRouter>{children}</FrozenRouter>

                {/* Entrance Transition (Slide OUT to reveal new content) */}
                <div className="fixed inset-0 z-[99] pointer-events-none flex">
                    {[...Array(columns)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="relative w-full h-full bg-black border-r border-white/5 last:border-r-0"
                            initial={{ scaleY: 1, originY: 1 }} // Start covering
                            animate={{ scaleY: 0, originY: 1 }} // Slide down/up to reveal
                            exit={{ scaleY: 0, originY: 0 }} // Prepare for exit
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                                delay: i * 0.05
                            }}
                        />
                    ))}
                </div>

                {/* Exit Transition (Slide IN to cover old content) */}
                <div className="fixed inset-0 z-[99] pointer-events-none flex">
                    {[...Array(columns)].map((_, i) => (
                        <motion.div
                            key={`exit-${i}`}
                            className="relative w-full h-full bg-black border-r border-white/5 last:border-r-0"
                            initial={{ scaleY: 0, originY: 0 }} // Start hidden
                            animate={{ scaleY: 0, originY: 0 }} // Stay hidden during mounting
                            exit={{ scaleY: 1, originY: 0 }} // Slide down to cover
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                                delay: i * 0.05
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
