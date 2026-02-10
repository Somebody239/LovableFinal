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
            background: '#09090b',
            position: 'relative'
        }}>

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
                        background: '#000000', // Darker black
                        border: '1px solid #27272a',
                        height: '100%'
                    }}>
                        <ActivityBar activeItem={activeItem} onSelectItem={setActiveItem} />
                    </div>

                    <div style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        background: '#0a0a0a', // Slightly lighter than pure black
                        border: '1px solid #27272a',
                        height: '100%',
                        display: activeItem ? 'flex' : 'none'
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
                    background: '#0a0a0a',
                    border: '1px solid #27272a',
                    position: 'relative'
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
    );
};

export default Layout;
