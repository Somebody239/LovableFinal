import SlideLayout from "./SlideLayout";
import { RiskList } from '../ui/slide-diagrams';

export default function Slide09_Risks() {
    return (
        <SlideLayout title="Potential Risks" subtitle="CHALLENGES" layout="default">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 h-full items-start mt-4">
                <RiskList />

                <div className="space-y-8 md:sticky md:top-20">
                    <h3 className="text-2xl font-bold text-white">Understanding the Risk</h3>
                    <div className="space-y-4">
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            <strong>Identity Drift:</strong> Lovable is known for accessibility. Introducing advanced developer tools could intimidate beginner users or make the platform feel overly technical.
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            <strong>Complexity:</strong> Supporting both no-code and full-code flows requires additional maintenance. Poor integration could lead to bugs or inconsistent user experiences.
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            <strong>Resource Drain:</strong> Developing an IDE environment requires engineering investment that could slow improvements to Lovable's core AI generation features.
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            <strong>Security:</strong> Allowing manual code editing increases the possibility of unsafe execution, dependency vulnerabilities, or infrastructure misuse.
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
