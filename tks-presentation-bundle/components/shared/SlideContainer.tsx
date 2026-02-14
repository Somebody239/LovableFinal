"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideContainerProps {
    children: ReactNode;
    className?: string; // Allow custom classes like bg colors
}

export default function SlideContainer({ children, className = "" }: SlideContainerProps) {
    return (
        <div
            className={`w-full h-full flex flex-col items-center justify-center p-8 md:p-16 ${className}`}
        >
            <div className="w-full max-w-7xl relative mx-auto h-full flex flex-col justify-center">
                {children}
            </div>
        </div>
    );
}
