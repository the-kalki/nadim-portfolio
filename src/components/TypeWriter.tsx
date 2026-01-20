import { useTypewriter } from '../hooks/useTypewriter';
import './TypeWriter.css';

interface TypeWriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    showCursor?: boolean;
    onComplete?: () => void;
}

export function TypeWriter({
    text,
    speed = 50,
    delay = 0,
    className = '',
    showCursor = true,
    onComplete,
}: TypeWriterProps) {
    const { displayedText, isComplete } = useTypewriter({
        text,
        speed,
        delay,
        onComplete,
    });

    return (
        <span className={`typewriter ${className}`}>
            {displayedText}
            {showCursor && !isComplete && <span className="cursor" />}
        </span>
    );
}
