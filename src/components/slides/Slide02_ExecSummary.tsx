import { AlertTriangle, Code, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ExecCardProps {
    icon: LucideIcon;
    title: string;
    highlight: string;
    highlightLabel: string;
    text: string;
    color: string;
}

const ExecCard = ({ icon: Icon, title, highlight, highlightLabel, text, color }: ExecCardProps) => (
    <div className="flex flex-col gap-3 p-6 rounded-xl bg-zinc-900/90 border border-white/10 hover:bg-zinc-800 transition-colors shadow-2xl">
        <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg w-fit bg-white/5`}>
                <Icon className={`w-6 h-6 ${color}`} />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        <div className="flex items-baseline gap-2 mb-2">
            <span className={`text-4xl font-black ${color}`}>{highlight}</span>
            <span className="text-zinc-400 text-sm font-medium">{highlightLabel}</span>
        </div>

        <p className="text-gray-300 leading-relaxed font-light text-sm">
            {text}
        </p>
    </div>
);

export default function Slide02_ExecSummary() {
    return (
        <div className="flex flex-col h-full w-full max-w-[1400px] px-12 md:px-24 z-10 relative justify-center">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">Executive Summary</h2>
                <p className="text-zinc-400 text-lg font-light tracking-wide">The Case for Lovable Dev Mode</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ExecCard
                    icon={AlertTriangle}
                    title="The Problem"
                    highlight="88%"
                    highlightLabel="of projects never launch"
                    text="Lovable users hit a complexity wall at 60-70% completion, forcing exports and platform abandonment. Debugging loops consume up to 80% of user credits."
                    color="text-red-500"
                />
                <ExecCard
                    icon={Code}
                    title="The Solution"
                    highlight="Dev Mode"
                    highlightLabel="native IDE inside Lovable"
                    text="A seamless transition from conversational AI to a full-powered IDE. File access, terminal control, and granular debugging — all inside the browser."
                    color="text-blue-400"
                />
                <ExecCard
                    icon={TrendingUp}
                    title="The Impact"
                    highlight="26%"
                    highlightLabel="CAGR market growth"
                    text="Complete lifecycle ownership, significantly increased retention, and expanded market reach to professional developers and technical founders."
                    color="text-green-400"
                />
            </div>
        </div>
    );
}
