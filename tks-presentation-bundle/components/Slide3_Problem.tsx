"use client";

import { motion } from "framer-motion";
import { Zap, Flame, AlertCircle } from "lucide-react";
import { GlowEffect } from "./shared/GlowEffect";
import HeatHaze from "./shared/HeatHaze";

export default function Slide3_Problem() {
    return (
        <div className="relative w-full h-full flex flex-col justify-center bg-black text-white overflow-hidden p-8">

            {/* Heat Haze Effect Background */}
            <div className="absolute inset-0 z-0">
                <HeatHaze />
            </div>

            {/* Background Gradient - Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-[#F25022]/20 pointer-events-none z-0" />

            <div className="relative z-10 max-w-7xl mx-auto w-full">

                <div className="flex items-start gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-14 h-14 rounded-2xl bg-[#F25022] flex items-center justify-center shadow-lg shadow-[#F25022]/20 relative overflow-hidden shrink-0"
                    >
                        <GlowEffect colors={['#FFCC00', '#F25022', '#FF0000']} blur="soft" duration={3} />
                        <Flame className="w-7 h-7 text-white relative z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-[#F25022] font-bold tracking-widest uppercase text-xs mb-2 block">Problem</span>
                        <h2 className="text-3xl font-bold mb-2">The AI Thermal Bottleneck</h2>
                        <p className="text-zinc-400 text-base font-light max-w-2xl">
                            Modern AI GPUs generate immense heat that traditional cooling cannot handle. This is not a future problem; it is happening now.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <ProblemCard
                        icon={Zap}
                        tag="Grid Capacity Crisis"
                        stat="NOVA"
                        statLabel="connection suspended"
                        title="Power Grids Are Full"
                        text="Dominion Energy suspended new data center connections in Northern Virginia zone (2023). Ireland caps data center power at 15% of peak demand (EirGrid 2023)."
                        delay={0.4}
                    />
                    <ProblemCard
                        icon={Flame}
                        tag="Heat Density Explosion"
                        stat="85-100kW"
                        statLabel="per AI rack"
                        title="Air Cooling Has Failed"
                        text="NVIDIA DGX H100 racks generate 85-100 kilowatts each, 10× denser than traditional cloud racks (8-10kW). Air cooling maxes out at 15-20kW per rack (ASHRAE TC 9.9)."
                        delay={0.5}
                    />
                    <ProblemCard
                        icon={AlertCircle}
                        tag="Community Backlash"
                        stat="7.6B"
                        statLabel="liters of water per year"
                        title="Water Wars Are Coming"
                        text="A 200MW data center consumes 7.6 billion liters of water annually. Microsoft Goodyear, AZ faced protests over 125M gal/yr usage (Arizona Republic, Sep 2022)."
                        delay={0.6}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-10 flex justify-center"
                >
                    <div className="bg-[#F25022]/10 border border-[#F25022]/30 px-6 py-3 rounded-full text-[#F25022] font-medium text-sm tracking-wide shadow-[0_0_30px_-10px_rgba(242,80,34,0.3)]">
                        "250+ new hyperscale data centers needed by 2027" (IDC 2024)
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

const ProblemCard = ({ icon: Icon, tag, stat, statLabel, title, text, delay }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            className="group relative p-6 rounded-2xl bg-[#121212] border border-white/5 overflow-hidden hover:border-[#F25022]/30 transition-colors"
        >
            {/* Passive Glow Effect on Card Top */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <GlowEffect
                    colors={['transparent', '#F25022', 'transparent']}
                    mode="flowHorizontal"
                    blur="medium"
                    scale={0.8}
                    className="-top-20 h-40"
                />
            </div>

            <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="p-2.5 rounded-full bg-white/5 group-hover:bg-[#F25022]/10 transition-colors">
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#F25022] transition-colors" />
                </div>
                <span className="text-[10px] font-bold text-zinc-600 tracking-widest uppercase">Critical</span>
            </div>

            <div className="text-zinc-500 text-xs font-medium mb-2 relative z-10">{tag}</div>

            {/* Stat Highlight */}
            {stat && (
                <div className="flex items-baseline gap-2 mb-2 relative z-10">
                    <span className="text-3xl font-black text-[#F25022]">{stat}</span>
                    <span className="text-zinc-400 text-xs font-medium">{statLabel}</span>
                </div>
            )}

            <h3 className="text-lg font-bold text-white mb-2 relative z-10">{title}</h3>
            <p className="text-zinc-400 leading-relaxed font-light text-xs relative z-10">
                {text}
            </p>
        </motion.div>
    )
}

