"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Slide7_ThankYou() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-black text-white overflow-hidden p-8">

            {/* 
               RINGS BACKGROUND (Ported from Title Slide)
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


            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full h-full justify-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        Thank You
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-col items-center gap-6 mb-12"
                >
                    <p className="text-lg md:text-xl text-zinc-300 font-light max-w-2xl leading-relaxed">
                        "The future of AI is sustainable. Let's build the infrastructure to support it."
                    </p>

                    <a
                        href="https://youtu.be/DzK77TwX30M"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-semibold text-base flex items-center gap-3 transition-all duration-300 z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span>Thank You Video</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Team Profiles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="grid grid-cols-4 gap-6 w-full max-w-4xl"
                >
                    <TeamMember
                        image="/Profile Pictures/Kishan Joshi.jpeg"
                        name="Kishan Joshi"
                        email="kishan.cut@gmail.com"
                    />
                    <TeamMember
                        image="/Profile Pictures/Siddharth Gowthaman.jpeg"
                        name="Siddharth Gowthaman"
                        email="siddharth.gowthaman@gmail.com"
                    />
                    <TeamMember
                        image="/Profile Pictures/Minh Do.png"
                        name="Minh Do"
                        email="minhepic99@gmail.com"
                    />
                    <TeamMember
                        image="/Profile Pictures/Aayan Roy.png"
                        name="Aayan Roy"
                        email="aayanali.roy@gmail.com"
                    />
                </motion.div>

                {/* Microsoft Logo & TKS Branding */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10 flex items-center gap-8 opacity-60"
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

            </div>

            {/* CSS for Rings */}
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

const TeamMember = ({ image, name, email }: { image: string; name: string; email: string }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 bg-zinc-800">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="text-center">
            <p className="text-white font-medium text-sm">{name}</p>
            <p className="text-zinc-400 text-xs">{email}</p>
        </div>
    </div>
);
