import SlideLayout from "./SlideLayout";
import { CaseStudyTimeline } from '../ui/slide-diagrams';

export default function Slide11_CaseStudy() {
    return (
        <SlideLayout title="Case Study: Microsoft Copilot" subtitle="BLUEPRINT" layout="default">
            <div className="flex flex-col h-full gap-12 justify-center">
                <CaseStudyTimeline />

                <div className="grid grid-cols-2 gap-16 bg-zinc-800/30 p-10 rounded-2xl border border-white/5">
                    <div className="space-y-2">
                        <h4 className="text-white font-bold text-lg">Project Evolution</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            In 2021, Microsoft introduced GitHub Copilot as an experimental AI coding assistant. Initially, it had limited language support and reliability issues.
                            Over time, Microsoft expanded Copilot's functionality by adding chat tools, file awareness, and broader language coverage.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-white font-bold text-lg">The Outcome</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            The results were extremely successful. Developer efficiency increased by about 58%, and VS Code reached roughly 50 million monthly active users.
                            This demonstrates that expanding functionality while preserving usability can dramatically increase both retention and new user adoption.
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
