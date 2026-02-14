"use client";

import { motion } from "framer-motion";

export default function Slide6_Timeline() {
    return (
        <div className="relative w-full h-full flex flex-col justify-center bg-[#050505] text-white overflow-hidden p-8">

            {/* Background Circuit Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg className="w-full h-full">
                    <motion.path
                        d="M 0 300 H 200 L 250 250 H 500 L 550 300 H 800"
                        stroke="#333" strokeWidth="2" fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M 800 300 H 1000 L 1050 350 H 1300"
                        stroke="#333" strokeWidth="2" fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-4xl font-bold mb-3">Implementation Roadmap</h2>
                    <p className="text-zinc-400 text-base">PCM Integration Strategy for Microsoft Data Centers</p>
                </motion.div>

                {/* 2x3 Grid for 6 Phases */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    <PhaseCard
                        phase="1"
                        title="Research & Qualification"
                        timeline="Q1-Q2 2026"
                        budget="$1.2M"
                        description="Select salt hydrate PCM formulations. Complete UL 1973/CE certification. Develop staff training. Design hybrid CDU-PCM architecture."
                        color="#F25022"
                        delay={0.1}
                    />

                    <PhaseCard
                        phase="2"
                        title="Pilot Deployment"
                        timeline="Q3-Q4 2026"
                        budget="$3-4M"
                        description="Deploy 10-rack pilot with monitoring. Target PUE below 1.10 (vs. 1.35 average). Validate 90-day thermal cycling."
                        color="#FFB900"
                        delay={0.2}
                    />

                    <PhaseCard
                        phase="3"
                        title="Scale Planning"
                        timeline="Q1-Q2 2027"
                        budget="20-month payback"
                        description="Finalize supplier contracts. Develop BMS integration. Enroll in grid demand response programs. Complete rollout budget."
                        color="#00A4EF"
                        delay={0.3}
                    />

                    <PhaseCard
                        phase="4"
                        title="Initial Rollout"
                        timeline="Q3-Q4 2027"
                        budget="$60M annual savings"
                        description="Deploy at 200MW scale with hybrid architecture. Target 80% CDU runtime reduction. Failsafe backup on any PCM issues."
                        color="#7FBA00"
                        delay={0.4}
                    />

                    <PhaseCard
                        phase="5"
                        title="Optimization"
                        timeline="2028"
                        budget="90% energy reduction"
                        description="Implement AI-driven optimization. Expand waste heat recovery. 63,000 tonnes CO₂ avoided annually at scale."
                        color="#00A4EF"
                        delay={0.5}
                    />

                    <PhaseCard
                        phase="6"
                        title="Global Scale"
                        timeline="2029+"
                        budget="$60M+ recurring"
                        description="Full global deployment. $40M infrastructure deferral. Publish case study. Establish industry PCM standard."
                        color="#7FBA00"
                        delay={0.6}
                    />

                </div>

            </div>
        </div>
    );
}

const PhaseCard = ({ phase, title, timeline, budget, description, color, delay }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6 relative overflow-hidden hover:border-white/10 transition-colors"
        >
            {/* Top Color Bar */}
            <div
                className="absolute top-0 left-0 w-full h-1.5"
                style={{ backgroundColor: color }}
            />

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <span
                        className="text-sm font-bold px-2.5 py-1 rounded"
                        style={{ backgroundColor: color, color: '#000' }}
                    >
                        {phase}
                    </span>
                    <span className="text-white font-bold text-base">{title}</span>
                </div>
                <span className="text-zinc-400 text-sm font-medium">{timeline}</span>
            </div>

            {/* Budget/Target Badge */}
            <div className="text-sm font-bold mb-4 px-3 py-1.5 rounded bg-white/5 w-fit" style={{ color }}>
                {budget}
            </div>

            {/* Description */}
            <p className="text-zinc-300 text-sm leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};


