import SlideLayout from "./SlideLayout";
import { PhasedTimeline } from '../ui/slide-diagrams';

export default function Slide14_Roadmap() {
    return (
        <SlideLayout title="Implementation Plan" subtitle="ROADMAP">
            <div className="mt-12">
                <PhasedTimeline />
            </div>
        </SlideLayout>
    );
}
