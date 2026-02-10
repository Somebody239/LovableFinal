import React from 'react';
import { Globe, Cloud, Palette, Code, Plus, History, PanelLeft, ChevronDown } from 'lucide-react';

interface TopNavProps {
    isSidebarVisible: boolean;
    onToggleSidebar: () => void;
}

const TopNav: React.FC<TopNavProps> = ({ isSidebarVisible, onToggleSidebar }) => {
    return (
        <nav style={{
            position: 'relative',
            minHeight: '48px',
            width: '100%',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '0.5px solid hsl(var(--muted-border))',
            background: 'hsl(var(--background) / 0.8)',
            backdropFilter: 'blur(12px)',
            zIndex: 10
        }}>
            {/* Left - Project Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '30%' }}>
                <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: 0,
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'hsl(var(--foreground))',
                    transition: 'opacity 150ms ease-in-out'
                }}>
                    {/* Lovable Logo */}
                    <svg viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '18px', height: '18px', flexShrink: 0 }}>
                        <defs>
                            <linearGradient id="logo-gradient" x1="7.73627" y1="4.21757" x2="15.0724" y2="23.8669" gradientUnits="userSpaceOnUse">
                                <stop offset="0.025" stopColor="#FF8E63" />
                                <stop offset="0.56" stopColor="#FF7EB0" />
                                <stop offset="0.95" stopColor="#4B73FF" />
                            </linearGradient>
                        </defs>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.89785 0C10.7074 0 13.7957 3.17898 13.7957 7.10046V9.79908H16.0913C19.9009 9.79908 22.9892 12.9781 22.9892 16.8995C22.9892 20.821 19.9009 24 16.0913 24H0V7.10046C0 3.17898 3.08827 0 6.89785 0Z" fill="url(#logo-gradient)" />
                    </svg>
                    <span style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        Lovable IDE
                    </span>
                    <ChevronDown size={16} style={{ color: 'hsl(var(--muted-foreground))', flexShrink: 0 }} />
                </button>
            </div>

            {/* Center - Nav Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <NavPill icon={<Globe size={16} />} />
                    <NavPill icon={<Cloud size={16} />} />
                    <NavPill icon={<Palette size={16} />} />
                    <NavPill icon={<Code size={16} />} label="Code" active />
                </div>

                <IconButton icon={<Plus size={16} />} />
            </div>

            {/* Right - Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: 'auto' }}>
                <IconButton icon={<History size={16} />} />
                <IconButton icon={<PanelLeft size={16} />} onClick={onToggleSidebar} />
            </div>
        </nav>
    );
};

const NavPill: React.FC<{ icon: React.ReactNode; label?: string; active?: boolean }> = ({ icon, label, active }) => (
    <button style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '28px',
        padding: '8px 4px',
        borderRadius: '6px',
        border: active ? '0.5px solid hsl(var(--affirmative-primary))' : '0.5px solid hsl(var(--primary) / 0.4)',
        background: active ? 'hsl(var(--affirmative-primary) / 0.1)' : 'transparent',
        color: active ? 'hsl(var(--affirmative-foreground))' : 'hsl(var(--primary))',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'all 150ms ease-in-out',
        gap: '4px'
    }}>
        {icon}
        {label && <span style={{ whiteSpace: 'nowrap', padding: '0 4px' }}>{label}</span>}
    </button>
);

const IconButton: React.FC<{ icon: React.ReactNode; onClick?: () => void }> = ({ icon, onClick }) => (
    <button
        onClick={onClick}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            padding: 0,
            borderRadius: '6px',
            border: 'none',
            background: 'transparent',
            color: 'hsl(var(--primary))',
            cursor: 'pointer',
            transition: 'all 150ms ease-in-out'
        }}
    >
        {icon}
    </button>
);

export default TopNav;
