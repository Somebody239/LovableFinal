import { motion } from "framer-motion";
import { Fingerprint, ShieldCheck, GitBranch } from "lucide-react";

export default function Slide10_Mitigation() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#1c1c1c] text-white relative overflow-hidden p-8">
            <div className="max-w-6xl w-full z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Risk Mitigation</h2>
                    <p className="text-zinc-400 text-xl font-light tracking-widest uppercase opacity-70">Strategic Approach</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-zinc-900/50 border border-green-500/20 rounded-2xl p-8 hover:bg-zinc-800/80 transition-colors group"
                    >
                        <div className="p-3 bg-green-500/10 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                            <Fingerprint className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">Preserving Identity</h3>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            Lovable enables creation. Dev Mode extends it. We launch Dev Mode as an <strong>optional advanced workspace</strong>, ensuring the core chat interface remains simple for beginners.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 hover:bg-zinc-800/80 transition-colors group"
                    >
                        <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                            <ShieldCheck className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Technical Security</h3>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            We mitigate risks through sandboxed environments, automated dependency scanning, and strict permission controls to prevent unsafe code execution.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 hover:bg-zinc-800/80 transition-colors group"
                    >
                        <div className="p-3 bg-purple-500/10 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                            <GitBranch className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">Gradual Rollout</h3>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            A phased beta rollout allows us to gather feedback from power users first, iterating on the experience before enabling it for the broader user base.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
