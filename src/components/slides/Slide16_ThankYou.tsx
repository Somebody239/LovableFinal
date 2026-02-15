import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TeamMember = ({ image, name, email }: { image: string; name: string; email: string }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 bg-zinc-800">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="text-center">
            <p className="text-white font-medium text-sm">{name}</p>
            <p className="text-zinc-400 text-xs">{email}</p>
        </div>
    </div>
);

export default function Slide16_ThankYou() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full z-10 relative overflow-hidden p-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white text-center">
                    Thank You
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col items-center gap-6 mb-12"
            >
                <a
                    href="https://youtu.be/DzK77TwX30M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-semibold text-base flex items-center gap-3 transition-all duration-300 z-50 mb-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <span>Thank You Video</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-white/40 text-xs tracking-[0.3em] uppercase">
                    Lovable Strategy Team · 2026
                </p>
            </motion.div>

            {/* Team Profiles */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-3 gap-6 w-full max-w-3xl"
            >
                <TeamMember
                    image="/Profile Pictures/Kishan Joshi.jpeg"
                    name="Kishan Joshi"
                    email="kishan.cut@gmail.com"
                />
                <TeamMember
                    image="/Profile Pictures/Siddharth Gowthaman.jpeg"
                    name="Siddharth Gowthaman"
                    email="siddharth.gowthaman@gmail.com"
                />
                <TeamMember
                    image="/Profile Pictures/Minh Do.png"
                    name="Minh Do"
                    email="minhepic99@gmail.com"
                />
            </motion.div>
        </div>
    );
}
