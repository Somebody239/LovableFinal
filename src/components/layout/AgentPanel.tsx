import React, { useState, useRef, useEffect } from 'react';
import { Plus, ArrowUp, Sparkles, ChevronDown, FileCode, Cloud, Rocket, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurTextAnimation from '../ui/BlurTextAnimation';
import Plan from '../Plan';

const AI_MODELS = [
    { id: 'gpt-4', name: 'GPT-4', provider: 'OpenAI', icon: '🧠' },
    { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', provider: 'OpenAI', icon: '⚡' },
    { id: 'claude-3', name: 'Claude 3 Opus', provider: 'Anthropic', icon: '🎭' },
    { id: 'claude-sonnet', name: 'Claude 3.5 Sonnet', provider: 'Anthropic', icon: '🎵' },
    { id: 'gemini-pro', name: 'Gemini Pro', provider: 'Google', icon: '💎' },
    { id: 'gemini-ultra', name: 'Gemini Ultra', provider: 'Google', icon: '🌟' },
];

const MENTION_ITEMS = [
    { id: 'cloud', type: 'service', name: 'Lovable Cloud', icon: Cloud, description: 'Database & Auth' },
    { id: 'deploy', type: 'service', name: 'Deploy Setup', icon: Rocket, description: 'Hosting settings' },
    { id: 'files', type: 'divider', name: 'Files' },
    { id: 'app-tsx', type: 'file', name: 'App.tsx', icon: FileCode, path: '/src/App.tsx' },
    { id: 'index-css', type: 'file', name: 'index.css', icon: FileCode, path: '/src/index.css' },
    { id: 'main-tsx', type: 'file', name: 'main.tsx', icon: FileCode, path: '/src/main.tsx' },
];

const RANDOM_RESPONSES = [
    "I'll help you with that! Here's some code to get you started.",
    "Interesting idea. Let me generate a prototype for you.",
    "I can certainly help refine that concept. Here is a suggested implementation.",
    "Let's build this together. I'm generating the necessary components now.",
    "That sounds like a great feature. Here's how we can implement it using React and Framer Motion."
];

const RANDOM_CODE_SNIPPETS = [
    `function calculateOrbit() {
  const G = 6.67430e-11;
  const M = 5.972e24;
  const r = 6371000 + 400000;
  return Math.sqrt(G * M / r);
}`,
    `const data = await fetch('/api/stats')
  .then(res => res.json());
console.log(data);`,
    `import { motion } from 'framer-motion';
export const FadeIn = ({ children }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    {children}
  </motion.div>
);`,
    `/* CSS for the glow effect */
.glow {
  box-shadow: 0 0 20px rgba(255, 68, 102, 0.5);
  transition: all 0.3s ease;
}`
];

const AgentPanel: React.FC = () => {
    const [chatInput, setChatInput] = useState('');
    const [showMentions, setShowMentions] = useState(false);
    const [showModelPicker, setShowModelPicker] = useState(false);
    const [selectedModel, setSelectedModel] = useState(AI_MODELS[0]);
    const [mentionFilter, setMentionFilter] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string; code?: string }>>([]);
    const [showPlan, setShowPlan] = useState(false);

    const inputRef = useRef<HTMLTextAreaElement>(null);
    const mentionDropdownRef = useRef<HTMLDivElement>(null);
    const modelDropdownRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (mentionDropdownRef.current && !mentionDropdownRef.current.contains(e.target as Node)) {
                setShowMentions(false);
            }
            if (modelDropdownRef.current && !modelDropdownRef.current.contains(e.target as Node)) {
                setShowModelPicker(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setChatInput(value);
        const lastAtIndex = value.lastIndexOf('@');
        if (lastAtIndex !== -1) {
            const textAfterAt = value.slice(lastAtIndex + 1);
            if (!textAfterAt.includes(' ')) {
                setMentionFilter(textAfterAt.toLowerCase());
                setShowMentions(true);
            } else {
                setShowMentions(false);
            }
        } else {
            setShowMentions(false);
        }
    };

    const insertMention = (item: typeof MENTION_ITEMS[0]) => {
        if (item.type === 'divider') return;
        const lastAtIndex = chatInput.lastIndexOf('@');
        const newValue = chatInput.slice(0, lastAtIndex) + `@${item.name} `;
        setChatInput(newValue);
        setShowMentions(false);
        inputRef.current?.focus();
    };

    const filteredMentions = MENTION_ITEMS.filter(item => {
        if (item.type === 'divider') return true;
        return item.name.toLowerCase().includes(mentionFilter);
    });

    const handleSend = async () => {
        if (!chatInput.trim()) return;
        const userMessage = chatInput.trim();
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setChatInput('');
        setIsGenerating(true);
        setTimeout(() => {
            const randomResponse = RANDOM_RESPONSES[Math.floor(Math.random() * RANDOM_RESPONSES.length)];
            const randomCode = RANDOM_CODE_SNIPPETS[Math.floor(Math.random() * RANDOM_CODE_SNIPPETS.length)];
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: randomResponse,
                code: Math.random() > 0.3 ? randomCode : undefined
            }]);
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div style={{
            width: showPlan ? '550px' : '320px',
            background: '#0a0a0a',
            border: '1px solid #27272a',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            transition: 'width 0.3s ease',
            height: '100%',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <div style={{
                padding: '12px 16px',
                borderBottom: '1px solid #27272a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0
            }}>
                <span style={{ fontWeight: 600, fontSize: '14px', color: '#e5e5e5' }}>Agent</span>

                {/* Model Selector */}
                <div style={{ position: 'relative' }} ref={modelDropdownRef}>
                    <button
                        onClick={() => setShowModelPicker(!showModelPicker)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '4px 10px',
                            background: '#18181b',
                            border: '1px solid #27272a',
                            borderRadius: '8px',
                            color: '#a1a1aa',
                            fontSize: '12px',
                            cursor: 'pointer',
                            transition: 'all 150ms'
                        }}
                    >
                        <span>{selectedModel.icon}</span>
                        <span>{selectedModel.name}</span>
                        <ChevronDown size={12} style={{
                            transform: showModelPicker ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 200ms'
                        }} />
                    </button>

                    <AnimatePresence>
                        {showModelPicker && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.15 }}
                                style={{
                                    position: 'absolute',
                                    top: 'calc(100% + 4px)',
                                    right: 0,
                                    width: '220px',
                                    background: '#18181b',
                                    border: '1px solid #27272a',
                                    borderRadius: '10px',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                                    zIndex: 100,
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ padding: '4px' }}>
                                    {AI_MODELS.map((model) => (
                                        <button
                                            key={model.id}
                                            onClick={() => {
                                                setSelectedModel(model);
                                                setShowModelPicker(false);
                                            }}
                                            style={{
                                                width: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                padding: '8px 10px',
                                                background: selectedModel.id === model.id ? '#27272a' : 'transparent',
                                                borderRadius: '8px',
                                                border: 'none',
                                                color: '#e5e5e5',
                                                fontSize: '12px',
                                                cursor: 'pointer',
                                                textAlign: 'left'
                                            }}
                                        >
                                            <span style={{ fontSize: '16px' }}>{model.icon}</span>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontWeight: 500 }}>{model.name}</div>
                                                <div style={{ fontSize: '10px', color: '#71717a' }}>{model.provider}</div>
                                            </div>
                                            {selectedModel.id === model.id && (
                                                <Check size={14} style={{ color: '#3b82f6' }} />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                {showPlan ? (
                    <div style={{ height: '100%', overflow: 'auto' }}>
                        <Plan />
                    </div>
                ) : (
                    <div style={{ height: '100%', overflow: 'auto', padding: '16px', paddingBottom: '140px' }}>
                        {messages.length === 0 ? (
                            <div style={{
                                textAlign: 'center',
                                color: '#71717a',
                                fontSize: '13px',
                                padding: '40px 16px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '16px',
                                        background: '#27272a',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '16px'
                                    }}>
                                    <Sparkles size={28} style={{ color: '#a1a1aa' }} />
                                </motion.div>
                                <h3 style={{ fontWeight: 600, fontSize: '16px', marginBottom: '6px', color: '#e5e5e5' }}>Start building</h3>
                                <p style={{ fontWeight: 400, marginBottom: '20px', maxWidth: '85%', lineHeight: 1.5, color: '#71717a' }}>
                                    Share your idea and I'll help you create a prototype in seconds.
                                </p>

                                <div style={{
                                    display: 'flex',
                                    gap: '6px',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    maxWidth: '280px'
                                }}>
                                    {['Create a dashboard', 'Landing page for SaaS', 'Authentication flow'].map((suggestion) => (
                                        <button
                                            key={suggestion}
                                            onClick={() => setChatInput(suggestion)}
                                            style={{
                                                padding: '6px 12px',
                                                borderRadius: '8px',
                                                border: '1px solid #27272a',
                                                background: '#18181b',
                                                fontSize: '11px',
                                                cursor: 'pointer',
                                                color: '#a1a1aa',
                                                transition: 'all 0.15s'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = '#27272a';
                                                e.currentTarget.style.color = '#e5e5e5';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = '#18181b';
                                                e.currentTarget.style.color = '#a1a1aa';
                                            }}
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {messages.map((msg, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.25 }}
                                        style={{
                                            maxWidth: '100%',
                                            width: '100%'
                                        }}
                                    >
                                        {msg.role === 'user' ? (
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'flex-end'
                                            }}>
                                                <div style={{
                                                    padding: '10px 14px',
                                                    borderRadius: '12px 12px 4px 12px',
                                                    background: '#27272a',
                                                    color: '#e5e5e5',
                                                    fontSize: '13px',
                                                    lineHeight: 1.5,
                                                    maxWidth: '85%'
                                                }}>
                                                    {msg.content}
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                                                    <div style={{
                                                        width: '22px', height: '22px',
                                                        borderRadius: '6px',
                                                        background: '#27272a',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                    }}>
                                                        <Sparkles size={12} color="#a1a1aa" />
                                                    </div>
                                                    <span style={{ fontWeight: 600, fontSize: '12px', color: '#a1a1aa' }}>Lovable</span>
                                                </div>
                                                <BlurTextAnimation
                                                    text={msg.content}
                                                    fontSize="text-sm"
                                                    textColor="text-foreground"
                                                />
                                                {msg.code && (
                                                    <div style={{
                                                        marginTop: '10px',
                                                        background: '#000000',
                                                        borderRadius: '8px',
                                                        padding: '12px',
                                                        border: '1px solid #27272a',
                                                        fontFamily: 'monospace',
                                                        fontSize: '11px',
                                                        color: '#a1a1aa',
                                                        overflowX: 'auto'
                                                    }}>
                                                        <pre style={{ margin: 0 }}>{msg.code}</pre>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}

                                {isGenerating && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        style={{
                                            fontSize: '12px',
                                            display: 'flex',
                                            gap: '10px',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <div style={{
                                            width: '22px', height: '22px',
                                            borderRadius: '6px',
                                            background: '#27272a',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                                        }}>
                                            <Sparkles size={12} color="#a1a1aa" />
                                        </div>
                                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center', background: '#18181b', padding: '6px 10px', borderRadius: '8px' }}>
                                            <motion.span
                                                animate={{ opacity: [0.3, 1, 0.3] }}
                                                transition={{ repeat: Infinity, duration: 1.2 }}
                                                style={{ width: 5, height: 5, borderRadius: '50%', background: '#71717a' }}
                                            />
                                            <motion.span
                                                animate={{ opacity: [0.3, 1, 0.3] }}
                                                transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
                                                style={{ width: 5, height: 5, borderRadius: '50%', background: '#71717a' }}
                                            />
                                            <motion.span
                                                animate={{ opacity: [0.3, 1, 0.3] }}
                                                transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
                                                style={{ width: 5, height: 5, borderRadius: '50%', background: '#71717a' }}
                                            />
                                            <span style={{ marginLeft: '6px', color: '#71717a', fontSize: '11px' }}>Thinking...</span>
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Bottom Chat Input - Fixed at bottom, simple dark style */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '12px',
                background: 'linear-gradient(to top, #0a0a0a 60%, transparent 100%)',
                zIndex: 50
            }}>
                {/* @ Mention Dropdown */}
                <AnimatePresence>
                    {showMentions && (
                        <motion.div
                            ref={mentionDropdownRef}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.15 }}
                            style={{
                                position: 'absolute',
                                bottom: 'calc(100% - 8px)',
                                left: '12px',
                                right: '12px',
                                background: '#18181b',
                                border: '1px solid #27272a',
                                borderRadius: '10px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                overflow: 'hidden',
                                zIndex: 100
                            }}
                        >
                            <div style={{ padding: '4px 0', maxHeight: '200px', overflow: 'auto' }}>
                                {filteredMentions.map((item) => (
                                    item.type === 'divider' ? (
                                        <div key={item.id} style={{
                                            padding: '6px 12px 2px',
                                            fontSize: '10px',
                                            fontWeight: 700,
                                            color: '#52525b',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}>
                                            {item.name}
                                        </div>
                                    ) : (
                                        <button
                                            key={item.id}
                                            onClick={() => insertMention(item)}
                                            style={{
                                                width: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                padding: '8px 12px',
                                                background: 'transparent',
                                                border: 'none',
                                                color: '#e5e5e5',
                                                fontSize: '12px',
                                                cursor: 'pointer',
                                                textAlign: 'left'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = '#27272a'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                        >
                                            {item.icon && (
                                                <div style={{
                                                    padding: '4px',
                                                    borderRadius: '6px',
                                                    background: '#27272a',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                }}>
                                                    <item.icon size={14} style={{ color: '#71717a' }} />
                                                </div>
                                            )}
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontWeight: 500 }}>{item.name}</div>
                                                {'description' in item && (
                                                    <div style={{ fontSize: '10px', color: '#52525b' }}>
                                                        {item.description}
                                                    </div>
                                                )}
                                            </div>
                                        </button>
                                    )
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Input Area */}
                <div style={{
                    background: '#18181b',
                    border: '1px solid #27272a',
                    borderRadius: '16px',
                    padding: '10px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                }}>
                    <textarea
                        ref={inputRef}
                        className="scrollbar-hide"
                        placeholder="Ask Lovable..."
                        value={chatInput}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                        style={{
                            width: '100%',
                            background: 'transparent',
                            border: 'none',
                            resize: 'none',
                            outline: 'none',
                            color: '#e5e5e5',
                            fontSize: '13px',
                            minHeight: '32px',
                            maxHeight: '80px',
                            lineHeight: '1.5'
                        }}
                    />

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        {/* Left Actions */}
                        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                            <button
                                onClick={() => {
                                    setChatInput(prev => prev + '@');
                                    setShowMentions(true);
                                    setMentionFilter('');
                                    inputRef.current?.focus();
                                }}
                                style={{
                                    width: '28px', height: '28px', borderRadius: '50%',
                                    border: '1px solid #3f3f46',
                                    color: '#71717a',
                                    background: 'transparent',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer',
                                }}
                                title="Add mention"
                            >
                                <Plus size={14} />
                            </button>
                            <span style={{ fontSize: '11px', color: '#52525b' }}>✦ Visual edits</span>
                        </div>

                        {/* Right Actions */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <button
                                onClick={() => setShowPlan(!showPlan)}
                                style={{
                                    fontSize: '12px',
                                    color: showPlan ? '#e5e5e5' : '#71717a',
                                    background: showPlan ? '#27272a' : 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    fontWeight: 500,
                                    transition: 'all 0.15s'
                                }}
                            >
                                Plan
                            </button>

                            <button
                                disabled={!chatInput.trim() || isGenerating}
                                onClick={handleSend}
                                style={{
                                    width: '28px', height: '28px', borderRadius: '50%',
                                    background: chatInput.trim() ? '#3b82f6' : '#27272a',
                                    border: 'none',
                                    color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: chatInput.trim() ? 'pointer' : 'not-allowed',
                                    transition: 'background 150ms'
                                }}
                            >
                                <ArrowUp size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentPanel;
