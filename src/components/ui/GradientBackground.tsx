import React, { useEffect, useRef } from 'react';

/**
 * HEART CURVE GRADIENT - Single File Component
 */

interface GradientBackgroundProps {
    mode?: 'canvas' | 'css' | 'svg';
    width?: number;
    height?: number;
    responsive?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export default function GradientBackground({
    mode = 'canvas',
    width = 2452,
    height = 1860,
    responsive = true,
    className = '',
    style = {},
}: GradientBackgroundProps) {
    // ========== CANVAS MODE (Pixel-Perfect) ==========
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (mode !== 'canvas') return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;

        // Color stops (extracted from original image)
        const colors = [
            { r: 28, g: 28, b: 28, pos: -450 },      // Dark gray
            { r: 32, g: 38, b: 47, pos: -350 },      // Dark blue-gray
            { r: 40, g: 58, b: 87, pos: -250 },      // Medium-dark blue
            { r: 53, g: 86, b: 150, pos: -150 },     // Medium blue
            { r: 67, g: 108, b: 210, pos: -50 },     // Blue
            { r: 74, g: 111, b: 219, pos: 0 },       // Pure blue
            { r: 91, g: 122, b: 249, pos: 50 },      // Blue with rising red
            { r: 127, g: 123, b: 239, pos: 100 },    // Blue-purple
            { r: 170, g: 139, b: 249, pos: 150 },    // Purple-pink
            { r: 222, g: 130, b: 227, pos: 190 },    // Light pink
            { r: 238, g: 157, b: 245, pos: 250 },    // Pink-white
            { r: 253, g: 109, b: 194, pos: 300 },    // Hot pink
            { r: 254, g: 73, b: 147, pos: 390 },     // Magenta
            { r: 254, g: 59, b: 103, pos: 490 },     // Red
            { r: 255, g: 70, b: 67, pos: 590 },      // Red-orange
            { r: 254, g: 91, b: 43, pos: 690 },      // Orange
            { r: 254, g: 99, b: 35, pos: 750 },      // Bright orange
        ];

        const minDist = -450;
        const maxDist = 800;

        // Parabola parameters (creates the V/heart curve)
        const centerX = width / 2;
        const minCurveY = 1110;
        const edgeCurveY = 880;
        const a = (edgeCurveY - minCurveY) / (centerX ** 2);

        // Pre-calculate curve Y for each X
        const curveY = new Float32Array(width);
        for (let x = 0; x < width; x++) {
            curveY[x] = a * (x - centerX) ** 2 + minCurveY;
        }

        // Render pixel by pixel
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const distance = y - curveY[x];
                let normalized = (distance - minDist) / (maxDist - minDist);
                normalized = Math.max(0, Math.min(1, normalized));

                // Map to color position
                const colorPos = normalized * (colors[colors.length - 1].pos - colors[0].pos) + colors[0].pos;

                // Find surrounding colors and interpolate
                let lower = colors[0];
                let upper = colors[colors.length - 1];

                for (let i = 0; i < colors.length - 1; i++) {
                    if (colorPos >= colors[i].pos && colorPos <= colors[i + 1].pos) {
                        lower = colors[i];
                        upper = colors[i + 1];
                        break;
                    }
                }

                const range = upper.pos - lower.pos;
                const t = range > 0 ? (colorPos - lower.pos) / range : 0;

                const r = Math.round(lower.r + (upper.r - lower.r) * t);
                const g = Math.round(lower.g + (upper.g - lower.g) * t);
                const b = Math.round(lower.b + (upper.b - lower.b) * t);

                const idx = (y * width + x) * 4;
                data[idx] = r;
                data[idx + 1] = g;
                data[idx + 2] = b;
                data[idx + 3] = 255;
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }, [mode, width, height]);

    // ========== CSS MODE ==========
    if (mode === 'css') {
        const cssStyle: React.CSSProperties = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundColor: '#1c1c1c',
            backgroundImage: `
        radial-gradient(ellipse 80% 60% at 50% 60%, 
          rgba(74, 111, 219, 0.9) 0%, 
          rgba(74, 111, 219, 0.4) 30%, 
          transparent 60%
        ),
        radial-gradient(ellipse 50% 50% at 15% 45%, 
          rgba(91, 122, 249, 0.7) 0%, 
          transparent 50%
        ),
        radial-gradient(ellipse 50% 50% at 85% 45%, 
          rgba(91, 122, 249, 0.7) 0%, 
          transparent 50%
        ),
        radial-gradient(ellipse 70% 50% at 50% 70%, 
          rgba(222, 130, 227, 0.8) 0%, 
          rgba(253, 109, 194, 0.5) 40%, 
          transparent 70%
        ),
        radial-gradient(ellipse 45% 40% at 10% 60%, 
          rgba(254, 131, 221, 0.6) 0%, 
          transparent 50%
        ),
        radial-gradient(ellipse 45% 40% at 90% 60%, 
          rgba(254, 131, 221, 0.6) 0%, 
          transparent 50%
        ),
        linear-gradient(180deg, 
          transparent 50%,
          rgba(254, 59, 103, 0.4) 65%,
          rgba(254, 99, 35, 0.6) 85%,
          rgba(254, 99, 35, 0.8) 100%
        ),
        radial-gradient(ellipse 30% 30% at 15% 95%, 
          rgba(254, 99, 35, 0.9) 0%, 
          transparent 60%
        ),
        radial-gradient(ellipse 30% 30% at 85% 95%, 
          rgba(254, 99, 35, 0.9) 0%, 
          transparent 60%
        )
      `,
            ...style
        };

        return <div className={className} style={cssStyle} />;
    }

    // ========== SVG MODE ==========
    if (mode === 'svg') {
        const svgStyle: React.CSSProperties = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            display: 'block',
            ...style
        };

        return (
            <svg
                className={className}
                style={svgStyle}
                viewBox="0 0 2452 1860"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="mainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1c1c1c" />
                        <stop offset="35%" stopColor="#1c1c1c" />
                        <stop offset="45%" stopColor="#356a96" />
                        <stop offset="55%" stopColor="#4a6fdb" />
                        <stop offset="62%" stopColor="#de82e3" />
                        <stop offset="70%" stopColor="#fd6dc2" />
                        <stop offset="78%" stopColor="#fe4993" />
                        <stop offset="85%" stopColor="#fe3b67" />
                        <stop offset="92%" stopColor="#ff4643" />
                        <stop offset="100%" stopColor="#fe6323" />
                    </linearGradient>

                    <radialGradient id="blueGlow" cx="50%" cy="60%" r="50%">
                        <stop offset="0%" stopColor="#4a6fdb" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#4a6fdb" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#4a6fdb" stopOpacity="0" />
                    </radialGradient>

                    <radialGradient id="pinkGlow" cx="50%" cy="70%" r="45%">
                        <stop offset="0%" stopColor="#de82e3" stopOpacity="0.7" />
                        <stop offset="50%" stopColor="#fd6dc2" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#fd6dc2" stopOpacity="0" />
                    </radialGradient>

                    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="30" />
                    </filter>
                </defs>

                <rect width="100%" height="100%" fill="#1c1c1c" />
                <ellipse cx="1226" cy="1050" rx="1400" ry="400" fill="url(#blueGlow)" filter="url(#blur)" />
                <ellipse cx="1226" cy="1300" rx="1200" ry="350" fill="url(#pinkGlow)" filter="url(#blur)" />
                <ellipse cx="200" cy="900" rx="400" ry="300" fill="rgba(91, 122, 249, 0.5)" filter="url(#blur)" />
                <ellipse cx="2252" cy="900" rx="400" ry="300" fill="rgba(91, 122, 249, 0.5)" filter="url(#blur)" />
                <rect x="0" y="800" width="2452" height="1060" fill="url(#mainGradient)" opacity="0.7" />
                <ellipse cx="400" cy="1750" rx="500" ry="250" fill="rgba(254, 99, 35, 0.8)" filter="url(#blur)" />
                <ellipse cx="2052" cy="1750" rx="500" ry="250" fill="rgba(254, 99, 35, 0.8)" filter="url(#blur)" />
            </svg>
        );
    }

    // ========== CANVAS MODE (Default) ==========
    const containerStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        ...style
    };

    const canvasStyle: React.CSSProperties = responsive ? {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    } : {};

    return (
        <div className={className} style={containerStyle}>
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                style={canvasStyle}
            />
        </div>
    );
}
