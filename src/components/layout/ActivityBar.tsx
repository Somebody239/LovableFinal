import React from 'react';
import { Files, Search, GitBranch, Package, Settings, Bug, UserCircle } from 'lucide-react';

interface ActivityBarProps {
    activeItem: string;
    onSelectItem: (item: string) => void;
}

const ActivityBar: React.FC<ActivityBarProps> = ({ activeItem, onSelectItem }) => {

    const topItems = [
        { id: 'explorer', icon: Files, tooltip: 'Explorer' },
        { id: 'search', icon: Search, tooltip: 'Search' },
        { id: 'git', icon: GitBranch, tooltip: 'Source Control' },
        { id: 'debug', icon: Bug, tooltip: 'Run and Debug' },
        { id: 'extensions', icon: Package, tooltip: 'Extensions' },
    ];

    return (
        <div style={{
            width: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'hsl(var(--secondary) / 0.3)', // Semi-transparent
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid hsl(var(--border))',
            zIndex: 10
        }}>
            {/* Top Icons */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '12px', gap: '8px' }}>
                {topItems.map((item) => (
                    <ActivityButton
                        key={item.id}
                        icon={<item.icon size={22} strokeWidth={1.5} />} // Slightly smaller icons
                        tooltip={item.tooltip}
                        active={activeItem === item.id}
                        onClick={() => onSelectItem(item.id)}
                    />
                ))}
            </div>

            {/* Bottom Icons */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '12px', gap: '8px' }}>
                <ActivityButton
                    icon={<UserCircle size={22} strokeWidth={1.5} />}
                    tooltip="Accounts"
                    onClick={() => { }}
                />
                <ActivityButton
                    icon={<Settings size={22} strokeWidth={1.5} />}
                    tooltip="Settings"
                    onClick={() => { }}
                />
            </div>
        </div>
    );
};

interface ActivityButtonProps {
    icon: React.ReactNode;
    tooltip: string;
    active?: boolean;
    onClick: () => void;
}

const ActivityButton: React.FC<ActivityButtonProps> = ({ icon, tooltip, active, onClick }) => (
    <button
        title={tooltip}
        onClick={onClick}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            border: 'none',
            background: active ? 'hsl(var(--accent) / 0.5)' : 'transparent', // Highlight active
            color: active ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 150ms ease-in-out'
        }}
    >
        {icon}
        {active && (
            <div style={{
                position: 'absolute',
                left: '-6px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '3px',
                height: '16px',
                borderRadius: '0 4px 4px 0',
                background: 'hsl(var(--primary))',
                opacity: 0 // Hidden for now, using background highlight instead
            }} />
        )}
    </button>
);

export default ActivityBar;
