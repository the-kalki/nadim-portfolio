import { motion } from 'framer-motion';
import { Terminal, CommandLine, GlowText } from '../components';
import { experience, education } from '../data/portfolio';
import './Experience.css';

export function Experience() {
    return (
        <section className="experience section" id="experience">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Terminal title="experience.log">
                    <CommandLine command="cat experience.log">
                        <div className="experience-content">
                            {/* Work Experience */}
                            <div className="exp-section">
                                <GlowText color="cyan" size="md" className="exp-heading">
                  // Work Experience
                                </GlowText>

                                {experience.map((exp, index) => (
                                    <motion.div
                                        key={exp.company}
                                        className="exp-card"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        <div className="exp-header">
                                            <div className="exp-title-group">
                                                <h3 className="exp-role">{exp.role}</h3>
                                                <span className="exp-company">@ {exp.company}</span>
                                            </div>
                                            <span className="exp-period">{exp.period}</span>
                                        </div>

                                        <p className="exp-description">{exp.description}</p>

                                        <ul className="exp-highlights">
                                            {exp.highlights.map((highlight) => (
                                                <li key={highlight}>
                                                    <span className="highlight-marker">→</span>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Education */}
                            <div className="exp-section">
                                <GlowText color="magenta" size="md" className="exp-heading">
                  // Education
                                </GlowText>

                                <div className="edu-timeline">
                                    {education.map((edu, index) => (
                                        <motion.div
                                            key={edu.institution}
                                            className="edu-item"
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 }}
                                        >
                                            <div className="edu-marker" />
                                            <div className="edu-content">
                                                <span className="edu-period">{edu.period}</span>
                                                <h4 className="edu-degree">{edu.degree}</h4>
                                                <span className="edu-institution">{edu.institution}</span>
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
