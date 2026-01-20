import type { ReactNode } from 'react';
import './GlowText.css';

interface GlowTextProps {
    children: ReactNode;
    color?: 'cyan' | 'magenta' | 'green' | 'pink';
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
    className?: string;
}

export function GlowText({
    children,
    color = 'cyan',
    size = 'md',
    as: Component = 'span',
    className = '',
}: GlowTextProps) {
    return (
        <Component className={`glow-text glow-${color} size-${size} ${className}`}>
            {children}
        </Component>
    );
}
