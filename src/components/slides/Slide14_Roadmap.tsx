import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface PhaseCardProps {
    phase: string;
    title: string;
    duration: string;
    color: string;
    items: string;
    metric: string;
    delay: number;
}

const PhaseCard = ({ phase, title, duration, color, items, metric, delay }: PhaseCardProps) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-zinc-900/50 border border-white/10 rounded-2xl hover:bg-zinc-800/60 transition-colors w-full group"
    >
        <div className={`w-2 h-full min-h-[60px] rounded-full ${color} hidden md:block`} />

        <div className="flex-1 space-y-2">
            <div className="flex items-center gap-3">
                <span className={`text-xs font-bold px-2 py-1 rounded-md bg-white/5 ${color.replace('bg-', 'text-')}`}>{phase}</span>
                <span className="text-zinc-500 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {duration}
                </span>
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{items}</p>
        </div>

        <div className="w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 md:pl-6 md:border-l border-white/5 flex flex-col items-start md:items-end gap-1">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Key Metric</span>
            <span className={`text-lg font-bold ${color.replace('bg-', 'text-')}`}>{metric}</span>
        </div>
    </motion.div>
);

export default function Slide14_Roadmap() {
    const phases: PhaseCardProps[] = [
        {
            phase: 'PHASE 1',
            duration: 'Month 1-2',
            title: 'Research & Architecture',
            color: 'bg-blue-500',
            items: 'Conduct user interviews with 15+ developers. Define technical stack (VS Code web / Supabase). Validate feasibility of file system access.',
            metric: 'Tech Spec',
            delay: 0.2
        },
        {
            phase: 'PHASE 2',
            duration: 'Month 3-5',
            title: 'MVP Development',
            color: 'bg-indigo-500',
            items: 'Build core IDE interface. Integrate AI code generation with file editing. Implement basic terminal commands and git support.',
            metric: 'Alpha Launch',
            delay: 0.3
        },
        {
            phase: 'PHASE 3',
            duration: 'Month 6-7',
            title: 'Beta Testing & Iteration',
            color: 'bg-purple-500',
            items: 'Onboard 50 power users. Gather qualitative feedback on "Dev Mode" toggle. Optimize performance and latency.',
            metric: '80% Retention',
            delay: 0.4
        },
        {
            phase: 'PHASE 4',
            duration: 'Month 8',
            title: 'Public Launch',
            color: 'bg-pink-500',
            items: 'Global marketing campaign. Documentation release. Community showcase of apps built entirely in Lovable.',
            metric: '5k Signups',
            delay: 0.5
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#1c1c1c] text-white relative overflow-hidden p-8">
            <div className="max-w-5xl w-full z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Implementation Roadmap</h2>
                    <p className="text-zinc-400 text-xl font-light tracking-widest uppercase opacity-70">The Path Forward</p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4 w-full">
                    {phases.map((p, i) => (
                        <PhaseCard key={i} {...p} />
                    ))}
                </div>
            </div>
        </div>
    );
}
