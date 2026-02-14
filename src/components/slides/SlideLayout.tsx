import { cn } from "../../utils/index";

interface SlideLayoutProps {
    title: string;
    children?: React.ReactNode;
    subtitle?: string;
    className?: string;
    layout?: "default" | "center" | "split";
}

export default function SlideLayout({ title, children, subtitle, className, layout = "default" }: SlideLayoutProps) {
    return (
        <div className={cn("flex flex-col h-full w-full max-w-[1400px] px-12 md:px-24 pt-16 pb-12 z-10 relative", className)}>
            <div className="mb-8 w-full border-b border-white/5 pb-4">
                {subtitle && <h3 className="text-xs text-zinc-500 font-mono tracking-widest mb-1 opacity-70 uppercase">{subtitle}</h3>}
                <h2 className="text-4xl font-semibold text-white tracking-tight text-left">{title}</h2>
            </div>
            <div className={cn("flex-1 w-full h-full min-h-0",
                layout === "center" && "flex flex-col items-center justify-center",
                layout === "split" && "grid grid-cols-1 md:grid-cols-2 gap-16",
                layout === "default" && "flex flex-col"
            )}>
                {children}
            </div>
        </div>
    );
}
