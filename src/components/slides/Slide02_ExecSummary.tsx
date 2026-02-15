import { motion } from "framer-motion";
import { AlertTriangle, Code, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { InfiniteGrid } from "../ui/infinite-grid";

interface ExecCardProps {
    icon: LucideIcon;
    title: string;
    highlight: string;
    highlightLabel: string;
    text: React.ReactNode;
    color: string;
    delay: number;
}

const ExecCard = ({ icon: Icon, title, highlight, highlightLabel, text, color, delay }: ExecCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col gap-3 p-6 rounded-xl bg-zinc-900/90 border border-white/10 hover:bg-zinc-800 transition-colors shadow-2xl backdrop-blur-sm relative overflow-hidden group"
    >
        {/* Hover Glow */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-${color.replace('text-', '')}`} />

        <div className="flex items-center gap-3 mb-2 relative z-10">
            <div className={`p-2 rounded-lg w-fit bg-white/5`}>
                <Icon className={`w-6 h-6 ${color}`} />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        <div className="flex items-baseline gap-2 mb-2 relative z-10 flex-wrap">
            <span className={`text-4xl font-black ${color} whitespace-nowrap`}>{highlight}</span>
            <span className="text-zinc-400 text-sm font-medium">{highlightLabel}</span>
        </div>

        <div className="text-gray-300 leading-relaxed font-light text-sm relative z-10">
            {text}
        </div>
    </motion.div>
);

export default function Slide02_ExecSummary() {
    return (
        <div className="relative w-full h-full overflow-hidden bg-[#1c1c1c] flex flex-col items-center justify-center">
            {/* Background */}
            <InfiniteGrid className="opacity-100" />

            <div className="flex flex-col h-full w-full max-w-[1400px] px-12 md:px-24 z-10 relative justify-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">Executive Summary</h2>
                    <p className="text-zinc-400 text-xl font-light tracking-wide max-w-3xl mx-auto">
                        <strong className="text-white font-semibold">Lovable</strong> accelerates idea-to-app, but faces a critical retention gap as projects scale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ExecCard
                        icon={AlertTriangle}
                        title="The Problem"
                        highlight="12%"
                        highlightLabel="ready for launch"
                        text={
                            <span>
                                Only <strong>12% of projects</strong> made in Lovable are considered 'ready'. Users hit a complexity wall, forcing them to export code or abandon the platform entirely.
                            </span>
                        }
                        color="text-[#FE6323]" // Lovable Red-Orange
                        delay={0.2}
                    />
                    <ExecCard
                        icon={Code}
                        title="The Solution"
                        highlight="Dev Mode"
                        highlightLabel="native IDE"
                        text={
                            <div className="space-y-2">
                                <p className="font-medium text-white mb-1">Advanced Environment</p>
                                <ul className="list-disc list-inside space-y-1 text-zinc-400 text-xs">
                                    <li>VS Code-style editor + AI debugging</li>
                                    <li>Retains users when complexity increases</li>
                                    <li>Attracts pro devs & technical founders</li>
                                </ul>
                            </div>
                        }
                        color="text-[#4A6FDB]" // Lovable Blue
                        delay={0.4}
                    />
                    <ExecCard
                        icon={ArrowUpRight}
                        title="The Impact"
                        highlight="26%"
                        highlightLabel="CAGR market growth"
                        text="Complete lifecycle ownership. Significantly increased retention, expanded market reach, and positioning as a true end-to-end development platform."
                        color="text-[#DE82E3]" // Lovable Purple/Pink
                        delay={0.6}
                    />
                </div>
            </div>
        </div>
    );
}
