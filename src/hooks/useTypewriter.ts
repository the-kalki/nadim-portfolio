import { useState, useEffect } from 'react';

interface UseTypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    onComplete?: () => void;
}

export function useTypewriter({
    text,
    speed = 50,
    delay = 0,
    onComplete,
}: UseTypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        setDisplayedText('');
        setIsComplete(false);
        setIsTyping(false);

        const startTimeout = setTimeout(() => {
            setIsTyping(true);
            let currentIndex = 0;

            const typingInterval = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);
                    setIsComplete(true);
                    onComplete?.();
                }
            }, speed);

            return () => clearInterval(typingInterval);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [text, speed, delay, onComplete]);

    return { displayedText, isComplete, isTyping };
}
