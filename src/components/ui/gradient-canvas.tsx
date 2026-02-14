import { useEffect, useRef, useCallback } from "react";

// Heart Curve Gradient color palette
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

export const GradientCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animFrameRef = useRef<number>(0);

    const drawGradient = useCallback((canvas: HTMLCanvasElement, breathOffset: number) => {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const w = canvas.width;
        const h = canvas.height;

        // Clear
        ctx.fillStyle = "#1c1c1c";
        ctx.fillRect(0, 0, w, h);

        // Heart curve parameters (lowered so gradient doesn't overlap content)
        const minCurveY = h * 0.90 + breathOffset;
        const edgeCurveY = h * 0.70 + breathOffset;

        const imageData = ctx.createImageData(w, h);
        const data = imageData.data;

        for (let x = 0; x < w; x++) {
            const normalizedX = (x - w / 2) / (w / 2); // -1 to 1
            const curveY = minCurveY + (edgeCurveY - minCurveY) * normalizedX * normalizedX;

            for (let y = 0; y < h; y++) {
                const idx = (y * w + x) * 4;
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
            const dpr = Math.min(window.devicePixelRatio, 1.5);
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

    return (
        <div className="absolute inset-0 z-0">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ filter: "blur(2px)" }}
            />
        </div>
    );
};
