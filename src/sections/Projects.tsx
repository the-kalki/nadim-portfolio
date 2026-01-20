import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, CommandLine, GlowText } from '../components';
import { projects } from '../data/portfolio';
import './Projects.css';

export function Projects() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section className="projects section" id="projects">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Terminal title="projects/">
                    <CommandLine command="ls -la projects/">
                        <div className="projects-list">
                            <div className="ls-header">
                                <span className="ls-col">type</span>
                                <span className="ls-col">status</span>
                                <span className="ls-col">name</span>
                            </div>

                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className={`project-row ${expandedId === project.id ? 'expanded' : ''}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div
                                        className="project-summary"
                                        onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                                    >
                                        <span className="project-type">drwxr-xr-x</span>
                                        <span className={`project-status ${project.status}`}>
                                            [{project.status}]
                                        </span>
                                        <span className="project-name">
                                            📁 {project.id}/
                                        </span>
                                        <span className="project-expand">
                                            {expandedId === project.id ? '▼' : '▶'}
                                        </span>
                                    </div>

                                    <AnimatePresence>
                                        {expandedId === project.id && (
                                            <motion.div
                                                className="project-details"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="detail-content">
                                                    <CommandLine
                                                        prompt="nadim@portfolio:~/projects$"
                                                        command={`cat ${project.id}/README.md`}
                                                    >
                                                        <div className="readme-content">
                                                            <h3 className="readme-title">
                                                                <GlowText color="cyan"># {project.title}</GlowText>
                                                            </h3>

                                                            <p className="readme-desc">{project.description}</p>

                                                            <div className="readme-section">
                                                                <GlowText color="magenta" size="sm">## Tech Stack</GlowText>
                                                                <div className="tech-tags">
                                                                    {project.tech.map((tech) => (
                                                                        <span key={tech} className="tech-tag">{tech}</span>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            <div className="readme-section">
                                                                <GlowText color="green" size="sm">## Impact</GlowText>
                                                                <p className="readme-impact">{project.impact}</p>
                                                            </div>
                                                        </div>
                                                    </CommandLine>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </CommandLine>
                </Terminal>
            </motion.div>
        </section>
    );
}
