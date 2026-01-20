import type { ReactNode } from 'react';
import './Terminal.css';

interface TerminalProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

export function Terminal({ title = 'terminal', children, className = '' }: TerminalProps) {
    return (
        <div className={`terminal-window ${className}`}>
            <div className="terminal-header">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">{title}</span>
            </div>
            <div className="terminal-body">
                {children}
            </div>
        </div>
    );
}

interface CommandLineProps {
    prompt?: string;
    command: string;
    children?: ReactNode;
}

export function CommandLine({
    prompt = 'nadim@portfolio:~$',
    command,
    children
}: CommandLineProps) {
    return (
        <div className="command-line">
            <div className="command-input">
                <span className="command-prompt">{prompt}</span>
                <span className="command-text"> {command}</span>
            </div>
            {children && <div className="command-output">{children}</div>}
        </div>
    );
}
