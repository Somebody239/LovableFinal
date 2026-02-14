import SlideLayout from "./SlideLayout";
import { PressureGauge } from '../ui/slide-diagrams';

export default function Slide04_CoreProblem() {
    return (
        <SlideLayout title="The Core Problem" subtitle="USER JOURNEY" layout="default">
            <div className="flex flex-col h-full gap-8 justify-center">
                <PressureGauge />

                <div className="grid grid-cols-2 gap-12 mt-4 bg-zinc-800/30 p-8 rounded-2xl border border-white/5">
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg border-b border-white/10 pb-2">The Limit</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Most Lovable users do not use the platform to build their final product, only prototypes.
                            Users encounter difficulty debugging and customizing precise functionality.
                            Complex or edge-case bugs are difficult to resolve within Lovable's chat interface.
                            This forces users to export projects to external developer tools like Cursor or VS Code.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-red-400 font-bold text-lg border-b border-red-500/10 pb-2">The Consequence</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            This leads to reduced platform retention and lost long-term ecosystem engagement.
                            Lovable becomes a starting tool instead of a full development environment.
                            We lose the user exactly when they become serious about their product.
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
