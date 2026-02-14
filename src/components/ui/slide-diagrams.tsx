import { motion } from "framer-motion";
import { cn } from "../../utils/index";
import { ArrowRight, AlertTriangle } from "lucide-react";

// --- Slide 4: Pressure Gauge / Heat Map (Refined) ---
export const PressureGauge = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-8 flex flex-col items-center">
            {/* Straight Process Line */}
            <div className="relative w-full h-2 bg-zinc-800 rounded-full mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 opacity-80 rounded-full" />

                {/* Markers */}
                {['Ideation', 'Prompting', 'Building', 'Friction', 'Limit'].map((step, i) => (
                    <div key={i} className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: `${i * 25}%` }}>
                        <div className="w-4 h-4 rounded-full bg-zinc-900 border-2 border-white z-10" />
                        <span className="text-xs font-mono uppercase tracking-widest absolute -bottom-8 whitespace-nowrap text-zinc-400">{step}</span>
                    </div>
                ))}
            </div>

            {/* The Leak / Export Visual */}
            <div className="flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <ArrowRight className="text-red-500 w-6 h-6" />
                <span className="text-red-400 font-bold text-sm">FORCED EXPORT TO EXTERNAL IDE</span>
            </div>
        </div>
    );
};

// --- Slide 5: Stats Grid (Compact) ---
export const StatsGrid = () => {
    return (
        <div className="grid grid-cols-2 gap-4 w-full h-full max-w-4xl mx-auto">
            <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 flex flex-col justify-center">
                <h3 className="text-6xl font-bold text-white mb-2">12%</h3>
                <p className="text-zinc-400 text-sm">Completion Rate</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 flex flex-col justify-center">
                <h3 className="text-6xl font-bold text-white mb-2">80%</h3>
                <p className="text-zinc-400 text-sm">Credit Waste on Debugging</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 flex flex-col justify-center">
                <h3 className="text-6xl font-bold text-white mb-2">65%</h3>
                <p className="text-zinc-400 text-sm">Auto-generated Code</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 flex flex-col justify-center">
                <h3 className="text-6xl font-bold text-white mb-2">$500</h3>
                <p className="text-zinc-400 text-sm">Monthly Burn / Active Project</p>
            </div>
        </div>
    )
}


// --- Slide 6: Spectrum Slider (Refined) ---
export const SpectrumSlider = () => {
    return (
        <div className="w-full max-w-4xl mx-auto py-12 relative">
            {/* The Bar */}
            <div className="w-full h-6 bg-zinc-800 rounded-full relative overflow-hidden flex">
                <div className="w-1/3 h-full bg-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-300 tracking-widest border-r border-white/10">NO-CODE</div>
                <div className="w-1/3 h-full bg-red-500/20 flex items-center justify-center text-[10px] font-bold text-red-400 tracking-widest border-r border-white/10 relative">
                    <div className="absolute inset-0 border-y border-red-500/50 animate-pulse" />
                    THE GAP
                </div>
                <div className="w-1/3 h-full bg-purple-500/30 flex items-center justify-center text-[10px] font-bold text-purple-300 tracking-widest">FULL-CODE</div>
            </div>

            {/* Labels */}
            <div className="flex justify-between mt-6 text-center">
                <div className="w-1/3">
                    <span className="text-blue-400 font-bold text-sm block">Lovable Today</span>
                    <span className="text-zinc-500 text-xs">Ideation & Prototypes</span>
                </div>

                <div className="w-1/3 relative">
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-zinc-900 px-4 py-2 border border-red-500/30 rounded-lg shadow-xl">
                        <span className="text-red-400 font-bold text-xs whitespace-nowrap">USER DROPOFF ZONE</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-red-500 mx-auto rotate-90 mt-[-10px]" />
                </div>

                <div className="w-1/3">
                    <span className="text-purple-400 font-bold text-sm block">External IDEs</span>
                    <span className="text-zinc-500 text-xs">Cursor / VS Code</span>
                </div>
            </div>
        </div>
    )
}

// --- Slide 7: Interactive Toggle (Single Switch) ---
export const InteractiveToggle = () => {
    return (
        <div className="flex flex-col items-center gap-12 w-full">
            {/* Switch UI */}
            <div className="relative w-[300px] h-14 bg-zinc-900 rounded-full border border-white/10 p-1 flex items-center shadow-2xl">
                {/* Moving Switch Knob */}
                <motion.div
                    className="w-1/2 h-full bg-zinc-700 rounded-full shadow-lg border border-white/10 z-10"
                    initial={{ x: 0 }}
                    animate={{ x: 146 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }} // Switch ONCE
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-8 h-1 bg-white/20 rounded-full" />
                    </div>
                </motion.div>

                {/* Labels */}
                <div className="absolute inset-0 flex items-center justify-between px-10 pointer-events-none">
                    <span className="text-sm font-bold text-zinc-500">CREATOR</span>
                    <span className="text-sm font-bold text-white text-shadow-glow">DEV MODE</span>
                </div>
            </div>
        </div>
    )
}

// --- Slide 9: Risk List (Vertical) ---
export const RiskList = () => {
    const risks = [
        { title: "Identity Drift", desc: "Risk of confusing non-technical users with complex tools.", color: "text-amber-500", border: "border-amber-500/30" },
        { title: "Product Complexity", desc: "Maintenance burden of supporting two distinct workflows.", color: "text-orange-500", border: "border-orange-500/30" },
        { title: "Resource Drain", desc: "Engineering focus split between AI generation and IDE features.", color: "text-red-400", border: "border-red-400/30" },
        { title: "Security", desc: "Executing arbitrary code introduces new vulnerability vectors.", color: "text-red-500", border: "border-red-500/30" },
        { title: "Competition", desc: "Established IDEs (VS Code, Cursor) set a high quality bar.", color: "text-rose-500", border: "border-rose-500/30" }
    ];

    return (
        <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
            {risks.map((risk, i) => (
                <div key={i} className={cn("flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border", risk.border)}>
                    <div className={cn("mt-1 p-2 rounded-lg bg-white/5", risk.color)}>
                        <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                        <h4 className={cn("font-bold text-base mb-1", risk.color)}>{risk.title}</h4>
                        <p className="text-zinc-400 text-sm">{risk.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

// --- Slide 11: Case Study Timeline (Refined) ---
export const CaseStudyTimeline = () => {
    return (
        <div className="relative w-full max-w-4xl mx-auto py-8">
            <div className="border-t border-zinc-800 w-full absolute top-[60px]" />
            <div className="grid grid-cols-4 gap-4">
                {[
                    { year: '2021', title: 'Experiment', sub: 'GitHub Copilot Launch (Preview)' },
                    { year: '2023', title: 'Expansion', sub: 'Chat & Enterprise Features' },
                    { year: '2024', title: 'Integration', sub: 'Deep VS Code Integration' },
                    { year: 'Result', title: 'Dominance', sub: '50M+ MAU / +58% Efficiency' },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center relative text-center">
                        <span className="text-zinc-600 text-xs font-mono mb-6 bg-black px-2 z-10">{item.year}</span>
                        <div className="w-3 h-3 rounded-full bg-blue-500 border-4 border-black z-10 mb-4" />
                        <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-zinc-500 px-4">{item.sub}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

// --- Slide 14: Implementation Plan with Metrics (Refined Alignment) ---
export const PhasedTimeline = () => {
    return (
        <div className="flex flex-col w-full gap-4 pl-4 pr-4">
            {[
                { phase: 'PHASE 1', duration: '2 Months', title: 'Research & Plan', color: 'bg-blue-500', items: 'User Interviews, Tech Stack, Feasibility', metric: '15+ Interviews' },
                { phase: 'PHASE 2', duration: '3 Months', title: 'Build Dev Mode', color: 'bg-indigo-500', items: 'VS Code Core, AI Integration, Backend', metric: 'Alpha Launch' },
                { phase: 'PHASE 3', duration: '2 Months', title: 'Beta Test', color: 'bg-purple-500', items: 'Power User Access, Feedback Loop', metric: '80% Retention' },
                { phase: 'PHASE 4', duration: '1 Month', title: 'Public Launch', color: 'bg-pink-500', items: 'Marketing, Docs, Global Release', metric: '5k Signups' },
            ].map((phase, i) => (
                <div key={i} className="flex items-center gap-6 p-4 bg-zinc-900/40 border border-white/5 rounded-xl hover:bg-zinc-900/60 transition-colors">
                    <div className={cn("w-1 h-12 rounded-full", phase.color)} />
                    <div className="w-32 flex-shrink-0">
                        <span className="text-[10px] font-bold text-zinc-500 block">{phase.duration}</span>
                        <span className="text-xs font-bold text-white">{phase.phase}</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-base font-bold text-white">{phase.title}</h4>
                        <p className="text-xs text-zinc-400">{phase.items}</p>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] uppercase text-zinc-600 font-bold block">TARGET</span>
                        <span className="text-xs font-bold text-blue-400">{phase.metric}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
