import React from 'react';
import { footerMockData } from './data/footer-data';
import { mockHeaderData } from './data/header-data';
import { aboutUsData } from './data/about-us-data';
import LandingLayout from '@layout/landing-layout.tsx';
import FeaturesSection from './features-section';
import AboutUs from '@components/about-us/about-us.tsx';
import ContactUs from '@components/contact-us/contact-us.tsx';
import Box from '@components/box';

const HomePage: React.FC = () => {
    const layoutConfig = {
        header: {
            height: '5rem',
            position: 'sticky' as const,
        },
        main: {
            maxWidth: '90%',
            padding: 'px-6',
        },
        footer: {
            height: '4rem',
            position: 'relative' as const,
        },
    };

    return (
        <LandingLayout
            headerData={mockHeaderData}
            footerData={footerMockData}
            layoutConfig={layoutConfig}
        >
            <Box
                className="space-y-16 sm:space-y-20"
                style={{ maxWidth: layoutConfig.main.maxWidth, margin: '0 auto' }}
            >
                <Box id="features" className="text-center">
                    <FeaturesSection />
                </Box>
                <Box id="about-us" className="text-center">
                    <AboutUs {...aboutUsData} />
                </Box>
                <Box id="contact" className="text-center">
                    <ContactUs
                        title="Contact Us"
                        description="We’d love to hear from you. Reach out to us through the following channels."
                        email="support@example.com"
                        phone="+1-800-555-1234"
                        address="456 Elm Street, Example City, Country"
                    />
                </Box>
            </Box>
        </LandingLayout>
    );
};

export default HomePage;