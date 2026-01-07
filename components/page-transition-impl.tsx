"use client";

import React, { useEffect, useState } from "react";
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

export function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        function resize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathname} className="h-full">
                {dimensions.width > 0 && <Curve dimensions={dimensions} />}
                <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
        </AnimatePresence>
    );
}

const Curve = ({ dimensions }: { dimensions: { width: number; height: number } }) => {
    const { height, width } = dimensions;
    const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height} 0 ${height}  L0 0`;
    const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height} 0 ${height}  L0 0`;

    // "Slide Up" Curve Logic
    // We offset the SVG by 300px to allow for the curve.

    // EXIT (Covering Scale):
    // Start: Top of SVG is at 100vh. Curve is flat.
    // End: Top of SVG is at 0px. Curve bounces up.

    // This is hard to get perfect with just Paths.
    // Let's use the simplest, most robust Curve effect:
    // A single black block that slides in from bottom with a convex top, and slides out to top with a concave bottom.

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full h-[calc(100vh+300px)] pointer-events-none z-[99]"
                style={{ top: "-300px" }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
            >
                <motion.svg className="w-full h-full fill-black">
                    <motion.path
                        variants={{
                            initial: {
                                d: `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 300} 0 ${height} L0 0` // Bowed Down
                            },
                            animate: {
                                d: `M0 0 L${width} 0 L${width} 0 Q${width / 2} 0 0 0 L0 0`, // Flat Top (Revealed)
                                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
                            },
                            exit: {
                                d: `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 300} 0 ${height} L0 0`, // Bowed Down (Covered)
                                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                            }
                        }}
                        initial="exit"
                        animate="animate"
                        exit="exit"
                    />
                </motion.svg>
            </motion.div>
        </>
    )
}
