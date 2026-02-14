import SlideLayout from "./SlideLayout";
import { StatsGrid } from '../ui/slide-diagrams';

export default function Slide05_Stats() {
    return (
        <SlideLayout title="The Scale of the Problem" subtitle="DATA" layout="center">
            <div className="flex flex-col gap-12 w-full max-w-5xl">
                <StatsGrid />

                <div className="bg-zinc-800/30 p-8 rounded-2xl border border-white/5 space-y-4">
                    <h4 className="text-white font-bold text-lg">Significance of the Data</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Only about <strong>12% of projects built on Lovable are considered complete</strong>, showing a large gap between prototype creation and final product delivery.
                        Research shows Lovable automatically completes roughly 60-70% of development, but advanced logic, security, and scalability require manual intervention.
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Debugging loops can consume up to 80% of user credits, sometimes raising costs to $200-$500 per month.
                        Together, these limitations create friction that pushes users away from the platform.
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}
