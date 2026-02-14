import SlideLayout from "./SlideLayout";

export default function Slide10_Mitigation() {
    return (
        <SlideLayout title="Risk Mitigation" subtitle="STRATEGY" layout="center">
            <div className="space-y-8 max-w-4xl w-full">
                <div className="p-10 border border-green-500/20 bg-green-500/5 rounded-2xl">
                    <h3 className="text-2xl font-bold text-green-400 mb-4">Preserving Identity</h3>
                    <p className="text-zinc-300 leading-relaxed text-lg">
                        Lovable should remain a beginner-friendly web platform focused on AI-driven generation.
                        Dev Mode should launch as an <strong>optional advanced feature</strong> or standalone environment. This preserves simplicity for beginners while expanding functionality for advanced users.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 border border-white/5 bg-zinc-800/40 rounded-xl">
                        <h4 className="font-bold text-white mb-3 text-lg">Technical Security</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Security risks can be mitigated through sandboxed execution environments, automated dependency scanning, and restricted infrastructure permissions.
                        </p>
                    </div>
                    <div className="p-8 border border-white/5 bg-zinc-800/40 rounded-xl">
                        <h4 className="font-bold text-white mb-3 text-lg">Gradual Rollout</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Lovable can release Dev Mode gradually through beta programs, allowing feedback-driven iteration before full public deployment.
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
