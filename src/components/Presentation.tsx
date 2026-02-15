import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GradientCanvas } from './ui/gradient-canvas';

// --- Slide Imports ---
import Slide01_Title from './slides/Slide01_Title';
import Slide02_ExecSummary from './slides/Slide02_ExecSummary';
import Slide03_StatusQuo from './slides/Slide03_StatusQuo';
import Slide04_CoreProblem from './slides/Slide04_CoreProblem';
import Slide05_Stats from './slides/Slide05_Stats';
import Slide06_RootCause from './slides/Slide06_RootCause';
import Slide07_Solution from './slides/Slide07_Solution';
// Slide08_Features merged into Slide07
import Slide09_Risks from './slides/Slide09_Risks';
import Slide10_Mitigation from './slides/Slide10_Mitigation';
import Slide11_CaseStudy from './slides/Slide11_CaseStudy';
import Slide12_Market from './slides/Slide12_Market';
import Slide13_Prototype from './slides/Slide13_Prototype';
import Slide14_Roadmap from './slides/Slide14_Roadmap';
import Slide15_Vision from './slides/Slide15_Vision';
import Slide16_ThankYou from './slides/Slide16_ThankYou';

// --- Slide Configuration ---

interface SlideConfig {
    id: number;
    component: React.ComponentType;
    hasGradientBg?: boolean; // Uses the heart-curve gradient instead of flat dark
}

const slides: SlideConfig[] = [
    { id: 1, component: Slide01_Title, hasGradientBg: true },
    { id: 2, component: Slide02_ExecSummary },
    { id: 3, component: Slide03_StatusQuo },
    { id: 4, component: Slide04_CoreProblem },
    { id: 5, component: Slide05_Stats },
    { id: 6, component: Slide12_Market },
    { id: 7, component: Slide06_RootCause },
    { id: 8, component: Slide07_Solution },
    { id: 9, component: Slide09_Risks },
    { id: 10, component: Slide10_Mitigation },
    { id: 11, component: Slide11_CaseStudy },
    { id: 12, component: Slide13_Prototype },
    { id: 13, component: Slide14_Roadmap },
    { id: 14, component: Slide15_Vision },
    { id: 15, component: Slide16_ThankYou, hasGradientBg: true },
];

// --- Main Component ---

const Presentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
            } else if (e.key === 'ArrowLeft') {
                setCurrentSlide((prev) => Math.max(prev - 1, 0));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const current = slides[currentSlide];
    const SlideComponent = current.component;

    return (
        <div className="fixed inset-0 bg-[#1c1c1c] text-foreground flex items-center justify-center overflow-hidden font-sans selection:bg-blue-500/30">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <AnimatePresence mode="wait">
                    {current.hasGradientBg ? (
                        <motion.div
                            key={`bg-gradient-${currentSlide}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            <GradientCanvas />
                        </motion.div>
                    ) : (
                        <motion.div
                            key={`bg-dark-${currentSlide}`}
                            className="absolute inset-0 bg-[#1c1c1c]"
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Slide Content */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.32, 0.72, 0, 1]
                        }}
                        className="flex flex-col items-center justify-center w-full h-full"
                    >
                        <SlideComponent />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Presentation;
