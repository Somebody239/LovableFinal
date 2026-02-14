"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// Removed Spotlight as we are replacing background
// import { Spotlight } from "./shared/Spotlight"; 
// SlideContainer is not used in Slide 7's background approach (it uses absolute positioning manually), 
// but we'll use a wrapper to keep things clean.
// However, to match 'exact same', I will use the same div structure as Slide 7.

export default function Slide1_Title() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-black text-white overflow-hidden p-8">

            {/* 
               RINGS BACKGROUND (Ported from Slide 7 - Thank You)
           */}
            {/* Top-left orb (BLUE) */}
            <div
                className={`absolute transition-all duration-1000 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
                style={{ top: "-40%", left: "-20%", width: "80vw", height: "80vw", maxWidth: "800px", maxHeight: "800px" }}
            >
                <div className="w-full h-full rounded-full relative orb-light-blue">
                    <div className="beam-container beam-spin-8">
                        <div className="beam-light-blue" />
                    </div>
                </div>
            </div>

            {/* Top-right orb (GREEN) */}
            <div
                className={`absolute transition-all duration-1000 ease-out delay-500 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                style={{ top: "-30%", right: "-25%", width: "70vw", height: "70vw", maxWidth: "700px", maxHeight: "700px" }}
            >
                <div className="w-full h-full rounded-full relative orb-light-green">
                    <div className="beam-container beam-spin-6">
                        <div className="beam-light-green" />
                    </div>
                </div>
            </div>

            {/* Bottom-left orb (RED/ORANGE) */}
            <div
                className={`absolute transition-all duration-1000 ease-out delay-700 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                style={{ bottom: "-30%", left: "-25%", width: "75vw", height: "75vw", maxWidth: "750px", maxHeight: "750px" }}
            >
                <div className="w-full h-full rounded-full relative orb-light-red">
                    <div className="beam-container beam-spin-7-reverse">
                        <div className="beam-light-red" />
                    </div>
                </div>
            </div>

            {/* Bottom-right orb (YELLOW) */}
            <div
                className={`absolute transition-all duration-1000 ease-out delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ bottom: "-50%", right: "-10%", width: "100vw", height: "100vw", maxWidth: "1000px", maxHeight: "1000px" }}
            >
                <div className="w-full h-full rounded-full relative orb-light-yellow">
                    <div className="beam-container beam-spin-10-reverse">
                        <div className="beam-light-yellow" />
                    </div>
                </div>
            </div>

            {/* Main Content (Preserved from Slide 1) */}
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full text-center">

                {/* Header Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10 mb-8 flex items-center gap-8 opacity-60"
                >
                    <div className="flex items-center gap-3">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="w-3 h-3 bg-[#F25022]" />
                            <div className="w-3 h-3 bg-[#7FBA00]" />
                            <div className="w-3 h-3 bg-[#00A4EF]" />
                            <div className="w-3 h-3 bg-[#FFB900]" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">Microsoft</span>
                    </div>

                    <div className="h-6 w-px bg-white/40" />

                    <span className="text-xl font-light tracking-widest text-zinc-300">TKS</span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 pb-4"
                >
                    Phase Change Materials
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-6 text-xl text-neutral-300 font-light max-w-lg tracking-wide leading-relaxed"
                >
                    The Future of <span className="text-[#00A4EF] font-medium">AI Cooling</span>.
                    <br />
                    Sustainable. Scalable. Essential.
                </motion.p>
            </div>

            {/* CSS for Rings (Duplicated to ensure availability on first load) */}
            <style jsx global>{`
                /* Re-using same classes, ensuring they are available */
                .beam-container { position: absolute; inset: -2px; border-radius: 50%; will-change: transform; }
                
                .beam-light-blue {
                  position: absolute; top: 0; left: 50%; width: 60px; height: 4px; margin-left: -30px; border-radius: 2px; transform: translateY(-50%); transition: all 0.5s;
                  background: linear-gradient(90deg, transparent 0%, rgba(0, 164, 239, 0.5) 30%, rgba(100, 200, 255, 0.9) 70%, rgba(0, 164, 239, 1) 100%);
                  box-shadow: 0 0 20px 4px rgba(0, 164, 239, 0.6), 0 0 40px 8px rgba(100, 200, 255, 0.3);
                }
                .orb-light-blue {
                  background: radial-gradient(circle at 50% 50%, #000 0%, #000 90%, transparent 100%); /* Adjusted for black bg */
                  box-shadow: 0 0 60px 2px rgba(0, 164, 239, 0.3), 0 0 100px 5px rgba(0, 164, 239, 0.15);
                  border: 1px solid rgba(0, 164, 239, 0.4);
                }

                .beam-light-green {
                  position: absolute; top: 0; left: 50%; width: 60px; height: 4px; margin-left: -30px; border-radius: 2px; transform: translateY(-50%); transition: all 0.5s;
                  background: linear-gradient(90deg, transparent 0%, rgba(127, 186, 0, 0.5) 30%, rgba(180, 255, 100, 0.9) 70%, rgba(127, 186, 0, 1) 100%);
                  box-shadow: 0 0 20px 4px rgba(127, 186, 0, 0.6), 0 0 40px 8px rgba(180, 255, 100, 0.3);
                }
                .orb-light-green {
                  background: radial-gradient(circle at 50% 50%, #000 0%, #000 90%, transparent 100%);
                  box-shadow: 0 0 60px 2px rgba(127, 186, 0, 0.3), 0 0 100px 5px rgba(127, 186, 0, 0.15);
                  border: 1px solid rgba(127, 186, 0, 0.4);
                }

                .beam-light-red {
                  position: absolute; top: 0; left: 50%; width: 60px; height: 4px; margin-left: -30px; border-radius: 2px; transform: translateY(-50%); transition: all 0.5s;
                  background: linear-gradient(90deg, transparent 0%, rgba(242, 80, 34, 0.5) 30%, rgba(255, 100, 50, 0.9) 70%, rgba(242, 80, 34, 1) 100%);
                  box-shadow: 0 0 20px 4px rgba(242, 80, 34, 0.6), 0 0 40px 8px rgba(255, 100, 50, 0.3);
                }
                .orb-light-red {
                  background: radial-gradient(circle at 50% 50%, #000 0%, #000 90%, transparent 100%);
                  box-shadow: 0 0 60px 2px rgba(242, 80, 34, 0.3), 0 0 100px 5px rgba(242, 80, 34, 0.15);
                  border: 1px solid rgba(242, 80, 34, 0.4);
                }

                .beam-light-yellow {
                   position: absolute; top: 0; left: 50%; width: 60px; height: 4px; margin-left: -30px; border-radius: 2px; transform: translateY(-50%); transition: all 0.5s;
                   background: linear-gradient(90deg, transparent 0%, rgba(255, 185, 0, 0.5) 30%, rgba(255, 220, 100, 0.9) 70%, rgba(255, 185, 0, 1) 100%);
                   box-shadow: 0 0 20px 4px rgba(255, 185, 0, 0.6), 0 0 40px 8px rgba(255, 220, 100, 0.3);
                }
                .orb-light-yellow {
                  background: radial-gradient(circle at 50% 50%, #000 0%, #000 90%, transparent 100%);
                  box-shadow: 0 0 60px 2px rgba(255, 185, 0, 0.3), 0 0 100px 5px rgba(255, 185, 0, 0.15);
                  border: 1px solid rgba(255, 185, 0, 0.4);
                }

                .beam-spin-6 { animation: spin 6s linear infinite; }
                .beam-spin-7-reverse { animation: spin-reverse 7s linear infinite; }
                .beam-spin-8 { animation: spin 8s linear infinite; }
                .beam-spin-10-reverse { animation: spin-reverse 10s linear infinite; }

                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
            `}</style>
        </div>
    );
}
