import { motion } from "framer-motion";
import { SpectrumSlider } from "../ui/slide-diagrams";

export default function Slide06_RootCause() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#1c1c1c] text-white relative overflow-hidden p-8">
            <div className="max-w-5xl w-full z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">The Root Cause</h2>
                    <p className="text-zinc-400 text-xl font-light">
                        A fragmented workflow forces users to abandon the platform.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full mb-12"
                >
                    <SpectrumSlider />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-3xl text-center space-y-4"
                >
                    <div className="p-8 bg-zinc-900/50 border border-white/10 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-4">The Problem</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Lovable handles the first <strong>90%</strong> of development perfectly, ideation, UI, and basic logic.
                            But it fails at the critical last <strong>10%</strong> complex integrations, security, and edge cases.
                            When users hit this wall, they are forced to export and leave, breaking the loop.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
