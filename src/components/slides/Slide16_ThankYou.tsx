import { motion } from 'framer-motion';

export default function Slide16_ThankYou() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full z-10 space-y-8">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-7xl font-bold text-white tracking-tight text-center"
            >
                Let's Build It.
            </motion.h2>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center space-y-2"
            >
                <p className="text-zinc-300 text-xl font-light">Kishan, Minh, Siddharth</p>
                <span className="text-white/60 text-xs tracking-[0.2em] uppercase">Lovable Strategy Team</span>
            </motion.div>
        </div>
    );
}
