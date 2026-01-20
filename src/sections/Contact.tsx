import { motion } from 'framer-motion';
import { Terminal, CommandLine, GlowText } from '../components';
import { personalInfo, socialLinks } from '../data/portfolio';
import './Contact.css';

export function Contact() {
    return (
        <section className="contact section" id="contact">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Terminal title="contact">
                    <CommandLine command="echo $CONTACT_INFO">
                        <div className="contact-content">
                            <div className="contact-grid">
                                {/* Email */}
                                <motion.a
                                    href={`mailto:${personalInfo.email}`}
                                    className="contact-card"
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="contact-icon">📧</span>
                                    <div className="contact-info">
                                        <span className="contact-label">email</span>
                                        <GlowText color="cyan" size="sm">
                                            {personalInfo.email}
                                        </GlowText>
                                    </div>
                                </motion.a>

                                {/* Phone */}
                                <motion.a
                                    href={`tel:${personalInfo.phone}`}
                                    className="contact-card"
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="contact-icon">📱</span>
                                    <div className="contact-info">
                                        <span className="contact-label">phone</span>
                                        <GlowText color="magenta" size="sm">
                                            {personalInfo.phone}
                                        </GlowText>
                                    </div>
                                </motion.a>

                                {/* Location */}
                                <motion.div
                                    className="contact-card"
                                    whileHover={{ scale: 1.02, x: 5 }}
                                >
                                    <span className="contact-icon">📍</span>
                                    <div className="contact-info">
                                        <span className="contact-label">location</span>
                                        <GlowText color="green" size="sm">
                                            {personalInfo.location}
                                        </GlowText>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Social Links */}
                            <div className="social-section">
                                <GlowText color="cyan" size="sm" className="social-heading">
                  // Connect
                                </GlowText>
                                <div className="social-links">
                                    <motion.a
                                        href={socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        whileHover={{ y: -3 }}
                                    >
                                        <span className="social-icon">⌨️</span>
                                        <span>GitHub</span>
                                    </motion.a>

                                    <motion.a
                                        href={socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        whileHover={{ y: -3 }}
                                    >
                                        <span className="social-icon">💼</span>
                                        <span>LinkedIn</span>
                                    </motion.a>

                                    <motion.a
                                        href={socialLinks.email}
                                        className="social-link"
                                        whileHover={{ y: -3 }}
                                    >
                                        <span className="social-icon">✉️</span>
                                        <span>Email</span>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </CommandLine>
                </Terminal>
            </motion.div>
        </section>
    );
}
