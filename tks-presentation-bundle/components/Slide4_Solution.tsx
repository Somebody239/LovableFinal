"use client";

import { motion } from "framer-motion";
import { Snowflake, Droplets, RefreshCw } from "lucide-react";
import SlideContainer from "./shared/SlideContainer";
import LiquidBlob from "./shared/LiquidBlob";

export default function Slide4_Solution() {
    return (
        <SlideContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Column: Content */}
                <div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#00A4EF] text-xs font-bold tracking-[0.2em] uppercase border border-[#00A4EF]/20 px-3 py-1.5 rounded">Solution</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                            Phase Change <br /> Materials <span className="text-zinc-600">(PCMs)</span>
                        </h2>
                        <p className="text-zinc-400 text-base leading-relaxed max-w-lg">
                            PCMs function as <span className="text-white font-medium">thermal batteries</span> that store and release heat during phase transitions. Salt hydrate PCMs deliver <span className="text-[#00A4EF] font-medium">3-4× system-level volume reduction</span> vs. water TES (NREL 2023).
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-4">
                        <StateCard
                            icon={Snowflake}
                            title="Solid State (Idle)"
                            stat="35-50°C"
                            text="Operating range calibrated 10°C below GPU throttle point (84°C). Salt hydrate PCMs absorb 250-300 kJ/kg during phase transition."
                            active={false}
                            delay={0.2}
                        />
                        <StateCard
                            icon={Droplets}
                            title="Liquid State (Active)"
                            stat="45°C"
                            text="Melts at precisely calibrated temperature per ASHRAE spec, absorbing thermal spikes within minutes. Powers instant-on cooling without complex control systems."
                            active={true}
                            delay={0.3}
                        />
                        <StateCard
                            icon={RefreshCw}
                            title="Regenerative Cycle"
                            stat="10,000+"
                            text="Re-solidifies during off-peak hours. NREL validated 10,000+ cycles with under 2% degradation. Requires 0.02 kW/kg to re-freeze off-peak."
                            active={false}
                            delay={0.4}
                        />
                    </div>
                </div>

                {/* Right Column: Visual Demo */}
                <div className="relative h-full flex flex-col justify-center items-center">

                    {/* Simulation Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-full max-w-[480px] h-[280px]"
                    >
                        <LiquidBlob />
                    </motion.div>

                    {/* Efficiency Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-4 bg-[#111] rounded-xl p-4 border border-white/10 w-full max-w-[480px]"
                    >
                        <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-zinc-500 mb-2">
                            <span>THERMAL STORAGE</span>
                            <span className="text-[#7FBA00]">3-4× MORE COMPACT</span>
                        </div>
                        <div className="h-2.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                                className="h-full bg-gradient-to-r from-[#00A4EF] to-[#7FBA00]"
                            />
                        </div>
                    </motion.div>
                </div>

            </div>
        </SlideContainer>
    );
}

const StateCard = ({ icon: Icon, title, stat, text, active, delay }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.5 }}
            className={`
                flex items-start gap-3 p-3 rounded-lg border transition-all duration-300
                ${active
                    ? "bg-[#00A4EF]/10 border-[#00A4EF]/30"
                    : "bg-zinc-900 border-zinc-800 opacity-70 hover:opacity-100"
                }
            `}
        >
            <div className={`p-2 rounded-lg shrink-0 ${active ? "text-[#00A4EF] bg-[#00A4EF]/20" : "text-zinc-500 bg-zinc-800"} `}>
                <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-bold text-sm ${active ? "text-white" : "text-zinc-300"} `}>
                        {title}
                    </h3>
                    {stat && (
                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${active ? "bg-[#00A4EF]/30 text-[#00A4EF]" : "bg-zinc-800 text-zinc-400"}`}>
                            {stat}
                        </span>
                    )}
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">
                    {text}
                </p>
            </div>
        </motion.div>
    )
}

