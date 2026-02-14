import SlideLayout from "./SlideLayout";
import { InteractiveToggle } from '../ui/slide-diagrams';

export default function Slide07_Solution() {
    return (
        <SlideLayout title="Introducing Dev Mode" subtitle="THE SOLUTION" layout="center">
            <div className="flex flex-col items-center gap-16 max-w-4xl">
                <p className="text-zinc-400 text-center max-w-2xl text-lg">
                    A seamless transition from conversational AI to a full-powered Integrated Development Environment (IDE), right inside the browser.
                </p>

                <InteractiveToggle />

                <div className="grid grid-cols-2 gap-8 w-full mt-4">
                    <div className="bg-zinc-800/40 p-8 rounded-xl border border-white/5">
                        <h4 className="text-white font-bold mb-2">For Curators</h4>
                        <p className="text-zinc-400 text-sm">Maintain the simple, chat-based interface for rapid prototyping and idea generation.</p>
                    </div>
                    <div className="bg-blue-900/10 p-8 rounded-xl border border-blue-500/20">
                        <h4 className="text-blue-300 font-bold mb-2">For Creators</h4>
                        <p className="text-blue-200/70 text-sm">Unlock full file access, terminal control, and granular debugging tools when you need them.</p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
