import SlideLayout from "./SlideLayout";
import { SpectrumSlider } from '../ui/slide-diagrams';

export default function Slide06_RootCause() {
    return (
        <SlideLayout title="Root Cause Analysis" subtitle="THE GAP">
            <div className="flex flex-col h-full gap-8 justify-center">
                <SpectrumSlider />

                <div className="grid grid-cols-2 gap-16 mt-4 px-8">
                    <div>
                        <h4 className="text-lg font-bold text-white mb-2">The Workflow Gap</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            The core issue is a gap between <strong>no-code development and full-code development</strong>.
                            Lovable is excellent at generating software automatically, but it lacks advanced manual development tools that experienced developers rely on.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-2">The Exit Point</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Currently, users generate an app, encounter bugs, and then export their project to finish development externally.
                            Lovable is losing users at the exact moment when they become most invested in their projects and most likely to become long-term paying customers.
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
