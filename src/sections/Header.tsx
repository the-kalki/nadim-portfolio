import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowText } from '../components';
import './Header.css';

const navItems = [
    { id: 'home', label: 'whoami' },
    { id: 'skills', label: 'skills' },
    { id: 'experience', label: 'experience' },
    { id: 'projects', label: 'projects' },
    { id: 'leadership', label: 'leadership' },
    { id: 'contact', label: 'contact' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <GlowText color="cyan" size="md">
                        nadim@portfolio
                    </GlowText>
                    <span className="header-cursor">:~$</span>
                    <span className="cursor" />
                </div>

                {/* Desktop Nav */}
                <nav className="header-nav desktop-nav">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className="nav-item"
                            onClick={() => scrollToSection(item.id)}
                        >
                            <span className="nav-prefix">./</span>
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isOpen ? 'open' : ''}`}>
                        <span />
                        <span />
                        <span />
                    </span>
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="mobile-nav"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.id}
                                className="mobile-nav-item"
                                onClick={() => scrollToSection(item.id)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <span className="nav-prefix">./</span>
                                {item.label}
                            </motion.button>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
