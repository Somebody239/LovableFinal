import { motion } from "framer-motion";
import { PressureGauge } from '../ui/slide-diagrams';

export default function Slide04_CoreProblem() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#1c1c1c] text-white relative overflow-hidden p-8">
            <div className="max-w-4xl w-full z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">The Core Problem</h2>
                    <p className="text-zinc-400 text-lg font-mono tracking-widest uppercase opacity-70">User Journey</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <PressureGauge />
                </motion.div>

                <div className="grid grid-cols-2 gap-12 mt-12 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h4 className="text-white font-bold text-lg border-b border-white/10 pb-2">Bugs & Errors</h4>
                        <ul className="text-zinc-400 text-sm leading-relaxed space-y-2 list-disc list-inside">
                            <li>Chat-based debugging fails on edge-case bugs</li>
                            <li>No logs, breakpoints, or file-level editing</li>
                            <li>Projects stall at prototype stage</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="space-y-4"
                    >
                        <h4 className="text-red-400 font-bold text-lg border-b border-red-500/10 pb-2">The Consequence</h4>
                        <ul className="text-zinc-400 text-sm leading-relaxed space-y-2 list-disc list-inside">
                            <li>Reduced platform retention as projects scale</li>
                            <li>Lovable viewed as a toy, not a tool</li>
                            <li>Lost long-term ecosystem limits revenue</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
