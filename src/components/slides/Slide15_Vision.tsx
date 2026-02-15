import { motion } from "framer-motion";

export default function Slide15_Vision() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#1c1c1c] text-white relative overflow-hidden p-8">
            <div className="max-w-5xl w-full z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute -top-12 -left-12 text-blue-500/20 font-serif text-[120px] leading-none select-none">"</div>

                    <h2 className="text-4xl md:text-6xl font-medium leading-tight mb-12 relative z-10">
                        Lovable can't just help users <span className="text-blue-400">start</span> building software; <br />
                        it needs to help them <span className="text-purple-400">finish</span> it.
                    </h2>

                    <div className="absolute -bottom-12 -right-12 text-purple-500/20 font-serif text-[120px] leading-none select-none rotate-180">"</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-3xl"
                >
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-8" />
                    <p className="text-zinc-400 text-xl font-light leading-relaxed">
                        By closing the gap between prototype and production, we unlock the full potential of AI-assisted development.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
