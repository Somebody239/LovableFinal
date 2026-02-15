import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Slide13_Prototype() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#1c1c1c] text-white relative overflow-hidden p-8">
            <div className="max-w-6xl w-full z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Experience Dev Mode</h2>
                    <p className="text-zinc-400 text-xl font-light tracking-widest uppercase opacity-70">Live Prototype</p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-10 w-full justify-center">
                    {/* QR Code + Link */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative group p-1 rounded-3xl bg-gradient-to-br from-[#4A6FDB] via-[#DE82E3] to-[#FE6323] shrink-0"
                    >
                        <div className="bg-[#1c1c1c] rounded-[20px] p-6 flex flex-col items-center gap-6">
                            <div className="w-48 h-48 bg-white rounded-xl overflow-hidden p-2">
                                <img
                                    src="/qrcode/QR Code for Prototype.png"
                                    alt="QR Code for Prototype"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="text-center space-y-2">
                                <a
                                    href="https://tkslovable.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 text-lg font-bold text-white hover:text-[#4A6FDB] transition-colors"
                                >
                                    tkslovable.netlify.app
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                                <p className="text-zinc-500 text-sm">Scan or click to visit</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Screenshot */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 max-w-2xl"
                    >
                        <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-zinc-900/50">
                            <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900/80 border-b border-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-zinc-500 text-xs ml-2 font-mono">Lovable Dev Mode</span>
                            </div>
                            <img
                                src="/Screenshot/Screenshot of prototype.jpeg"
                                alt="Prototype Screenshot"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
