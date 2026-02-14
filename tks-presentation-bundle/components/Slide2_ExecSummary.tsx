"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Droplets, ArrowRight } from "lucide-react";
import SlideContainer from "./shared/SlideContainer";
import { InfiniteGrid } from "./shared/InfiniteGrid";

export default function Slide2_ExecSummary() {
    return (
        <div className="relative w-full h-full bg-black overflow-hidden">
            {/* Infinite Grid Background - Covers whole slide */}
            <InfiniteGrid className="absolute inset-0 z-0" />

            {/* SlideContent - Positioned on top */}
            <div className="absolute inset-0 z-10">
                <SlideContainer className="bg-transparent">
                    <div className="relative z-10 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-12 text-center md:text-left"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">Executive Summary</h2>
                            <p className="text-zinc-400 text-lg font-light tracking-wide">Solving the AI Thermal Crisis with Phase Change Materials</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ExecCard
                                icon={AlertTriangle}
                                title="The Problem"
                                highlight="45-50%"
                                highlightLabel="of AI DC power"
                                text="AI data centers dedicate 45-50% of their total power to cooling (vs. 30% legacy). Microsoft's estimated $300M+ annual cooling opex is growing 40% annually and a new cost effective solution is needed."
                                color="ms-red"
                                delay={0.2}
                            />
                            <ExecCard
                                icon={Droplets}
                                title="The Solution"
                                highlight="4×"
                                highlightLabel="more compact than thermal energy storage"
                                text="Phase Change Materials (PCMs) act as thermal batteries storing excess heat during peak loads and releasing it off-peak. Salt hydrate PCMs deliver 250-300 kJ/kg latent heat capacity."
                                color="ms-blue"
                                delay={0.3}
                            />
                            <ExecCard
                                icon={ArrowRight}
                                title="The Impact"
                                highlight="18-22%"
                                highlightLabel="TCO reduction"
                                text="Projected savings of $60M+ annually at 200MW scale. Eliminate 7.6 billion liters of water usage per year (3,040 Olympic pools). Achieve 90% peak cooling reduction with free-air integration."
                                color="ms-green"
                                delay={0.4}
                            />
                        </div>
                    </div>
                </SlideContainer>
            </div>
        </div>
    );
}

const ExecCard = ({ icon: Icon, title, highlight, highlightLabel, text, color, delay }: any) => {
    const colors = {
        "ms-red": { text: "text-[#F25022]", bg: "bg-[#F25022]" },
        "ms-blue": { text: "text-[#00A4EF]", bg: "bg-[#00A4EF]" },
        "ms-green": { text: "text-[#7FBA00]", bg: "bg-[#7FBA00]" }
    };

    const colorStyle = colors[color as keyof typeof colors];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col gap-3 p-6 rounded-xl bg-zinc-900/90 border border-white/10 hover:bg-zinc-800 transition-colors shadow-2xl"
        >
            <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg w-fit bg-white/5 ${colorStyle.text}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>

            {/* Highlight Stat */}
            <div className="flex items-baseline gap-2 mb-2">
                <span className={`text-4xl font-black ${colorStyle.text}`}>{highlight}</span>
                <span className="text-zinc-400 text-sm font-medium">{highlightLabel}</span>
            </div>

            <p className="text-gray-300 leading-relaxed font-light text-sm">
                {text}
            </p>
        </motion.div>
    )
}

