import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlowText, TypeWriter, MatrixRain } from '../components';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

export function Hero() {
    const [showTitle, setShowTitle] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowTitle(true), 1500);
        const timer2 = setTimeout(() => setShowSubtitle(true), 3000);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <section className="hero" id="home">
            <MatrixRain opacity={0.12} />

            <div className="hero-content">
                <motion.div
                    className="hero-terminal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="command-line">
                        <span className="prompt">nadim@portfolio:~$</span>
                        <TypeWriter
                            text=" whoami"
                            speed={100}
                            delay={500}
                            className="command"
                        />
                    </div>

                    {showTitle && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <GlowText as="h1" color="cyan" size="xxl" className="hero-name">
                                {personalInfo.name}
                            </GlowText>
                        </motion.div>
                    )}

                    {showSubtitle && (
                        <motion.div
                            className="hero-subtitle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="title-line">
                                <span className="bracket">[</span>
                                <GlowText color="magenta" size="lg">
                                    {personalInfo.title}
                                </GlowText>
                                <span className="bracket">]</span>
                            </div>
                            <p className="hero-tagline">{personalInfo.subtitle}</p>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div
                    className="hero-scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    <span className="scroll-text">scroll_down</span>
                    <div className="scroll-indicator">
                        <span className="scroll-arrow">▼</span>
                    </div>
                </motion.div>
            </div>

            <div className="scanlines" />
        </section>
    );
}
