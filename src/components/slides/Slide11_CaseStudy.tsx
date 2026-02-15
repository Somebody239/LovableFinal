import { motion } from "framer-motion";
import { CaseStudyTimeline } from '../ui/slide-diagrams';

export default function Slide11_CaseStudy() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#1c1c1c] text-white relative overflow-hidden p-8">
            {/* Bright Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#4A6FDB]/20 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="max-w-6xl w-full z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Case Study: Microsoft Copilot</h2>
                    <p className="text-zinc-400 text-xl font-light tracking-widest uppercase opacity-70">The Blueprint</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <CaseStudyTimeline />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 max-w-4xl text-left bg-zinc-900/50 p-8 rounded-2xl border border-white/10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-white font-bold text-lg mb-2">The Experiment</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                In 2021, Microsoft introduced <strong>GitHub Copilot</strong> as an experimental AI coding assistant. Initially, it had limited language support and reliability issues. Over time, Microsoft expanded Copilot's functionality by adding chat tools, file awareness, and broader language coverage.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[#4A6FDB] font-bold text-lg mb-2">The Outcome</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                The results were extremely successful. Developer efficiency increased by about <strong>58%</strong>, and VS Code reached roughly <strong>50 million monthly active users</strong>. This demonstrates that expanding functionality while preserving usability can dramatically increase both retention and new user adoption.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
