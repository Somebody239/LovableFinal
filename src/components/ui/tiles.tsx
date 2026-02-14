import { motion } from "framer-motion"
import { cn } from "../../utils/index"

interface TilesProps {
    className?: string
    rows?: number
    cols?: number
    tileClassName?: string
    tileSize?: "sm" | "md" | "lg"
}

const tileSizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9 md:w-12 md:h-12",
    lg: "w-12 h-12 md:w-16 md:h-16",
}

export function Tiles({
    className,
    rows = 100,
    cols = 10,
    tileClassName,
    tileSize = "md",
}: TilesProps) {
    const rowsArray = new Array(rows).fill(1)
    const colsArray = new Array(cols).fill(1)

    return (
        <div
            className={cn(
                "relative z-0 flex w-full h-full justify-center overflow-hidden opacity-20", // Added default opacity
                className
            )}
        >
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-background" /> {/* Fade out at bottom */}

            <div className="flex flex-col">
                {rowsArray.map((_, i) => (
                    <motion.div
                        key={`row-${i}`}
                        className={cn(
                            "flex",
                            // tileSizes[tileSize], // Layout handled by flex children
                            // "border-l border-white/10 relative",
                            tileClassName
                        )}
                    >
                        {colsArray.map((_, j) => (
                            <motion.div
                                whileHover={{
                                    backgroundColor: `var(--primary)`,
                                    opacity: 0.1,
                                    transition: { duration: 0 }
                                }}
                                animate={{
                                    transition: { duration: 2 }
                                }}
                                key={`col-${j}`}
                                className={cn(
                                    tileSizes[tileSize],
                                    "border-r border-t border-white/5 relative",
                                    tileClassName
                                )}
                            />
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
