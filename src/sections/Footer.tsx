import { GlowText } from '../components';
import { personalInfo } from '../data/portfolio';
import './Footer.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-terminal">
                    <span className="footer-prompt">nadim@portfolio:~$</span>
                    <span className="footer-command"> exit</span>
                </div>

                <div className="footer-status">
                    <span className="status-text">
                        Process terminated with exit code <GlowText color="green">0</GlowText>
                    </span>
                </div>

                <div className="footer-divider" />

                <div className="footer-info">
                    <p className="footer-copyright">
                        © {currentYear} <GlowText color="cyan">{personalInfo.name}</GlowText>
                    </p>
                    <p className="footer-tagline">
                        Built with <span className="heart">❤</span> and lots of <GlowText color="magenta">caffeine</GlowText>
                    </p>
                </div>

                <div className="footer-ascii">
                    <pre>{`
   ╔═══════════════════════════════════╗
   ║  Thanks for visiting my terminal  ║
   ╚═══════════════════════════════════╝
          `}</pre>
                </div>
            </div>
        </footer>
    );
}
