import { motion } from "framer-motion";
import { StatsGrid } from "../ui/slide-diagrams";

export default function Slide05_Stats() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#1c1c1c] text-white relative overflow-hidden p-8">
            <div className="max-w-5xl w-full z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">The Reality Check</h2>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto">
                        Promising starts often lead to costly dead ends.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full"
                >
                    <StatsGrid />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full"
                >
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg border-b border-white/10 pb-2">Significance of the Data</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Only about 12% of projects built on Lovable are considered complete, showing a large gap between prototype creation and final product delivery. Research shows Lovable automatically completes roughly 70% of development, but advanced logic, security, and scalability require manual intervention.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-red-400 font-bold text-lg border-b border-red-500/10 pb-2">The Cost of Friction</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Debugging loops can consume up to 80% of user credits, sometimes raising costs to $200-$500 per month. Together, these limitations create friction that pushes users away from the platform.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
