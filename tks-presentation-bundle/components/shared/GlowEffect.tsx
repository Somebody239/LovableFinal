"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowEffectProps {
    colors: string[];
    mode?: "rotate" | "pulse" | "flowHorizontal" | "static";
    blur?: "soft" | "medium" | "hard";
    scale?: number;
    duration?: number;
    className?: string;
}

export const GlowEffect = ({
    colors,
    mode = "static",
    blur = "medium",
    scale = 1,
    duration = 3,
    className
}: GlowEffectProps) => {

    const blurClass = {
        soft: "blur-xl",
        medium: "blur-2xl",
        hard: "blur-3xl",
    }[blur];

    const getBackground = () => {
        if (colors.length === 1) return colors[0];
        return `linear-gradient(to right, ${colors.join(", ")})`;
    };

    const variants = {
        rotate: {
            rotate: [0, 360],
            transition: { duration, repeat: Infinity, ease: "linear" }
        },
        pulse: {
            opacity: [0.5, 1, 0.5],
            scale: [scale, scale * 1.1, scale],
            transition: { duration, repeat: Infinity, ease: "easeInOut" }
        },
        flowHorizontal: {
            backgroundPosition: ["0% 50%", "100% 50%"],
            transition: { duration, repeat: Infinity, ease: "linear" }
        },
        static: {}
    };

    return (
        <motion.div
            className={cn("absolute inset-0 z-0", blurClass, className)}
            style={{
                background: getBackground(),
                backgroundSize: mode === "flowHorizontal" ? "200% 100%" : "auto",
                transform: `scale(${scale})`,
            }}
            variants={variants}
            animate={mode}
        />
    );
};
