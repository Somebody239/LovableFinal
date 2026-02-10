import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState, useCallback } from "react";
import lovableLogo from "../assets/lovable-logo-white.svg";

interface OpeningProps {
    onComplete: () => void;
}

// Heart Curve Gradient color palette (from reference)
const GRADIENT_COLORS = [
    { r: 28, g: 28, b: 28, pos: -450 },     // Dark gray (top)
    { r: 40, g: 58, b: 87, pos: -120 },      // Dark blue
    { r: 74, g: 111, b: 219, pos: 0 },       // Blue
    { r: 127, g: 123, b: 239, pos: 120 },    // Purple
    { r: 222, g: 130, b: 227, pos: 220 },    // Light pink
    { r: 253, g: 109, b: 194, pos: 320 },    // Hot pink
    { r: 254, g: 73, b: 147, pos: 420 },     // Magenta
    { r: 254, g: 59, b: 103, pos: 520 },     // Red
    { r: 254, g: 99, b: 35, pos: 700 },      // Orange (bottom)
];

function lerpColor(
    colors: typeof GRADIENT_COLORS,
    t: number
): { r: number; g: number; b: number } {
    // t is a value from colors[0].pos to colors[last].pos
    if (t <= colors[0].pos) return colors[0];
    if (t >= colors[colors.length - 1].pos)
        return colors[colors.length - 1];

    for (let i = 0; i < colors.length - 1; i++) {
        if (t >= colors[i].pos && t <= colors[i + 1].pos) {
            const localT =
                (t - colors[i].pos) / (colors[i + 1].pos - colors[i].pos);
            return {
                r: Math.round(colors[i].r + (colors[i + 1].r - colors[i].r) * localT),
                g: Math.round(colors[i].g + (colors[i + 1].g - colors[i].g) * localT),
                b: Math.round(colors[i].b + (colors[i + 1].b - colors[i].b) * localT),
            };
        }
    }
    return colors[colors.length - 1];
}

const Opening: React.FC<OpeningProps> = ({ onComplete }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animFrameRef = useRef<number>(0);
    const [isDevMode, setIsDevMode] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [showEffect, setShowEffect] = useState(false);

    const drawGradient = useCallback((canvas: HTMLCanvasElement, breathOffset: number) => {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const w = canvas.width;
        const h = canvas.height;

        // Clear
        ctx.fillStyle = "#1c1c1c";
        ctx.fillRect(0, 0, w, h);

        // Heart curve parameters
        const minCurveY = h * 0.60 + breathOffset;  // Lowest point (center dip)
        const edgeCurveY = h * 0.38 + breathOffset;  // Height at edges

        const imageData = ctx.createImageData(w, h);
        const data = imageData.data;

        for (let x = 0; x < w; x++) {
            // Parabola: curve dips down in center, rises at edges
            const normalizedX = (x - w / 2) / (w / 2); // -1 to 1
            const curveY = minCurveY + (edgeCurveY - minCurveY) * normalizedX * normalizedX;

            for (let y = 0; y < h; y++) {
                const idx = (y * w + x) * 4;
                // Distance from curve (negative = above curve, positive = below)
                const distFromCurve = y - curveY;

                const color = lerpColor(GRADIENT_COLORS, distFromCurve);

                data[idx] = color.r;
                data[idx + 1] = color.g;
                data[idx + 2] = color.b;
                data[idx + 3] = 255;
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio, 1.5); // Cap for performance
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + "px";
            canvas.style.height = window.innerHeight + "px";
        };

        resize();
        window.addEventListener("resize", resize);

        let breathOffset = 0;
        let breathDir = 1;

        const animate = () => {
            // Subtle breathing
            breathOffset += breathDir * 0.15;
            if (breathOffset > 8) breathDir = -1;
            if (breathOffset < -8) breathDir = 1;

            drawGradient(canvas, breathOffset);
            animFrameRef.current = requestAnimationFrame(animate);
        };

        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener("resize", resize);
        };
    }, [drawGradient]);

    const handleDevModeToggle = () => {
        setIsDevMode(!isDevMode);

        if (!isDevMode) {
            setShowEffect(true);
            setTimeout(() => setShowEffect(false), 500);

            setTimeout(() => {
                setIsExiting(true);
                setTimeout(onComplete, 1600);
            }, 800);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#1c1c1c]">
            {/* Canvas Gradient Background */}
            <motion.div
                initial={{ opacity: 0, scale: 1.3 }}
                animate={{
                    opacity: isExiting ? 0 : 1,
                    scale: isExiting ? 1.4 : 1,
                }}
                transition={{
                    duration: 2.5,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute inset-0 z-0"
            >
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0"
                    style={{ filter: "blur(2px)" }}
                />
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: isExiting ? 0 : 1,
                    y: isExiting ? -50 : 0,
                    scale: isExiting ? 1.1 : 1,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center"
            >
                <div className="relative">
                    <img
                        src={lovableLogo}
                        alt="Lovable Logo"
                        className="w-64 md:w-96 drop-shadow-2xl"
                    />

                    {/* Dev Mode Toggle */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-10 -right-2 flex items-center gap-3"
                    >
                        <span className="text-white/60 font-medium text-sm tracking-wide">
                            Dev Mode
                        </span>

                        <button
                            onClick={handleDevModeToggle}
                            className={`
                                relative w-12 h-6 rounded-md transition-colors duration-300 ease-in-out
                                ${isDevMode
                                    ? "bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                                    : "bg-white/10 hover:bg-white/20"
                                }
                                border border-white/10
                            `}
                        >
                            <div
                                className={`
                                    absolute top-1 left-1 w-4 h-4 bg-white rounded-sm shadow-sm
                                    transform transition-transform duration-300 ease-in-out
                                    ${isDevMode ? "translate-x-6" : "translate-x-0"}
                                `}
                            />
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Strong Effect Overlay */}
            <AnimatePresence>
                {showEffect && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-blue-500 pointer-events-none"
                        style={{ mixBlendMode: "overlay" }}
                    />
                )}
            </AnimatePresence>

            {showEffect && (
                <div className="fixed inset-0 z-40 bg-white/10 animate-pulse pointer-events-none" />
            )}
        </div>
    );
};

export default Opening;
