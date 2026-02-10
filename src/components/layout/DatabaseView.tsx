import React, { useState } from 'react';
import { Database, Server, Activity, Users, BarChart3, PieChart } from 'lucide-react';

export default function DatabaseView() {
    return (
        <div className="h-full w-full p-6 text-foreground overflow-auto">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                    <Database size={24} className="text-primary" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Database Management</h2>
                    <p className="text-muted-foreground">Manage your data schemas and records</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-card border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                        <Users size={16} className="text-blue-400" />
                        <span className="font-medium text-sm text-muted-foreground">Total Users</span>
                    </div>
                    <div className="text-3xl font-bold">12,543</div>
                    <div className="text-xs text-green-400 mt-1">+12% from last month</div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                        <Activity size={16} className="text-purple-400" />
                        <span className="font-medium text-sm text-muted-foreground">Active Sessions</span>
                    </div>
                    <div className="text-3xl font-bold">1,204</div>
                    <div className="text-xs text-green-400 mt-1">+5% from yesterday</div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                        <Server size={16} className="text-orange-400" />
                        <span className="font-medium text-sm text-muted-foreground">Storage Used</span>
                    </div>
                    <div className="text-3xl font-bold">45.2 GB</div>
                    <div className="text-xs text-muted-foreground mt-1">out of 100 GB</div>
                </div>
            </div>

            <div className="rounded-xl border border-border/50 overflow-hidden bg-card/50">
                <div className="p-4 border-b border-border/50 flex justify-between items-center bg-card">
                    <h3 className="font-semibold">Recent Transactions</h3>
                    <button className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Export</button>
                </div>
                <div className="p-4">
                    <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono">
                                        ID
                                    </div>
                                    <div>
                                        <div className="font-medium text-sm">Update User Profile</div>
                                        <div className="text-xs text-muted-foreground">user_{1000 + i}</div>
                                    </div>
                                </div>
                                <div className="text-xs font-mono text-muted-foreground">2024-02-10 14:3{i}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
