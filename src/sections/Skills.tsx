import { motion } from 'framer-motion';
import { Terminal, CommandLine, ProgressBar, GlowText } from '../components';
import { skills, training } from '../data/portfolio';
import './Skills.css';

export function Skills() {
    return (
        <section className="skills section" id="skills">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Terminal title="skills.txt">
                    <CommandLine command="cat skills.txt">
                        <div className="skills-content">
                            <div className="skills-grid">
                                {/* Technical Skills */}
                                <div className="skills-column">
                                    <GlowText color="cyan" size="md" className="skills-heading">
                    // Technical Skills
                                    </GlowText>
                                    <div className="skills-list">
                                        {skills.technical.map((skill, index) => (
                                            <ProgressBar
                                                key={skill.name}
                                                label={skill.name}
                                                value={skill.level}
                                                delay={index * 0.1}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Soft Skills */}
                                <div className="skills-column">
                                    <GlowText color="magenta" size="md" className="skills-heading">
                    // Soft Skills
                                    </GlowText>
                                    <ul className="soft-skills-list">
                                        {skills.soft.map((skill, index) => (
                                            <motion.li
                                                key={skill}
                                                className="soft-skill-item"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <span className="skill-bullet">▹</span>
                                                {skill}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Training/Certifications */}
                            <div className="training-section">
                                <GlowText color="green" size="md" className="skills-heading">
                  // Certifications
                                </GlowText>
                                <div className="training-grid">
                                    {training.map((cert, index) => (
                                        <motion.div
                                            key={cert.title}
                                            className="training-card"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 }}
                                        >
                                            <span className="cert-icon">📜</span>
                                            <div className="cert-info">
                                                <span className="cert-title">{cert.title}</span>
                                                <span className="cert-provider">{cert.provider}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CommandLine>
                </Terminal>
            </motion.div>
        </section>
    );
}
