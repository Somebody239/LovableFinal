import React, { useState } from 'react';
import { Plus, Upload, Github, Link, Globe, Users, ChevronDown, X, Copy } from 'lucide-react';
import type { FileData } from './Layout';

interface TitleBarProps {
    activeFile: FileData | null;
}

const TitleBar: React.FC<TitleBarProps> = ({ activeFile }) => {
    const [activeModal, setActiveModal] = useState<'share' | 'publish' | null>(null);

    const toggleModal = (modal: 'share' | 'publish') => {
        setActiveModal(prev => prev === modal ? null : modal);
    };

    return (
        <>
            <div style={{
                height: 'var(--header-height)',
                background: 'rgba(20, 20, 20, 0.4)', // Slightly transparent
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                userSelect: 'none',
                zIndex: 50
            }}>
                {/* Left - Menu Items */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'].map((item) => (
                        <span
                            key={item}
                            style={{
                                fontSize: '13px',
                                color: 'hsl(var(--muted-foreground))',
                                cursor: 'pointer',
                                transition: 'color 150ms'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--foreground))'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Center - Title */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '13px',
                    color: 'hsl(var(--foreground))',
                    fontWeight: 500,
                    opacity: 0.9
                }}>
                    LovableFinal {activeFile ? `— ${activeFile.name}` : ''}
                </div>

                {/* Right - Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {/* Avatar */}
                    <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '1px solid hsl(var(--border))'
                    }}>
                        <img
                            src="https://lh3.googleusercontent.com/a/ACg8ocJwkDEEJ8CSD3mkTSUmo7M0_QsSxJcUzUNvRfy-SzOVQvsHGuGq=s512-c"
                            alt="Avatar"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Share Button */}
                    <button
                        onClick={() => toggleModal('share')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: activeModal === 'share' ? 'hsl(var(--primary))' : 'transparent',
                            border: '1px solid hsl(var(--border))',
                            color: activeModal === 'share' ? 'white' : 'hsl(var(--primary))',
                            cursor: 'pointer',
                            transition: 'all 150ms'
                        }}
                        onMouseEnter={(e) => {
                            if (activeModal !== 'share') e.currentTarget.style.background = 'hsl(var(--secondary))';
                        }}
                        onMouseLeave={(e) => {
                            if (activeModal !== 'share') e.currentTarget.style.background = 'transparent';
                        }}
                    >
                        <Plus size={16} />
                    </button>

                    {/* GitHub Button */}
                    <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: 'transparent',
                        border: '1px solid hsl(var(--border))',
                        color: 'hsl(var(--foreground))',
                        cursor: 'pointer',
                        transition: 'all 150ms'
                    }}
                    >
                        <Github size={16} />
                    </button>

                    {/* Publish Button */}
                    <button
                        onClick={() => toggleModal('publish')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '28px',
                            height: '28px',
                            borderRadius: '6px',
                            background: activeModal === 'publish' ? 'hsl(var(--primary))' : 'transparent',
                            border: '1px solid hsl(var(--border))',
                            color: activeModal === 'publish' ? 'white' : 'hsl(var(--foreground))',
                            cursor: 'pointer',
                            transition: 'all 150ms'
                        }}
                    >
                        <Upload size={16} />
                    </button>
                </div>
            </div>

            {/* Share Modal */}
            {activeModal === 'share' && (
                <Modal onClose={() => setActiveModal(null)} title="Share project">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {/* Add People Button */}
                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 12px',
                            background: 'transparent',
                            border: '1px solid hsl(var(--primary) / 0.4)',
                            borderRadius: '6px',
                            color: 'hsl(var(--primary))',
                            cursor: 'pointer',
                            fontSize: '14px',
                            textAlign: 'left'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'hsl(var(--primary) / 0.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                            Add people
                        </button>

                        <div>
                            <h3 style={{ fontSize: '15px', fontWeight: 500, marginBottom: '12px' }}>Project access</h3>

                            {/* People Invited Row */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{
                                        width: '24px', height: '24px', borderRadius: '4px', background: 'hsl(var(--muted))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Users size={14} />
                                    </div>
                                    <span style={{ fontSize: '14px' }}>People you invited</span>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    {/* Avatar Stack */}
                                    <div style={{
                                        width: '24px', height: '24px', borderRadius: '50%', overflow: 'hidden',
                                        border: '1px solid hsl(var(--border))'
                                    }}>
                                        <img
                                            src="https://lh3.googleusercontent.com/a/ACg8ocJwkDEEJ8CSD3mkTSUmo7M0_QsSxJcUzUNvRfy-SzOVQvsHGuGq=s512-c"
                                            alt="User"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <ChevronDown size={14} style={{ color: 'hsl(var(--muted-foreground))' }} />
                                </div>
                            </div>

                            {/* TKS x Lovable Row */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{
                                        width: '24px', height: '24px', borderRadius: '6px', background: 'transparent', border: '1px solid hsl(var(--border))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
                                    }}>
                                        <div style={{ width: '100%', height: '100%', background: '#ec4899', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 600 }}>T</div>
                                    </div>
                                    <span style={{ fontSize: '14px' }}>TKS x Lovable Challenge</span>
                                </div>
                                <button style={{ background: 'transparent', border: 'none', fontSize: '13px', color: 'hsl(var(--foreground))', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    Can edit <ChevronDown size={12} />
                                </button>
                            </div>

                            {/* Owner Row */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{
                                        width: '24px', height: '24px', borderRadius: '50%', overflow: 'hidden',
                                        border: '1px solid hsl(var(--border))'
                                    }}>
                                        <img
                                            src="https://lh3.googleusercontent.com/a/ACg8ocJwkDEEJ8CSD3mkTSUmo7M0_QsSxJcUzUNvRfy-SzOVQvsHGuGq=s512-c"
                                            alt="User"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <span style={{ fontSize: '14px' }}>Swara Kharche</span>
                                </div>
                                <span style={{ fontSize: '13px', color: 'hsl(var(--muted-foreground))' }}>Owner</span>
                            </div>
                        </div>

                        {/* Invite Link Row */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{
                                    width: '24px', height: '24px', borderRadius: '4px', background: 'hsl(var(--muted))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <Link size={14} />
                                </div>
                                <span style={{ fontSize: '14px' }}>Invite link</span>
                            </div>
                            <button style={{ background: 'transparent', border: 'none', fontSize: '13px', color: 'hsl(var(--muted-foreground))', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                Disabled <ChevronDown size={12} />
                            </button>
                        </div>

                        <button style={{
                            width: '100%',
                            padding: '8px',
                            background: 'hsl(var(--primary))',
                            border: 'none',
                            borderRadius: '6px',
                            color: 'white',
                            fontSize: '13px',
                            fontWeight: 500,
                            cursor: 'pointer'
                        }}>
                            Create invite link
                        </button>

                        <div style={{ height: '1px', background: 'hsl(var(--border))' }} />

                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button style={{
                                flex: 1,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                gap: '8px',
                                padding: '8px',
                                background: 'transparent',
                                border: '1px solid hsl(var(--primary) / 0.4)',
                                borderRadius: '6px',
                                color: 'hsl(var(--primary))',
                                cursor: 'pointer',
                                fontSize: '13px'
                            }}>
                                <Globe size={14} />
                                Share preview
                            </button>
                            <button style={{
                                flex: 1,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                gap: '8px',
                                padding: '8px',
                                background: 'transparent',
                                border: '1px solid hsl(var(--primary) / 0.4)',
                                borderRadius: '6px',
                                color: 'hsl(var(--primary))',
                                cursor: 'pointer',
                                fontSize: '13px'
                            }}>
                                <Upload size={14} />
                                Publish project
                            </button>
                        </div>
                    </div>
                </Modal>
            )}

            {/* Publish Modal */}
            {activeModal === 'publish' && (
                <Modal onClose={() => setActiveModal(null)} title="Publish your app" badge="Live">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                                <span style={{ fontSize: '13px', fontWeight: 500 }}>Published URL</span>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '8px 12px',
                                border: '1px solid hsl(var(--border))',
                                borderRadius: '6px',
                                marginBottom: '8px'
                            }}>
                                <a href="#" style={{ fontSize: '13px', color: 'hsl(var(--foreground))', textDecoration: 'none' }}>
                                    cosmic-complexity-engine<span style={{ color: 'hsl(var(--muted-foreground))' }}>.lovable.app</span>
                                </a>
                                <Copy size={14} style={{ color: 'hsl(var(--muted-foreground))', cursor: 'pointer' }} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button style={{
                                flex: 1,
                                padding: '8px',
                                background: 'hsl(var(--secondary))',
                                border: 'none',
                                borderRadius: '6px',
                                color: 'hsl(var(--foreground))',
                                fontSize: '12px',
                                cursor: 'pointer'
                            }}>
                                Edit domain
                            </button>
                            <button style={{
                                flex: 1,
                                padding: '8px',
                                background: 'hsl(var(--secondary))',
                                border: 'none',
                                borderRadius: '6px',
                                color: 'hsl(var(--foreground))',
                                fontSize: '12px',
                                cursor: 'pointer'
                            }}>
                                Add custom domain
                            </button>
                        </div>

                        <div style={{ background: 'hsl(var(--muted))', height: '1px' }} />

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: '13px' }}>Who can visit the URL?</span>
                            <button style={{
                                display: 'flex', alignItems: 'center', gap: '4px',
                                padding: '4px 8px', border: '1px solid hsl(var(--border))', borderRadius: '4px',
                                background: 'transparent', color: 'hsl(var(--foreground))', fontSize: '12px'
                            }}>
                                Anyone <ChevronDown size={12} />
                            </button>
                        </div>

                        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                            <button style={{
                                flex: 1,
                                padding: '8px',
                                background: 'hsl(var(--secondary))',
                                border: '1px solid transparent',
                                borderRadius: '6px',
                                color: 'hsl(var(--primary))',
                                cursor: 'pointer',
                                fontSize: '13px'
                            }}>
                                Review security
                            </button>
                            <button style={{
                                flex: 1,
                                padding: '8px',
                                background: 'hsl(var(--success))', // Needs success color, usually green? 
                                backgroundColor: '#22c55e',
                                border: 'none',
                                borderRadius: '6px',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '13px',
                                fontWeight: 500
                            }}>
                                Update
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

const Modal: React.FC<{ onClose: () => void; title: string; children: React.ReactNode; badge?: string }> = ({ onClose, title, children, badge }) => (
    <div style={{
        position: 'fixed',
        top: '48px', // offset from header
        right: '16px', // Align to right
        width: '350px',
        zIndex: 1000
    }}>
        <div
            style={{
                background: 'hsl(var(--popover))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                animation: 'fadeIn 200ms ease-out',
                overflow: 'hidden'
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px 16px 0',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>{title}</h3>
                    {badge && (
                        <span style={{
                            background: '#22c55e', color: 'white', fontSize: '10px',
                            padding: '2px 6px', borderRadius: '4px', fontWeight: 600
                        }}>
                            {badge}
                        </span>
                    )}
                </div>
                <button
                    onClick={onClose}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '24px',
                        height: '24px',
                        borderRadius: '4px',
                        background: 'transparent',
                        border: 'none',
                        color: 'hsl(var(--muted-foreground))',
                        cursor: 'pointer',
                        transition: 'all 150ms'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'hsl(var(--muted))';
                        e.currentTarget.style.color = 'hsl(var(--foreground))';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                    }}
                >
                    <X size={14} />
                </button>
            </div>
            <div style={{ padding: '16px' }}>
                {children}
            </div>
        </div>
    </div>
);

export default TitleBar;
