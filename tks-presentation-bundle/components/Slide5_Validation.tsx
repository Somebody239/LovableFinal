"use client";

import { motion } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

export default function Slide5_Validation() {
    return (
        <SlideContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start h-full">

                {/* Left: Heading & Context */}
                <div className="order-2 lg:order-1 flex flex-col justify-center h-full">
                    <div className="mb-8">
                        <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Case Study</span>
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
                            Industry Validation
                            {/* Wafr Logo */}
                            <motion.img
                                src="/logos/waft_tech_transparent_logo.png"
                                alt="Wafr"
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="h-8 object-contain"
                            />
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-white font-bold text-sm mb-1">Wafr Technologies (Vancouver)</h3>
                                <p className="text-zinc-400 leading-relaxed font-light text-xs">
                                    A startup building high efficiency net-zero AI data centers. Their proprietary PCM cooling eliminates chillers entirely, cutting cooling power by 80%.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm mb-1">Cool-Data Project (Horizon-EU, Denmark)</h3>
                                <p className="text-zinc-400 leading-relaxed font-light text-xs">
                                    EU-funded research collaboration demonstrating AI-enhanced PCM systems in SME data centers. Achieved PUE of 1.07 with 90% cooling energy reduction when paired with free-air cooling.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm mb-1">Commercial Deployment: Cartesian Thermal Box</h3>
                                <p className="text-zinc-400 leading-relaxed font-light text-xs">
                                    Proven integration with existing cooling infrastructure. Modular design scales from single racks to multi-MW data halls.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Data Table / Stats */}
                <div className="order-1 lg:order-2 h-full flex flex-col justify-center">
                    <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="text-[#00A4EF] font-bold text-xs tracking-widest uppercase mb-4">Validated Results</div>

                        <div className="grid grid-cols-3 gap-6 mb-6 border-b border-white/5 pb-6">
                            <StatBlock value="18-22%" label="TCO Reduction" sub="vs. chilled-water cooling" color="text-[#00A4EF]" />
                            <StatBlock value="7.6B L" label="Water Saved" sub="3,040 Olympic pools/yr" color="text-white" />
                            <StatBlock value="90%" label="Energy Reduction" sub="with free-air integration" color="text-[#7FBA00]" />
                        </div>

                        <ul className="space-y-3 text-xs text-zinc-400 font-light mb-6">
                            <li className="flex gap-2">
                                <span className="text-[#00A4EF]">•</span>
                                Vancouver pilot achieved PUE of 1.02 over 8 months (Wafr Q3-2024)
                            </li>
                            <li className="flex gap-2">
                                <span className="text-[#00A4EF]">•</span>
                                PCM modules validated for 10,000+ thermal cycles with under 2% degradation (NREL 2023)
                            </li>
                            <li className="flex gap-2">
                                <span className="text-[#00A4EF]">•</span>
                                Full investment payback achieved in 20 months (Wafr pilot)
                            </li>
                            <li className="flex gap-2">
                                <span className="text-[#7FBA00]">•</span>
                                Peak shaving capability: shifts cooling load to off-peak hours
                            </li>
                            <li className="flex gap-2">
                                <span className="text-[#7FBA00]">•</span>
                                Google DeepMind achieved 40% cooling energy reduction via AI control (2021)
                            </li>
                        </ul>

                        <div className="text-[9px] text-zinc-600 leading-tight">
                            Sources: Wafr Technologies Pilot Report Q3-2024, Cool-Data Horizon-EU 2023, NREL PCM field validation 2023.
                        </div>
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
}

const StatBlock = ({ value, label, sub, color }: any) => (
    <div>
        <div className={`text-2xl font-bold mb-1 ${color}`}>{value}</div>
        <div className="text-white font-bold text-xs">{label}</div>
        <div className="text-zinc-500 text-[10px]">{sub}</div>
    </div>
)

