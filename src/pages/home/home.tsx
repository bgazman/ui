import React from 'react';
import { mockFooterData } from './data/footer-data';
import { mockHeaderData } from './data/header-data';
import { aboutUsData } from './data/about-us-data';
import LandingLayout from '@layout/landing-layout/landing-layout'; // use the new layout
import FeaturesSection from './features-section';
import AboutUs from '@components/about-us/about-us';
import ContactUs from '@components/contact-us/contact-us';
import Box from '@components/box';

const HomePage: React.FC = () => {
    return (
        <LandingLayout
            headerData={mockHeaderData}
            footerData={mockFooterData}
        >
            {/* The children go here */}
            <Box className="space-y-16 sm:space-y-20" style={{ maxWidth: '90%', margin: '0 auto' }}>
                <FeaturesSection />
                <AboutUs {...aboutUsData} />
                <ContactUs
                    id="contact"
                    title="Contact Us"
                    description="We’d love to hear from you. Reach out to us through the following channels."
                    email="support@example.com"
                    phone="+1-800-555-1234"
                    address="456 Elm Street, Example City, Country"
                />
            </Box>
        </LandingLayout>
    );
};

export default HomePage;