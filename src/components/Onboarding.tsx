import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import lovabaleLogo from "../assets/lovable-logo-white.svg";
import { Layout, Cloud, Share2, Rocket } from "lucide-react";

interface OnboardingProps {
    onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: "Welcome to Lovable",
            description: "Unlock access to the future of web creation.",
            image: lovabaleLogo,
        },
        {
            title: "Design & Build",
            description: "Craft pixel-perfect interfaces with intuitive tools.",
            icon: <Layout className="w-16 h-16 text-blue-500" />,
            features: ["Design", "Backend"]
        },
        {
            title: "Go Global",
            description: "Deploy to the cloud and publish your work instantly.",
            icon: <Cloud className="w-16 h-16 text-blue-500" />,
            features: ["Cloud", "Publish"]
        },
        {
            title: "Collaborate",
            description: "Share your projects with the world in one click.",
            icon: <Share2 className="w-16 h-16 text-blue-500" />,
            features: ["Share"]
        }
    ];

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            onComplete();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c1c1c] text-white backdrop-blur-3xl">
            {/* Ambient Blue Glow - More Subtle */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="w-full max-w-lg p-8 relative z-10">
                <div className="min-h-[380px] flex flex-col justify-center"> {/* Fixed height container */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex flex-col items-center text-center gap-8 w-full"
                        >
                            <div className="h-32 flex items-center justify-center">
                                {steps[step].image ? (
                                    <img src={steps[step].image} alt="Logo" className="w-56 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                                ) : (
                                    <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                                        {steps[step].icon}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4 w-full">
                                <h2 className="text-4xl font-bold text-white tracking-tight">
                                    {steps[step].title}
                                </h2>
                                <p className="text-blue-100/60 text-lg leading-relaxed max-w-sm mx-auto h-14"> {/* Fixed height for description text lines */}
                                    {steps[step].description}
                                </p>

                                {/* Feature Tags - Fixed height placeholder if empty to preserve layout if needed, though mostly consistent */}
                                <div className="h-8 flex gap-2 justify-center mt-4">
                                    {steps[step].features && steps[step].features.map((feature) => (
                                        <span key={feature} className="px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-full text-xs font-medium text-blue-400 uppercase tracking-wider">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex flex-col gap-8 mt-4">
                    {/* Progress Indicators */}
                    <div className="flex justify-center gap-2">
                        {steps.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-500 ease-out ${i === step ? "w-8 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]" : "w-2 bg-white/10"}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-full py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2 group"
                    >
                        {step === steps.length - 1 ? (
                            <>
                                Start Building <Rocket className="w-5 h-5 text-blue-600" />
                            </>
                        ) : (
                            "Continue"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
