import { useState } from 'react';
import { Globe, Zap, CheckCircle, Smartphone, ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HostingView() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="h-full w-full p-6 text-gray-200 overflow-auto">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-500/10 rounded-xl">
                        <Globe size={24} className="text-indigo-400" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Hosting & Publishing</h2>
                        <p className="text-gray-400">Manage your deployed applications</p>
                    </div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 shadow-lg shadow-indigo-500/20 shadow-indigo-500/20"
                >
                    <Zap size={18} /> Deploy Now
                </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="md:col-span-3 space-y-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 bg-green-500/10 text-green-400 text-xs font-bold rounded-bl-xl uppercase tracking-wider border-b border-l border-green-500/20">
                            Production Live
                        </div>

                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-100">
                            <Smartphone size={20} className="text-gray-400" />
                            Main Application
                        </h3>

                        <div className="flex items-center gap-2 text-sm text-indigo-400 mb-6 bg-indigo-500/10 w-fit px-3 py-1 rounded-full cursor-pointer hover:bg-indigo-500/20 transition-colors border border-indigo-500/20">
                            <Globe size={14} />
                            project-vibe-ide.lovable.app
                            <ExternalLink size={12} className="ml-1" />
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div>
                                <div className="text-gray-500 text-xs uppercase mb-1 font-bold tracking-wider">Status</div>
                                <div className="flex items-center gap-2 text-green-400 font-medium">
                                    <CheckCircle size={16} /> Optional
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-500 text-xs uppercase mb-1 font-bold tracking-wider">Version</div>
                                <div className="font-mono text-sm text-gray-300">v2.4.1</div>
                            </div>
                            <div>
                                <div className="text-gray-500 text-xs uppercase mb-1 font-bold tracking-wider">Region</div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <MapPin size={14} /> US-East
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5">
                        <div className="flex border-b border-white/10">
                            {['Overview', 'Logs', 'Settings', 'Domains'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab.toLowerCase())}
                                    className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.toLowerCase() ? 'border-indigo-500 text-indigo-400 bg-white/5' : 'border-transparent text-gray-500 hover:bg-white/5 hover:text-gray-300'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="p-6 h-64 flex items-center justify-center text-gray-500 border-dashed border-2 border-white/5 rounded-xl m-6">
                            Chart placeholder for {activeTab}
                        </div>
                    </div>
                </div>

                <div className="md:col-span-1 space-y-6">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                        <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-400">Recent Activity</h4>
                        <div className="space-y-4 relative">
                            {/* Timeline line */}
                            <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-white/10"></div>

                            {[
                                { title: 'Deployed v2.4.1', time: '2m ago', status: 'success' },
                                { title: 'Build started', time: '5m ago', status: 'pending' },
                                { title: 'Commit pushed', time: '5m ago', status: 'neutral' },
                                { title: 'Config updated', time: '1h ago', status: 'neutral' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 relative pl-6">
                                    <div className={`absolute left-0 w-4 h-4 rounded-full border-2 border-background 
                                    ${item.status === 'success' ? 'bg-green-500 border-green-900' :
                                            item.status === 'pending' ? 'bg-yellow-500 border-yellow-900 animate-pulse' : 'bg-slate-500 border-slate-900'}`}
                                    />
                                    <div>
                                        <div className="text-sm font-medium text-gray-200">{item.title}</div>
                                        <div className="text-xs text-gray-500">{item.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
