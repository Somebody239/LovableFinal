import React from 'react';
import { motion, type Transition } from 'framer-motion';

export type GlowEffectProps = {
    className?: string;
    style?: React.CSSProperties;
    colors?: string[];
    mode?:
    | 'rotate'
    | 'pulse'
    | 'breathe'
    | 'colorShift'
    | 'flowHorizontal'
    | 'static';
    blur?:
    | number
    | 'softest'
    | 'soft'
    | 'medium'
    | 'strong'
    | 'stronger'
    | 'strongest'
    | 'none';
    transition?: Transition;
    scale?: number;
    duration?: number;
};

// Default colors matching the project's warm pink/orange palette
const DEFAULT_COLORS = ['#FF4466', '#ec4899', '#f43f5e', '#fb923c'];

export function GlowEffect({
    className = '',
    style,
    colors = DEFAULT_COLORS,
    mode = 'rotate',
    blur = 'medium',
    transition,
    scale = 1,
    duration = 5,
}: GlowEffectProps) {
    const BASE_TRANSITION = {
        repeat: Infinity,
        duration: duration,
        ease: 'linear',
    };

    const animations: Record<string, object> = {
        rotate: {
            background: [
                `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`,
                `conic-gradient(from 360deg at 50% 50%, ${colors.join(', ')})`,
            ],
            transition: {
                ...(transition ?? BASE_TRANSITION),
            },
        },
        pulse: {
            background: colors.map(
                (color) =>
                    `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 100%)`
            ),
            scale: [1 * scale, 1.1 * scale, 1 * scale],
            opacity: [0.5, 0.8, 0.5],
            transition: {
                ...(transition ?? {
                    ...BASE_TRANSITION,
                    repeatType: 'mirror' as const,
                }),
            },
        },
        breathe: {
            background: [
                ...colors.map(
                    (color) =>
                        `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 100%)`
                ),
            ],
            scale: [1 * scale, 1.05 * scale, 1 * scale],
            transition: {
                ...(transition ?? {
                    ...BASE_TRANSITION,
                    repeatType: 'mirror' as const,
                }),
            },
        },
        colorShift: {
            background: colors.map((color, index) => {
                const nextColor = colors[(index + 1) % colors.length];
                return `conic-gradient(from 0deg at 50% 50%, ${color} 0%, ${nextColor} 50%, ${color} 100%)`;
            }),
            transition: {
                ...(transition ?? {
                    ...BASE_TRANSITION,
                    repeatType: 'mirror' as const,
                }),
            },
        },
        flowHorizontal: {
            background: colors.map((color) => {
                const nextColor = colors[(colors.indexOf(color) + 1) % colors.length];
                return `linear-gradient(to right, ${color}, ${nextColor})`;
            }),
            transition: {
                ...(transition ?? {
                    ...BASE_TRANSITION,
                    repeatType: 'mirror' as const,
                }),
            },
        },
        static: {
            background: `linear-gradient(to right, ${colors.join(', ')})`,
        },
    };

    const getBlurValue = (blur: GlowEffectProps['blur']): string => {
        if (typeof blur === 'number') {
            return `blur(${blur}px)`;
        }

        const presets: Record<string, string> = {
            softest: 'blur(4px)',
            soft: 'blur(8px)',
            medium: 'blur(12px)',
            strong: 'blur(16px)',
            stronger: 'blur(24px)',
            strongest: 'blur(32px)',
            none: 'blur(0px)',
        };

        return presets[blur as string] || 'blur(12px)';
    };

    return (
        <motion.div
            style={{
                ...style,
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                transform: `scale(${scale})`,
                filter: getBlurValue(blur),
                willChange: 'transform',
                backfaceVisibility: 'hidden',
            }}
            animate={animations[mode]}
            className={className}
        />
    );
}

export default GlowEffect;
