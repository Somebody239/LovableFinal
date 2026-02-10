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
                background: 'transparent', // Show gradient through
                gap: '16px'
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    background: 'hsl(var(--muted))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <FileCode size={32} style={{ color: 'hsl(var(--muted-foreground))' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px' }}>No file open</p>
                    <p style={{ fontSize: '13px', color: 'hsl(var(--muted-foreground))' }}>
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
            background: 'rgba(20, 20, 20, 0.6)', // Glass-ish
            backdropFilter: 'blur(10px)'
        }}>
            {/* Editor Tabs - Clean look */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(0,0,0,0.2)',
                borderBottom: '1px solid hsl(var(--border))',
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
                                height: '36px',
                                background: activeFile.path === file.path ? 'hsl(var(--background))' : 'transparent',
                                borderRight: '1px solid hsl(var(--border))',
                                borderTop: activeFile.path === file.path ? '2px solid hsl(var(--primary))' : '2px solid transparent',
                                fontSize: '13px',
                                cursor: 'pointer',
                                color: activeFile.path === file.path ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                                whiteSpace: 'nowrap',
                                transition: 'all 150ms'
                            }}
                        >
                            {getFileIcon(file)}
                            <span>{file.name}</span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onFileClose(file);
                                }}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'hsl(var(--muted-foreground))', // Inherit color
                                    opacity: 0.7,
                                    cursor: 'pointer',
                                    padding: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '4px',
                                    marginLeft: '4px'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'hsl(var(--accent))'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                                <X size={12} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Area - Simulating cm-scroller */}
            <div style={{
                flex: 1,
                display: 'flex',
                overflow: 'auto',
                position: 'relative',
                fontSize: '13px',
                fontFamily: 'var(--font-mono)'
            }}>
                {/* Gutters (Line Numbers) */}
                <div style={{
                    padding: '12px 0',
                    textAlign: 'right',
                    color: 'hsl(var(--muted-foreground))',
                    userSelect: 'none',
                    minWidth: '48px',
                    background: 'rgba(0,0,0,0.1)', // Slightly darker gutter
                    borderRight: '1px solid hsl(var(--border))',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'sticky',
                    left: 0,
                    zIndex: 10
                }}>
                    {(lines.length === 0 ? [''] : lines).map((_, i) => (
                        <div key={i} style={{ paddingRight: '12px', height: '20px', lineHeight: '20px' }}>{i + 1}</div>
                    ))}
                </div>

                {/* Editor Content */}
                <div style={{ flex: 1, position: 'relative' }}>
                    <textarea
                        ref={textareaRef}
                        defaultValue={activeFile.content}
                        onChange={handleChange}
                        spellCheck={false}
                        placeholder="Start typing..."
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            padding: '12px 16px',
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            resize: 'none',
                            fontFamily: 'inherit',
                            fontSize: 'inherit',
                            color: 'hsl(var(--foreground))',
                            tabSize: 2,
                            whiteSpace: 'pre',
                            lineHeight: '20px'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default EditorArea;
