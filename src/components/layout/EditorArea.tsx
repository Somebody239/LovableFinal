import React, { useRef, useEffect } from 'react';
import { X, ChevronRight, FileCode, FileJson, File } from 'lucide-react';
import type { FileData } from './Layout';

interface EditorAreaProps {
    openFiles: FileData[];
    activeFile: FileData | null;
    onFileSelect: (file: FileData) => void;
    onFileClose: (file: FileData) => void;
    onFileChange: (path: string, content: string) => void;
}

const EditorArea: React.FC<EditorAreaProps> = ({
    openFiles, activeFile, onFileSelect, onFileClose, onFileChange
}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current && activeFile) {
            textareaRef.current.value = activeFile.content;
        }
    }, [activeFile?.path]);

    if (!activeFile) {
        return (
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                gap: '16px'
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <FileCode size={32} style={{ color: 'rgba(255, 255, 255, 0.4)' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px', color: '#e5e5e5' }}>No file open</p>
                    <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.4)' }}>
                        Create or select a file from the sidebar
                    </p>
                </div>
            </div>
        );
    }

    const lines = activeFile.content.split('\n');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onFileChange(activeFile.path, e.target.value);
    };

    const getFileIcon = (file: FileData) => {
        switch (file.language) {
            case 'tsx':
            case 'ts':
                return <FileCode size={14} style={{ color: '#519aba' }} />;
            case 'css':
                return <FileCode size={14} style={{ color: '#42a5f5' }} />;
            case 'json':
                return <FileJson size={14} style={{ color: '#cbcb41' }} />;
            default:
                return <File size={14} style={{ color: 'hsl(var(--muted-foreground))' }} />;
        }
    };

    return (
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
            background: 'transparent'
        }}>
            {/* Editor Tabs - Clean look */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(0,0,0,0.2)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                height: '36px',
                overflow: 'hidden'
            }}>
                <div style={{ display: 'flex', flex: 1, overflow: 'auto' }} className="scrollbar-hide">
                    {openFiles.map((file) => (
                        <div
                            key={file.path}
                            onClick={() => onFileSelect(file)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '0 12px',
                                height: '100%',
                                background: activeFile.path === file.path ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                                borderRight: '1px solid rgba(255, 255, 255, 0.05)',
                                color: activeFile.path === file.path ? '#e5e5e5' : '#71717a',
                                fontSize: '13px',
                                cursor: 'pointer',
                                minWidth: '120px',
                                maxWidth: '200px'
                            }}
                        >
                            {getFileIcon(file)}
                            <span style={{
                                flex: 1,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}>
                                {file.name}
                            </span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onFileClose(file);
                                }}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'inherit',
                                    cursor: 'pointer',
                                    opacity: 0.6,
                                    padding: '2px',
                                    borderRadius: '4px',
                                    display: 'flex'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                                <X size={12} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Breadcrumbs */}
            <div style={{
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 16px',
                gap: '6px',
                fontSize: '12px',
                color: '#71717a'
            }}>
                <span>project-paramount</span>
                <ChevronRight size={12} />
                <span>src</span>
                <ChevronRight size={12} />
                <span style={{ color: '#e5e5e5' }}>{activeFile.name}</span>
            </div>

            {/* Editor Content */}
            <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <textarea
                    ref={textareaRef}
                    onChange={handleChange}
                    spellCheck={false}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'transparent',
                        color: '#d4d4d4', // Monokai-ish text color
                        border: 'none',
                        resize: 'none',
                        padding: '4px 16px 16px',
                        outline: 'none',
                        fontFamily: "'Fira Code', monospace",
                        fontSize: '14px',
                        lineHeight: '1.5',
                        whiteSpace: 'pre'
                    }}
                />
            </div>
        </div>
    );
};

export default EditorArea;
