import React, { useEffect } from 'react';
import { mockHeaderData } from './data/header-data';
import LandingLayout from '@layout/landing-layout';
import ContactUs from '@components/contact-us/contact-us';
import Box from '@components/box';
import CardExample from "@pages/docs/examples/card-example";
import TabMenuExample from "@pages/docs/examples/tab-menu-example";
import { footerMockData } from "@pages/demo/data/footer-data";
import AnimatedSection from '@components/animated-section/animated-section';
import './demo.css';

const DemoPage: React.FC = () => {
    const layoutConfig = {
        header: {
            height: '5rem',
            position: 'sticky',
        },
        main: {
            maxWidth: '90%',
            padding: 'px-6',
        },
        footer: {
            height: '4rem',
            position: 'relative',
        },
    };

    useEffect(() => {
        let lastScroll = 0;
        const header = document.querySelector('header');

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (!header) return;

            if (currentScroll > lastScroll && currentScroll > 100) {
                header.classList.add('-translate-y-full');
            } else {
                header.classList.remove('-translate-y-full');
            }
            lastScroll = currentScroll;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <LandingLayout
            headerData={mockHeaderData}
            footerData={footerMockData}
            layoutConfig={layoutConfig}
        >
            <Box
                className="space-y-16 sm:space-y-20 mx-auto"
                style={{ maxWidth: layoutConfig.main.maxWidth }}
            >
                <AnimatedSection id="features">
                    <TabMenuExample />
                    <div className="h-64 bg-gray-200 my-4">Additional Content 1</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 2</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 3</div>
                </AnimatedSection>

                <AnimatedSection id="about-us">
                    <CardExample />
                    <div className="h-64 bg-gray-200 my-4">Additional Content 1</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 2</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 3</div>
                </AnimatedSection>

                <AnimatedSection id="contact">
                    <ContactUs
                        title="Contact Us"
                        description="We'd love to hear from you. Reach out to us through the following channels."
                        email="support@example.com"
                        phone="+1-800-555-1234"
                        address="456 Elm Street, Example City, Country"
                    />
                    <div className="h-64 bg-gray-200 my-4">Additional Content 1</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 2</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 3</div>
                </AnimatedSection>

                <AnimatedSection id="services">
                    <div>Our Services</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 1</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 2</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 3</div>
                </AnimatedSection>

                <AnimatedSection id="portfolio">
                    <div>Our Portfolio</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 1</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 2</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 3</div>
                </AnimatedSection>

                <AnimatedSection id="testimonials">
                    <div>Testimonials</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 1</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 2</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 3</div>
                </AnimatedSection>

                {/* Additional sections for volume */}
                <AnimatedSection id="extra-1">
                    <CardExample />
                    <div className="h-64 bg-gray-200 my-4">Additional Content 1</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 2</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 3</div>
                </AnimatedSection>

                <AnimatedSection id="extra-2">
                    <CardExample />
                    <div className="h-64 bg-gray-200 my-4">Additional Content 1</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 2</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 3</div>
                </AnimatedSection>

                <AnimatedSection id="extra-3">
                    <CardExample />
                    <div className="h-64 bg-gray-200 my-4">Additional Content 1</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 2</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 3</div>
                </AnimatedSection>

                <AnimatedSection id="extra-4">
                    <CardExample />
                    <div className="h-64 bg-gray-200 my-4">Additional Content 1</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 2</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 3</div>
                </AnimatedSection>

                <AnimatedSection id="extra-5">
                    <CardExample />
                    <div className="h-64 bg-gray-200 my-4">Additional Content 1</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 2</div>
                    <div className="h-64 bg-gray-200 my-4">Additional Content 3</div>
                </AnimatedSection>
            </Box>
        </LandingLayout>
    );
};

export default DemoPage;