import { Play } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function Slide13_Prototype() {
    return (
        <SlideLayout title="Prototype Demo" subtitle="LIVE LOOK" layout="center">
            <div className="relative w-full max-w-4xl h-[500px] bg-zinc-900 rounded-lg border border-white/10 shadow-2xl flex items-center justify-center group cursor-pointer hover:border-blue-500/50 transition-colors">
                <div className="text-center">
                    <Play className="w-24 h-24 text-white/20 mx-auto mb-6 group-hover:text-blue-500/80 group-hover:scale-110 transition-all" />
                    <h3 className="text-3xl font-bold text-white mb-2">Interactive Demo</h3>
                    <p className="text-zinc-500">Click to launch live prototype</p>
                </div>
            </div>
        </SlideLayout>
    );
}
