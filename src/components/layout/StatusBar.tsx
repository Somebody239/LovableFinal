import React from 'react';
import { GitBranch, AlertCircle, AlertTriangle } from 'lucide-react';
import type { FileData } from './Layout';

interface StatusBarProps {
    onToggleTerminal: () => void;
    isTerminalOpen: boolean;
    activeFile: FileData | null;
}

const StatusBar: React.FC<StatusBarProps> = ({ onToggleTerminal: _onToggleTerminal, isTerminalOpen: _isTerminalOpen, activeFile }) => {
    const getLanguageLabel = (lang: string) => {
        switch (lang) {
            case 'tsx': return 'TypeScript JSX';
            case 'ts': return 'TypeScript';
            case 'jsx': return 'JavaScript JSX';
            case 'js': return 'JavaScript';
            case 'css': return 'CSS';
            case 'json': return 'JSON';
            case 'html': return 'HTML';
            case 'md': return 'Markdown';
            default: return 'Plain Text';
        }
    };

    return (
        <div style={{
            height: '24px',
            background: 'linear-gradient(90deg, hsl(350, 90%, 55%), hsl(25, 95%, 55%))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 12px',
            fontSize: '11px',
            color: 'white',
            userSelect: 'none'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <GitBranch size={12} />
                    <span>main</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.9 }}>
                        <AlertCircle size={11} />
                        <span>0</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.9 }}>
                        <AlertTriangle size={11} />
                        <span>0</span>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {activeFile && (
                    <>
                        <span>Ln 1, Col 1</span>
                        <span>Spaces: 2</span>
                        <span>UTF-8</span>
                        <span>LF</span>
                        <span>{getLanguageLabel(activeFile.language)}</span>
                    </>
                )}
                <span style={{ opacity: 0.8 }}>Lovable IDE</span>
            </div>
        </div>
    );
};

export default StatusBar;
