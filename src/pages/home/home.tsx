import React from 'react';
import { mainNavItems,footerNavItems } from './data/nav-items.ts';
import { aboutUsData } from './data/about-us-data';
import  LandingLayout  from '@layout/landing-layout/landing-layout';
import Features from './features/features';
import AboutUs from '@pages/home/about-us/about-us';
import ContactUs from '@pages/home/contact-us/contact-us';
import Box from '@components/box';
import { Github, ChevronRight } from 'lucide-react';
import { Button } from "@components/button";
import AnimatedSection from "@components/animated-section";

const Hero: React.FC = () => {
    return (
        <AnimatedSection id='hero'>
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
                        <Button className="hero-button hero-button-primary">
                            Get Started
                            <ChevronRight className="hero-button-icon" />
                        </Button>
                        <Button variant="secondary" className="hero-button">
                            <Github className="hero-button-icon" />
                            GitHub
                        </Button>
                    </div>

                    <div className="stats">
                        <div className="stats-item">
                            <div className="stats-value">50+</div>
                            <div className="stats-label">Components</div>
                        </div>
                        <div className="stats-item">
                            <div className="stats-value">100k+</div>
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

const HomePage: React.FC = () => {
    return (
        <LandingLayout
            headerNavItems={mainNavItems}
            footerNavItems={footerNavItems}
        >
            <Box className="space-y-16 sm:space-y-20">
                <Hero />
                <Features />
                <AboutUs {...aboutUsData} />
                <ContactUs
                    id="contact"
                    title="Contact Us"
                    description="We'd love to hear from you. Reach out to us through the following channels."
                    email="support@example.com"
                    phone="+1-800-555-1234"
                    address="456 Elm Street, Example City, Country"
                />
            </Box>
        </LandingLayout>
    );
};

export default HomePage;