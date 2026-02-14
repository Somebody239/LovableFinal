import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronDown, FileCode, FileJson, File, Plus, Upload, Search, Image as ImageIcon, Table, Users, Key, Shield, Globe, Settings, Link, Server, CheckCircle, AlertCircle, GitBranch, Bug, Package, Play, Zap } from 'lucide-react';
import type { FileData } from './Layout';

interface SidebarProps {
    activeItem: string;
    files: FileData[];
    onFileSelect: (file: FileData) => void;
    activeFile: FileData | null;
    onCreateFile: (name: string) => void;
    onUploadFile: (file: File) => void;
    selectedTab?: 'files' | 'database' | 'hosting';
    onTabChange: (tab: 'files' | 'database' | 'hosting') => void;
}

const FileTreeItem = ({ name, type, level, isExpanded, onToggle, children, onClick, isActive }: any) => {
    const paddingLeft = `${level * 16 + 12}px`;

    const getIcon = () => {
        switch (type) {
            case 'folder':
                return isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />;
            case 'image':
                return <ImageIcon size={14} color="#66d9ef" />;
            case 'css':
                return <FileCode size={14} color="#42a5f5" />;
            case 'tsx':
            case 'ts':
                return <FileCode size={14} color="#519aba" />;
            case 'json':
                return <FileJson size={14} color="#cbcb41" />;
            case 'js':
                return <FileCode size={14} color="#f1e05a" />;
            case 'html':
                return <FileCode size={14} color="#e44d26" />;
            default:
                return <File size={14} style={{ color: 'hsl(var(--muted-foreground))' }} />;
        }
    };

    return (
        <div>
            <div
                onClick={type === 'folder' ? onToggle : onClick}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: `4px 12px 4px ${paddingLeft}`,
                    cursor: 'pointer',
                    background: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    color: isActive ? '#e5e5e5' : '#a1a1aa',
                    fontSize: '13px',
                    transition: 'all 150ms'
                }}
                onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#e5e5e5';
                }}
                onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#a1a1aa';
                }}
            >
                {type === 'folder' && getIcon()}
                {type !== 'folder' && <span style={{ width: 14 }}>{getIcon()}</span>}
                <span>{name}</span>
            </div>
            {isExpanded && children}
        </div>
    );
};

const Sidebar: React.FC<SidebarProps> = ({
    activeItem, files, onFileSelect, activeFile, onCreateFile, onUploadFile, selectedTab = 'files', onTabChange
}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [newFileName, setNewFileName] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
        '.lovable': true,
        'public': true,
        'src': true,
        'src/components': false
    });

    const toggleFolder = (folder: string) => {
        setExpandedFolders(prev => ({ ...prev, [folder]: !prev[folder] }));
    };

    const handleCreateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newFileName.trim()) {
            onCreateFile(newFileName.trim());
            setNewFileName('');
            setIsCreating(false);
        }
    };

    const openStaticFile = (name: string, type: string, path: string, content: string = '') => {
        onFileSelect({
            name,
            language: type,
            path,
            content: content || `// Content for ${name}\n// Use the editor to make changes.`
        });
    };

    if (activeItem !== 'explorer') {
        const title = activeItem.charAt(0).toUpperCase() + activeItem.slice(1);
        return (
            <div style={{
                width: '240px',
                background: 'transparent',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: '#a1a1aa', letterSpacing: '0.05em' }}>
                        {title}
                    </span>
                </div>
                <div style={{ padding: '20px', textAlign: 'center', color: '#a1a1aa', fontSize: '12px' }}>
                    {title} View Placeholder
                </div>
            </div>
        );
    }

    return (
        <div style={{
            width: '240px',
            background: 'transparent', // Transparent to inherit from Layout wrapper
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Project Header - Matching Image Style */}
            <div style={{
                padding: '12px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fe3b67' }}></div> {/* Red accent from gradient */}
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#e5e5e5' }}>Project Paramount</span>
                </div>
                <ChevronDown size={14} color="#666" />
            </div>

            {/* Sidebar Tabs - Visual only since functionality is top-level now, but allows switching content */}
            <div style={{
                display: 'flex',
                padding: '0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
                {[
                    { id: 'files', label: 'Files' },
                    { id: 'database', label: 'Database' },
                    { id: 'hosting', label: 'Hosting' }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id as any)}
                        style={{
                            flex: 1,
                            padding: '10px 6px',
                            fontSize: '11px',
                            fontWeight: 600,
                            background: 'transparent',
                            border: 'none',
                            color: selectedTab === tab.id ? '#e5e5e5' : '#666',
                            borderBottom: selectedTab === tab.id ? '2px solid #4a6fdb' : '2px solid transparent', // Blue accent
                            cursor: 'pointer',
                            transition: 'color 150ms'
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {selectedTab === 'files' && (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Search - Darker Style */}
                    <div style={{ padding: '12px 12px 8px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '6px 10px',
                            background: 'rgba(0, 0, 0, 0.2)', // Darker input bg
                            borderRadius: '6px',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                            <Search size={14} style={{ color: '#666' }} />
                            <input
                                type="text"
                                placeholder="Search files..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    flex: 1,
                                    background: 'transparent',
                                    border: 'none',
                                    outline: 'none',
                                    fontSize: '12px',
                                    color: '#e5e5e5'
                                }}
                            />
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div style={{
                        display: 'flex', gap: '8px', padding: '0 12px 12px', justifyContent: 'flex-end'
                    }}>
                        <button
                            onClick={() => setIsCreating(true)}
                            title="New File"
                            style={{
                                background: 'transparent', border: 'none', cursor: 'pointer', color: '#666'
                            }}
                        >
                            <Plus size={14} />
                        </button>
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            title="Upload File"
                            style={{
                                background: 'transparent', border: 'none', cursor: 'pointer', color: '#666'
                            }}
                        >
                            <Upload size={14} />
                        </button>
                        <input
                            ref={fileInputRef}
                            type="file"
                            onChange={(e) => {
                                if (e.target.files?.[0]) onUploadFile(e.target.files[0]);
                            }}
                            style={{ display: 'none' }}
                        />
                    </div>

                    {isCreating && (
                        <form onSubmit={handleCreateSubmit} style={{ padding: '0 12px 12px' }}>
                            <input
                                autoFocus
                                type="text"
                                placeholder="filename.tsx"
                                value={newFileName}
                                onChange={(e) => setNewFileName(e.target.value)}
                                onBlur={() => setIsCreating(false)}
                                style={{
                                    width: '100%',
                                    padding: '6px 10px',
                                    background: '#18181b',
                                    border: '1px solid #3b82f6',
                                    borderRadius: '4px',
                                    outline: 'none',
                                    fontSize: '12px',
                                    color: '#e5e5e5'
                                }}
                            />
                        </form>
                    )}

                    {/* File Tree - Simplified */}
                    <div style={{ flex: 1, overflow: 'auto', paddingTop: '4px' }}>
                        <FileTreeItem
                            name=".lovable" type="folder" level={0} isExpanded={expandedFolders['.lovable']} onToggle={() => toggleFolder('.lovable')}
                        >
                            <FileTreeItem name="plan.md" type="file" level={1} onClick={() => openStaticFile('plan.md', 'md', '/.lovable/plan.md')} isActive={activeFile?.path === '/.lovable/plan.md'} />
                        </FileTreeItem>

                        <FileTreeItem
                            name="public" type="folder" level={0} isExpanded={expandedFolders['public']} onToggle={() => toggleFolder('public')}
                        >
                            <FileTreeItem name="favicon.ico" type="image" level={1} onClick={() => openStaticFile('favicon.ico', 'image', '/public/favicon.ico')} isActive={activeFile?.path === '/public/favicon.ico'} />
                            <FileTreeItem name="placeholder.svg" type="image" level={1} onClick={() => openStaticFile('placeholder.svg', 'image', '/public/placeholder.svg')} isActive={activeFile?.path === '/public/placeholder.svg'} />
                        </FileTreeItem>
                        <FileTreeItem
                            name="src" type="folder" level={0} isExpanded={expandedFolders['src']} onToggle={() => toggleFolder('src')}
                        >
                            <FileTreeItem name="App.tsx" type="tsx" level={1} onClick={() => openStaticFile('App.tsx', 'tsx', '/src/App.tsx')} isActive={activeFile?.path === '/src/App.tsx'} />
                            <FileTreeItem name="index.css" type="css" level={1} onClick={() => openStaticFile('index.css', 'css', '/src/index.css')} isActive={activeFile?.path === '/src/index.css'} />
                            <FileTreeItem name="main.tsx" type="tsx" level={1} onClick={() => openStaticFile('main.tsx', 'tsx', '/src/main.tsx')} isActive={activeFile?.path === '/src/main.tsx'} />
                        </FileTreeItem>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
