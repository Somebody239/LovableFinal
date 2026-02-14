import { motion } from 'framer-motion';
import lovableLogo from "../../assets/lovable-logo-white.svg";

export default function Slide01_Title() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full z-10 space-y-8">
            <div className="flex items-center gap-6">
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={lovableLogo}
                    alt="Lovable"
                    className="w-64 opacity-90 drop-shadow-2xl"
                />
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white/80 text-4xl font-light"
                >
                    X TKS
                </motion.span>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4"
            >
                <span className="text-white/60 font-medium text-sm tracking-wide">
                    Kishan, Minh, Siddharth
                </span>
            </motion.div>
        </div>
    );
}
