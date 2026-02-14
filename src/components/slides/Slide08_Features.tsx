import { Server, Zap, Users, Layout } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function Slide08_Features() {
    return (
        <SlideLayout title="Lovable + Dev Mode" subtitle="CAPABILITIES" layout="default">
            <div className="flex flex-col h-full justify-center gap-12">
                <div className="text-center mb-4">
                    <h3 className="text-3xl text-white font-light">It's Lovable... <span className="text-blue-400 font-bold">PLUS</span> a complete IDE.</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {[
                        { icon: Server, title: "Cloud Backend Editor", desc: "Direct access to Supabase/Postgres. No more prompt guessing." },
                        { icon: Zap, title: "One-Click Hosting", desc: "Ship in seconds. Integrated CI/CD pipeline." },
                        { icon: Users, title: "Real-time Collab", desc: "Multiplayer editing like Figma, for code." },
                        { icon: Layout, title: "Visual + Code Sync", desc: "Edit visually or in code. State stays perfectly in sync." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 bg-zinc-800/40 border border-white/5 rounded-xl flex items-start gap-6">
                            <feature.icon className="w-8 h-8 text-blue-400 shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}
