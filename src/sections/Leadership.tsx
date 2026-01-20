import { motion } from 'framer-motion';
import { GlowText } from '../components';
import { leadership, extracurricular } from '../data/portfolio';
import './Leadership.css';

export function Leadership() {
    return (
        <section className="leadership section" id="leadership">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="leadership-container">
                    {/* Leadership */}
                    <div className="leadership-block">
                        <div className="block-header">
                            <span className="block-icon">🏆</span>
                            <GlowText color="cyan" size="lg">Leadership</GlowText>
                        </div>

                        {leadership.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="leadership-card"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4 className="leadership-title">{item.title}</h4>
                                <span className="leadership-org">{item.organization}</span>
                                <p className="leadership-desc">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Extracurricular */}
                    <div className="leadership-block">
                        <div className="block-header">
                            <span className="block-icon">⚡</span>
                            <GlowText color="magenta" size="lg">Extracurricular</GlowText>
                        </div>

                        <ul className="extra-list">
                            {extracurricular.map((item, index) => (
                                <motion.li
                                    key={item}
                                    className="extra-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className="extra-bullet">→</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
