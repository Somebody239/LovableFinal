import React, { useState } from 'react';
import TitleBar from './TitleBar';
import ActivityBar from './ActivityBar';
import Sidebar from './Sidebar';
import EditorArea from './EditorArea';
import BottomPanel from './BottomPanel';
import StatusBar from './StatusBar';
import AgentPanel from './AgentPanel';
import DatabaseView from './DatabaseView';
import HostingView from './HostingView';
import GradientBackground from '../ui/GradientBackground';

export interface FileData {
    name: string;
    language: string;
    content: string;
    path: string;
}

const Layout: React.FC = () => {
    const [activeItem, setActiveItem] = useState('explorer');
    const [isTerminalOpen, setIsTerminalOpen] = useState(true);
    const [activeFile, setActiveFile] = useState<FileData | null>(null);
    const [openFiles, setOpenFiles] = useState<FileData[]>([]);
    const [files, setFiles] = useState<FileData[]>([]);

    // View State
    const [currentView, setCurrentView] = useState<'files' | 'database' | 'hosting'>('files');

    const handleFileSelect = (file: FileData) => {
        if (!openFiles.find(f => f.path === file.path)) {
            setOpenFiles([...openFiles, file]);
        }
        setActiveFile(file);
    };

    const handleFileClose = (file: FileData) => {
        const newOpenFiles = openFiles.filter(f => f.path !== file.path);
        setOpenFiles(newOpenFiles);
        if (activeFile?.path === file.path) {
            setActiveFile(newOpenFiles[newOpenFiles.length - 1] || null);
        }
    };

    const handleFileChange = (path: string, content: string) => {
        setFiles(files.map(f => f.path === path ? { ...f, content } : f));
        if (activeFile?.path === path) {
            setActiveFile({ ...activeFile, content });
        }
        setOpenFiles(openFiles.map(f => f.path === path ? { ...f, content } : f));
    };

    const handleCreateFile = (name: string) => {
        const language = name.split('.').pop() || 'txt';
        const newFile: FileData = {
            name,
            language,
            content: '',
            path: `/${name}`
        };
        setFiles([...files, newFile]);
        handleFileSelect(newFile);
    };

    const handleUploadFile = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target?.result as string;
            const newFile: FileData = {
                name: file.name,
                language: file.name.split('.').pop() || 'txt',
                content,
                path: `/${file.name}`
            };
            setFiles([...files, newFile]);
            handleFileSelect(newFile);
        };
        reader.readAsText(file);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            color: 'hsl(var(--foreground))',
            position: 'relative',
            background: '#09090b', // Fallback
        }}>
            {/* Gradient Background Layer - Canvas Mode for best performance/look */}
            <GradientBackground mode="canvas" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

            {/* Overlay to darken the gradient for "minimal" look */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(9, 9, 11, 0.85)', // High opacity dark overlay
                zIndex: 0,
                backdropFilter: 'blur(10px)', // Blur the gradient slightly
            }} />

            {/* Main Content Content (z-index 1 to sit above background) */}
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <TitleBar activeFile={activeFile} />

                <div style={{
                    display: 'flex',
                    flex: 1,
                    minHeight: 0,
                    padding: '8px 12px 12px 12px',
                    gap: '12px'
                }}>
                    {/* Left Side: Activity + Sidebar */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{
                            borderRadius: '12px',
                            overflow: 'hidden',
                            background: 'rgba(24, 24, 27, 0.6)', // Semi-transparent
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            height: '100%',
                            backdropFilter: 'blur(20px)'
                        }}>
                            <ActivityBar activeItem={activeItem} onSelectItem={setActiveItem} />
                        </div>

                        <div style={{
                            borderRadius: '12px',
                            overflow: 'hidden',
                            background: 'rgba(10, 10, 10, 0.6)', // Semi-transparent
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            height: '100%',
                            display: activeItem ? 'flex' : 'none',
                            backdropFilter: 'blur(20px)'
                        }}>
                            <Sidebar
                                activeItem={activeItem}
                                files={files}
                                onFileSelect={handleFileSelect}
                                activeFile={activeFile}
                                onCreateFile={handleCreateFile}
                                onUploadFile={handleUploadFile}
                                selectedTab={currentView}
                                onTabChange={setCurrentView}
                            />
                        </div>
                    </div>

                    {/* Center: Main View Area */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        minWidth: 0,
                        borderRadius: '12px',
                        overflow: 'hidden',
                        background: 'rgba(10, 10, 10, 0.6)', // Semi-transparent
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        position: 'relative',
                        backdropFilter: 'blur(20px)'
                    }}>
                        {currentView === 'files' && (
                            <>
                                <EditorArea
                                    openFiles={openFiles}
                                    activeFile={activeFile}
                                    onFileSelect={handleFileSelect}
                                    onFileClose={handleFileClose}
                                    onFileChange={handleFileChange}
                                />
                                {isTerminalOpen && (
                                    <BottomPanel onClose={() => setIsTerminalOpen(false)} />
                                )}
                            </>
                        )}
                        {currentView === 'database' && <DatabaseView />}
                        {currentView === 'hosting' && <HostingView />}
                    </div>

                    {/* Right: Agent Panel */}
                    <div style={{
                        height: '100%'
                    }}>
                        <AgentPanel />
                    </div>
                </div>

                <StatusBar
                    onToggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
                    isTerminalOpen={isTerminalOpen}
                    activeFile={activeFile}
                />
            </div>
        </div>
    );
};

export default Layout;
