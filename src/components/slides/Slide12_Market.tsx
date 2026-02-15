import { motion } from "framer-motion";

export default function Slide12_Market() {
    const testimonials = [
        {
            name: "Namanyay Goel",
            role: "Founder, Giga Notion (4M+ readers)",
            quote: "Lovable creates UIs that make my design-challenged attempts look like crayon drawings. But here's the catch: Lovable is not that great for complete apps. So just use it for static UI screens. Nothing else. No databases. No auth.",
            image: "/People/Namanyay.png",
            delay: 0.2
        },
        {
            name: "Jeremy Rojas",
            role: "Full-stack Dev (10y exp) • PromptiePie",
            quote: "lovable.dev is amazing for building fullstack applications from scratch... However, if you want more control over your code, move your project over to Cursor.",
            image: "/People/Jeremy.png",
            delay: 0.3
        },
        {
            name: "Bryan Caporicci",
            role: "Entrepreneur & Photographer",
            quote: "I almost like the experience of debugging and tweaking in Cursor more than Lovable. But Lovable is great for adding new features and kicking off a build.",
            image: "/People/Bryan.png",
            delay: 0.4
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#1c1c1c] text-white relative overflow-hidden p-8">
            <div className="max-w-6xl w-full z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">What Users Are Saying</h2>
                    <p className="text-zinc-400 text-xl font-light tracking-widest uppercase opacity-70">Real Impact</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: t.delay }}
                            className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 relative flex flex-col gap-6 hover:bg-zinc-800/80 transition-colors group"
                        >
                            {/* Quote Icon Background */}
                            <div className="absolute top-4 right-6 text-white/5 font-serif text-8xl leading-none select-none group-hover:text-white/10 transition-colors">"</div>

                            <p className="text-zinc-300 text-lg italic leading-relaxed relative z-10">"{t.quote}"</p>

                            <div className="mt-auto flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base group-hover:text-blue-300 transition-colors">{t.name}</h4>
                                    <p className="text-zinc-500 text-sm">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
