import { motion } from 'framer-motion';
import './ProgressBar.css';

interface ProgressBarProps {
    label: string;
    value: number;
    delay?: number;
}

export function ProgressBar({ label, value, delay = 0 }: ProgressBarProps) {
    return (
        <div className="skill-progress">
            <div className="skill-header">
                <span className="skill-name">{label}</span>
                <span className="skill-value">{value}%</span>
            </div>
            <div className="progress-bar">
                <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
}
