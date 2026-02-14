import React, { useState } from 'react';
import { X, ChevronUp, ChevronDown, Circle } from 'lucide-react';

interface BottomPanelProps {
    onClose: () => void;
}

const BottomPanel: React.FC<BottomPanelProps> = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('terminal');
    const [isMinimized, setIsMinimized] = useState(false);

    return (
        <div style={{
            height: isMinimized ? '36px' : '160px',
            borderTop: '1px solid hsl(var(--border))',
            background: 'hsl(var(--secondary))',
            display: 'flex',
            flexDirection: 'column',
            transition: 'height 200ms ease-in-out'
        }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                height: '36px',
                borderBottom: isMinimized ? 'none' : '1px solid hsl(var(--border))',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                    {['Problems', 'Output', 'Debug Console', 'Terminal', 'Ports'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: activeTab === tab.toLowerCase().replace(' ', '-')
                                    ? 'hsl(var(--foreground))'
                                    : 'hsl(var(--muted-foreground))',
                                fontSize: '12px',
                                cursor: 'pointer',
                                padding: '8px 12px',
                                borderBottom: activeTab === tab.toLowerCase().replace(' ', '-')
                                    ? '2px solid hsl(var(--primary))'
                                    : '2px solid transparent',
                                marginBottom: '-1px',
                                transition: 'all 150ms'
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 10px',
                        background: 'hsl(var(--muted))',
                        borderRadius: '6px',
                        fontSize: '11px'
                    }}>
                        <Circle size={8} fill="hsl(var(--success))" stroke="none" />
                        <span>Ready</span>
                    </div>
                    <IconBtn
                        icon={isMinimized ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        onClick={() => setIsMinimized(!isMinimized)}
                    />
                    <IconBtn icon={<X size={14} />} onClick={onClose} />
                </div>
            </div>

            {/* Content */}
            {!isMinimized && (
                <div style={{
                    flex: 1,
                    padding: '12px 16px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    overflow: 'auto',
                    color: 'hsl(var(--foreground))'
                }}>
                    {activeTab === 'terminal' && (
                        <div>
                            <div style={{ marginBottom: '8px', color: 'hsl(var(--muted-foreground))' }}>
                                <span style={{ color: 'hsl(var(--success))' }}>➜</span>
                                <span style={{ color: '#69c', marginLeft: '8px' }}>~/project</span>
                                <span style={{ marginLeft: '8px' }}>$</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{
                                    width: '8px',
                                    height: '16px',
                                    background: 'hsl(var(--foreground))',
                                    animation: 'blink 1s step-end infinite'
                                }} />
                            </div>
                        </div>
                    )}

                    {activeTab === 'problems' && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            color: 'hsl(var(--muted-foreground))'
                        }}>
                            No problems detected
                        </div>
                    )}

                    {activeTab === 'output' && (
                        <div style={{ color: 'hsl(var(--muted-foreground))' }}>
                            Build completed successfully.
                        </div>
                    )}

                    {activeTab === 'debug-console' && (
                        <div style={{ color: 'hsl(var(--muted-foreground))' }}>
                            No active debug session.
                        </div>
                    )}

                    {activeTab === 'ports' && (
                        <div style={{ color: 'hsl(var(--muted-foreground))' }}>
                            No forwarded ports.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const IconBtn: React.FC<{ icon: React.ReactNode; onClick: () => void }> = ({ icon, onClick }) => (
    <button
        onClick={onClick}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            borderRadius: '4px',
            border: 'none',
            background: 'transparent',
            color: 'hsl(var(--muted-foreground))',
            cursor: 'pointer',
            transition: 'all 150ms'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'hsl(var(--accent))'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
    >
        {icon}
    </button>
);

export default BottomPanel;
