import React, { useState } from 'react';
import { Database, Server, Activity, Users, BarChart3, PieChart } from 'lucide-react';

export default function DatabaseView() {
    return (
        <div className="h-full w-full p-6 text-gray-200 overflow-auto">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Database size={24} className="text-blue-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Database Management</h2>
                    <p className="text-gray-400">Manage your data schemas and records</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                        <Users size={16} className="text-blue-400" />
                        <span className="font-medium text-sm text-gray-400">Total Users</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-100">12,543</div>
                    <div className="text-xs text-green-400 mt-1">+12% from last month</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                        <Activity size={16} className="text-purple-400" />
                        <span className="font-medium text-sm text-gray-400">Active Sessions</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-100">1,204</div>
                    <div className="text-xs text-green-400 mt-1">+5% from yesterday</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                        <Server size={16} className="text-orange-400" />
                        <span className="font-medium text-sm text-gray-400">Storage Used</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-100">45.2 GB</div>
                    <div className="text-xs text-gray-400 mt-1">out of 100 GB</div>
                </div>
            </div>

            <div className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
                <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                    <h3 className="font-semibold text-gray-200">Recent Transactions</h3>
                    <button className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">Export</button>
                </div>
                <div className="p-4">
                    <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 hover:bg-white/10 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono text-gray-400">
                                        ID
                                    </div>
                                    <div>
                                        <div className="font-medium text-sm text-gray-200">Update User Profile</div>
                                        <div className="text-xs text-gray-500">user_{1000 + i}</div>
                                    </div>
                                </div>
                                <div className="text-xs font-mono text-gray-500">2024-02-10 14:3{i}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
