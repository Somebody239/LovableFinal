import SlideLayout from "./SlideLayout";

export default function Slide03_StatusQuo() {
    return (
        <SlideLayout title="The Status Quo" subtitle="CONTEXT" layout="split">
            <div className="flex flex-col justify-center space-y-6 pr-8 border-r border-white/5 h-full">
                <h2 className="text-5xl font-bold text-white leading-tight">
                    "The fastest-growing software company <span className="text-blue-400">ever</span>."
                </h2>
                <div className="flex items-center gap-12 mt-4">
                    <div>
                        <span className="block text-4xl font-bold text-white">$100M</span>
                        <span className="text-zinc-500 text-sm">ARR in 12 mo</span>
                    </div>
                    <div>
                        <span className="block text-4xl font-bold text-white">$6.6B</span>
                        <span className="text-zinc-500 text-sm">Valuation</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center pl-8 space-y-8">
                <h3 className="text-zinc-400 text-2xl font-light">But the reality is...</h3>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <span className="text-6xl font-black text-red-500">88%</span>
                        <p className="text-xl text-white">of projects <strong>never launch</strong>.</p>
                    </div>
                    <div className="p-6 bg-red-500/5 border-l-2 border-red-500 rounded-r-lg">
                        <p className="italic text-zinc-400 text-base">"Great for prototypes, but I had to export to Cursor for the real work."</p>
                        <span className="block text-xs text-red-400 mt-2 font-bold uppercase tracking-wider">— Early Adopter</span>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
