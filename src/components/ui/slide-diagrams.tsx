import { motion } from "framer-motion";
import { cn } from "../../utils/index";
import { ArrowRight, AlertTriangle, Calendar, Rocket, Code, TrendingUp } from "lucide-react";

// --- Slide 4: Pressure Gauge / Heat Map (Refined) ---
export const PressureGauge = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-8 flex flex-col items-center">
            {/* Straight Process Line */}
            <div className="relative w-full h-2 bg-zinc-800 rounded-full mb-16 mt-8">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 opacity-80 rounded-full" />

                {/* Markers */}
                {['Ideation', 'Prompting', 'Building', 'Bug/Error', 'Leave'].map((step, i) => (
                    <div key={i} className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: `${i * 25}%` }}>
                        <div className={`w-4 h-4 rounded-full border-2 z-10 ${i >= 3 ? 'bg-red-500 border-red-200 animate-pulse' : 'bg-zinc-900 border-white'}`} />
                        <span className={`text-xs font-mono uppercase tracking-widest absolute -bottom-8 whitespace-nowrap ${i >= 3 ? 'text-red-400 font-bold' : 'text-zinc-400'}`}>{step}</span>

                        {/* Arrow pointing at Bug/Error */}
                        {step === 'Bug/Error' && (
                            <div className="absolute -top-10 flex flex-col items-center">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 16L0 0H20L10 16Z" fill="#ef4444" />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Slide 5: Stats Grid (Compact) ---
// --- Slide 5: Stats Grid (Compact) ---
export const StatsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
            <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-zinc-800/50 transition-colors group">
                <h3 className="text-7xl font-bold text-[#4A6FDB] mb-2 group-hover:scale-110 transition-transform duration-300">12%</h3>
                <p className="text-zinc-400 text-lg font-medium">Completion Rate</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-zinc-800/50 transition-colors group">
                <h3 className="text-7xl font-bold text-[#FE4993] mb-2 group-hover:scale-110 transition-transform duration-300">80%</h3>
                <p className="text-zinc-400 text-lg font-medium">Credit Waste on Debugging</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-zinc-800/50 transition-colors group">
                <h3 className="text-7xl font-bold text-[#DE82E3] mb-2 group-hover:scale-110 transition-transform duration-300">65%</h3>
                <p className="text-zinc-400 text-lg font-medium">Auto-generated Code</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-zinc-800/50 transition-colors group">
                <h3 className="text-7xl font-bold text-[#FE6323] mb-2 group-hover:scale-110 transition-transform duration-300">$500</h3>
                <p className="text-zinc-400 text-lg font-medium">Monthly Burn / Active Project</p>
            </div>
        </div>
    )
}


// --- Slide 6: Spectrum Slider (Refined) ---
export const SpectrumSlider = () => {
    return (
        <div className="w-full max-w-4xl mx-auto py-8 relative flex flex-col items-center">
            {/* Labels Top */}
            <div className="flex justify-between w-full px-4 mb-2">
                <div className="flex flex-col items-center">
                    <span className="text-[#4A6FDB] font-bold text-lg">Lovable Today</span>
                    <span className="text-zinc-500 text-sm">Ideation & Prototypes</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-[#7F7BEF] font-bold text-lg">External IDEs</span>
                    <span className="text-zinc-500 text-sm">Cursor / VS Code</span>
                </div>
            </div>

            {/* The Bar */}
            <div className="w-full h-8 bg-zinc-800 rounded-full relative overflow-visible flex shadow-inner">
                <div className="w-1/2 h-full bg-[#4A6FDB]/20 flex items-center justify-center text-[10px] font-bold text-[#4A6FDB] tracking-widest border-r border-white/5 rounded-l-full">NO-CODE</div>
                <div className="w-1/2 h-full bg-[#7F7BEF]/20 flex items-center justify-center text-[10px] font-bold text-[#7F7BEF] tracking-widest rounded-r-full">FULL-CODE</div>

                {/* The Gap Overlay */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-full bg-red-500/10 flex items-center justify-center border-x border-red-500/30">
                    <span className="text-[10px] font-bold text-red-400 tracking-widest animate-pulse">THE GAP</span>
                </div>

                {/* DROPOFF ZONE - centered on bar, pointing right toward IDE */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 z-20">
                    <div className="bg-zinc-900 px-5 py-2 border border-red-500/30 rounded-lg shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors" />
                        <span className="text-red-400 font-bold text-sm whitespace-nowrap relative z-10">USER DROPOFF ZONE</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-red-500 animate-pulse" />
                </div>
            </div>

            {/* Vertical line going DOWN from center of bar to the text box */}
            <div className="flex flex-col items-center mt-0">
                <div className="w-px h-12 bg-red-500/50" />
            </div>
        </div>
    );
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
    const items = [
        { year: '2021', title: 'Experiment', sub: 'GitHub Copilot Launch', icon: Calendar, color: "text-[#4A6FDB]", bg: "bg-[#4A6FDB]" },
        { year: '2023', title: 'Expansion', sub: 'Chat & Enterprise Features', icon: Code, color: "text-[#DE82E3]", bg: "bg-[#DE82E3]" },
        { year: '2024', title: 'Integration', sub: 'Deep VS Code Integration', icon: Rocket, color: "text-[#FE4993]", bg: "bg-[#FE4993]" },
        { year: 'Today', title: 'Dominance', sub: '50M+ MAU / +58% Efficiency', icon: TrendingUp, color: "text-[#FE6323]", bg: "bg-[#FE6323]" },
    ];

    return (
        <div className="relative w-full max-w-5xl mx-auto py-12">
            {/* Connecting Line — icons sit ABOVE this, line is below */}
            <div className="absolute top-[60px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#4A6FDB] via-[#DE82E3] to-[#FE6323] opacity-40" />

            <div className="grid grid-cols-4 gap-8">
                {items.map((item, i) => (
                    <div key={i} className="flex flex-col items-center relative text-center group">
                        {/* Icon ON the line */}
                        <div className={`w-12 h-12 rounded-full ${item.bg}/10 border-2 border-white/10 flex items-center justify-center z-10 bg-[#1c1c1c] group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                        </div>

                        {/* Year */}
                        <span className={`text-lg font-bold ${item.color} mt-4 mb-1`}>{item.year}</span>

                        {/* Title */}
                        <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-zinc-500">{item.sub}</p>
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
