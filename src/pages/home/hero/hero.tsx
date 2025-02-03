import React from 'react';
import { Github, ChevronRight } from 'lucide-react';
import AnimatedSection from '@components/animated-section/animated-section';

const Hero: React.FC = () => {
    return (
        <AnimatedSection id="hero" className="hero">
            <div className="hero-container">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Build beautiful interfaces
                        <span className="hero-title-highlight">with less effort</span>
                    </h1>
                    <p className="hero-description">
                        A modern UI framework that helps developers build responsive and accessible web applications quickly.
                        Built with performance and developer experience in mind.
                    </p>
                    <div className="hero-buttons">
                        <button className="hero-button hero-button-primary">
                            Get Started
                            <ChevronRight className="hero-button-icon" />
                        </button>
                        <button className="hero-button hero-button-secondary">
                            <Github className="hero-button-icon" />
                            GitHub
                        </button>
                    </div>

                    {/* Stats Section */}
                    <div className="stats">
                        <div className="stats-item">
                            <div className="stats-value">50+</div>
                            <div className="stats-label">Components</div>
                        </div>
                        <div className="stats-item">
                            <div className="stats-value">100k+</</div>
                            <div className="stats-label">Downloads</div>
                        </div>
                        <div className="stats-item">
                            <div className="stats-value">5k+</div>
                            <div className="stats-label">GitHub Stars</div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Hero;