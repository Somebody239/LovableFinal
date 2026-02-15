import { motion } from "framer-motion";
import { ShieldAlert, ZapOff, Users, Layers } from "lucide-react";

export default function Slide09_Risks() {
    const risks = [
        {
            icon: Users,
            title: "Identity Drift",
            desc: "Risk of alienating non-technical users by becoming too complex. We must maintain our 'Lovable' simplicity.",
            delay: 0.2,
            color: "text-orange-400",
            borderColor: "border-orange-500/30"
        },
        {
            icon: Layers,
            title: "Complexity Creep",
            desc: "Balancing no-code simplicity with full-code power is technically difficult. Poor integration leads to bugs.",
            delay: 0.3,
            color: "text-red-400",
            borderColor: "border-red-500/30"
        },
        {
            icon: ZapOff,
            title: "Resource Drain",
            desc: "Engineering focus on IDE features could slow down core AI improvements. We need a dedicated team.",
            delay: 0.4,
            color: "text-yellow-400",
            borderColor: "border-yellow-500/30"
        },
        {
            icon: ShieldAlert,
            title: "Security Risks",
            desc: "Manual code editing introduces potential for unsafe execution and dependency vulnerabilities.",
            delay: 0.5,
            color: "text-red-500",
            borderColor: "border-red-600/30"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#1c1c1c] text-white relative overflow-hidden p-8">
            {/* Fire Background Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-black to-black opacity-80" />
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.05, 1],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-red-600/10 blur-[120px] rounded-full"
                />
            </div>

            <div className="max-w-6xl w-full z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Potential Risks</h2>
                    <p className="text-zinc-400 text-xl font-light tracking-widest uppercase opacity-70">Challenges ahead</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    {risks.map((risk, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: risk.delay }}
                            className={`p-8 bg-zinc-900/50 border ${risk.borderColor} rounded-2xl backdrop-blur-sm hover:bg-zinc-800/80 transition-colors group`}
                        >
                            <div className="flex items-start gap-5">
                                <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors`}>
                                    <risk.icon className={`w-8 h-8 ${risk.color}`} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-red-100 transition-colors">{risk.title}</h3>
                                    <p className="text-zinc-400 text-base leading-relaxed">{risk.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
