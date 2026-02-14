"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
    motion,
    useMotionValue,
    useAnimationFrame
} from "framer-motion";

export const InfiniteGrid = ({ className }: { className?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const gridOffsetX = useMotionValue(0);
    const gridOffsetY = useMotionValue(0);

    const speedX = 0.2; // Slower speed for subtle background
    const speedY = 0.2;

    useAnimationFrame(() => {
        const currentX = gridOffsetX.get();
        const currentY = gridOffsetY.get();
        gridOffsetX.set((currentX + speedX) % 40);
        gridOffsetY.set((currentY + speedY) % 40);
    });

    return (
        <div
            ref={containerRef}
            className={cn(
                "absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-[#0a0a0a]", // Dark bg
                className
            )}
        >
            <div className="absolute inset-0 z-0 opacity-[0.067]">
                <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient-vignette pointer-events-none" />
        </div>
    );
};

const GridPattern = ({ offsetX, offsetY }: { offsetX: any; offsetY: any }) => {
    return (
        <svg className="w-full h-full">
            <defs>
                <motion.pattern
                    id="grid-pattern"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                    x={offsetX}
                    y={offsetY}
                >
                    <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-white" // White lines
                    />
                </motion.pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
    );
};
