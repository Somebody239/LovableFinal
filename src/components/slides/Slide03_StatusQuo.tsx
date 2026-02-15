import { motion } from "framer-motion";

export default function Slide03_StatusQuo() {
    return (
        <div className="relative w-full h-full bg-[#1c1c1c] text-white flex flex-col items-center justify-center overflow-hidden p-8">
            <div className="max-w-6xl w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">The Status Quo</h2>
                    <p className="text-2xl text-zinc-400 font-light">
                        Lovable is built for <span className="text-white font-semibold">non-coders</span>.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left: Success Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 text-right border-r border-white/10 pr-12"
                    >
                        <h3 className="text-4xl font-bold leading-tight">
                            "The fastest-growing software company <span className="text-[#4A6FDB]">ever</span>."
                        </h3>
                        {/* Interactive glow effect on hover could be added here */}
                        <div className="flex flex-col gap-8 items-end mt-8">
                            <div className="text-right">
                                <span className="block text-6xl font-bold text-white tracking-tighter">$100M</span>
                                <span className="text-zinc-500 text-sm tracking-[0.2em] uppercase font-bold mt-1 block">ARR in 12 mo</span>
                            </div>
                            <div className="text-right">
                                <span className="block text-6xl font-bold text-white tracking-tighter">$6.6B</span>
                                <span className="text-zinc-500 text-sm tracking-[0.2em] uppercase font-bold mt-1 block">Valuation</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The Reality */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8 pl-4"
                    >
                        <h3 className="text-3xl text-zinc-400 font-light italic">But the reality is...</h3>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6">
                                <span className="text-8xl font-black text-red-500 tracking-tighter">88%</span>
                                <div className="flex flex-col">
                                    <span className="text-2xl text-white font-light leading-tight">of projects</span>
                                    <span className="text-2xl text-white font-bold leading-tight uppercase">never launch.</span>
                                </div>
                            </div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl max-w-md relative group"
                            >
                                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-r-xl" />
                                <p className="italic text-zinc-300 text-lg relative z-10">"Great for prototypes, but I had to export to Cursor for the real work."</p>
                                <span className="block text-xs text-red-400 mt-3 font-bold uppercase tracking-wider relative z-10">— Early Adopter</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
