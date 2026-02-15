import { motion } from "framer-motion";
import { Server, Zap, Users, Layout, Terminal, Code2 } from "lucide-react";
import { InteractiveToggle } from '../ui/slide-diagrams';

import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    desc: string;
    delay: number;
    color: string;
}

const FeatureCard = ({ icon: Icon, title, desc, delay, color }: FeatureCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="relative group rounded-xl p-[1px] overflow-hidden"
    >
        {/* Animated Gradient Border */}
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

        <div className="relative bg-zinc-900/90 h-full p-5 rounded-xl backdrop-blur-sm border border-white/5">
            <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/5 rounded-lg">
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-white text-base">{title}</h4>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

export default function Slide07_Solution() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#1c1c1c] text-white relative overflow-hidden p-8">
            <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: The Concept */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8"
                >
                    <div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            The Solution: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A6FDB] to-[#DE82E3]">Lovable Dev Mode</span>
                        </h2>
                        <p className="text-zinc-400 text-xl font-light leading-relaxed">
                            A seamless transition from conversational AI to a full-powered
                            Integrated Development Environment, right inside the browser.
                        </p>
                    </div>

                    <div className="scale-90 origin-left">
                        <InteractiveToggle />
                    </div>
                </motion.div>

                {/* Right: The Capabilities (Merged from Slide 8) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FeatureCard
                        icon={Server}
                        title="Cloud Backend Editor"
                        desc="Direct access to Supabase/Postgres. No more prompt guessing."
                        color="from-[#4A6FDB] to-[#7F7BEF]"
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={Zap}
                        title="One-Click Hosting"
                        desc="Ship in seconds. Integrated CI/CD pipeline."
                        color="from-[#FE6323] to-[#FE4993]"
                        delay={0.3}
                    />
                    <FeatureCard
                        icon={Users}
                        title="Real-time Collab"
                        desc="Multiplayer editing like Figma, for code."
                        color="from-[#DE82E3] to-[#FE4993]"
                        delay={0.4}
                    />
                    <FeatureCard
                        icon={Layout}
                        title="Visual + Code Sync"
                        desc="Edit visually or in code. State stays perfectly in sync."
                        color="from-[#7F7BEF] to-[#4A6FDB]"
                        delay={0.5}
                    />
                    <FeatureCard
                        icon={Terminal}
                        title="Full Terminal Access"
                        desc="Run npm commands, install packages, and manage git."
                        color="from-[#FE4993] to-[#FE6323]"
                        delay={0.6}
                    />
                    <FeatureCard
                        icon={Code2}
                        title="Two-Way Sync"
                        desc="AI writes code, you write code. It never breaks."
                        color="from-[#4A6FDB] to-[#DE82E3]"
                        delay={0.7}
                    />
                </div>
            </div>
        </div>
    );
}
