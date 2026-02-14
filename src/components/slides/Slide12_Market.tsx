import SlideLayout from "./SlideLayout";

export default function Slide12_Market() {
    return (
        <SlideLayout title="Why Now?" subtitle="MARKET VALIDATION" layout="center">
            <div className="grid grid-cols-2 gap-12 w-full max-w-5xl items-center">
                <div className="space-y-6">
                    <div className="bg-zinc-800/40 p-10 rounded-2xl border border-white/5">
                        <h3 className="text-5xl font-bold text-white mb-2">26% CAGR</h3>
                        <p className="text-zinc-400">AI Coding Tools Market Growth</p>
                    </div>
                    <div className="bg-zinc-800/40 p-10 rounded-2xl border border-white/5">
                        <h3 className="text-5xl font-bold text-white mb-2">68%</h3>
                        <p className="text-zinc-400">Devs using AI tools daily</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center space-y-8 p-4">
                    <h3 className="text-3xl font-bold text-white leading-tight">Market trends support this direction.</h3>
                    <p className="text-zinc-400 leading-relaxed text-lg">
                        The tech industry is rapidly adopting AI-assisted coding environments. Developers increasingly expect tools that combine automation with manual customization.
                    </p>
                    <div className="space-y-4 pt-4">
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider">Target Audience Expansion</h4>
                        <ul className="space-y-3 text-zinc-400 text-base">
                            <li>• Startup technical founders</li>
                            <li>• Professional developers wanting faster scaffolding</li>
                            <li>• Teams looking for hybrid AI and manual workflows</li>
                        </ul>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
