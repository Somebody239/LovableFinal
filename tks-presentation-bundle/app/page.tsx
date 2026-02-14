"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slide1_Title from "@/components/Slide1_Title";
import Slide2_ExecSummary from "@/components/Slide2_ExecSummary";
import Slide3_Problem from "@/components/Slide3_Problem";
import Slide4_Solution from "@/components/Slide4_Solution";
import Slide5_Validation from "@/components/Slide5_Validation";
import Slide6_Timeline from "@/components/Slide6_Timeline";
import Slide7_ThankYou from "@/components/Slide7_ThankYou";

export default function PresentationPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        Slide1_Title,
        Slide2_ExecSummary,
        Slide3_Problem,
        Slide4_Solution,
        Slide5_Validation,
        Slide6_Timeline,
        Slide7_ThankYou,
    ];

    const nextSlide = useCallback(() => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    }, [currentSlide, slides.length]);

    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    }, [currentSlide]);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
                e.preventDefault();
                nextSlide();
            } else if (e.key === "ArrowLeft") {
                prevSlide();
            } else if (e.key === "f" || e.key === "F") {
                toggleFullscreen();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide, toggleFullscreen]);

    const CurrentSlideComponent = slides[currentSlide];
    const isLastSlide = currentSlide === slides.length - 1;

    return (
        <div
            className="w-screen h-screen bg-black text-white overflow-hidden relative"
        >
            {/* Click anywhere to go forward - but NOT on the last slide */}
            {!isLastSlide && (
                <div className="absolute inset-0 z-40 cursor-pointer" onClick={nextSlide} />
            )}

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                >
                    <CurrentSlideComponent />
                </motion.div>
            </AnimatePresence>


        </div>
    );
}