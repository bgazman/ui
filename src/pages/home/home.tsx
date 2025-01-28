import React from 'react';
import { footerMockData } from './data/footer-data';
import { mockHeaderData } from './data/header-data';
import { aboutUsData } from './data/about-us-data';
import LandingLayout from '@layout/landing-layout/landing-layout';
import FeaturesSection from './features-section';
import AboutUs from '@components/about-us';
import ContactUs from '@components/contact-us';

const HomePage: React.FC = () => {
const layoutConfig = {
    header: {
        height: '5rem',
        position: 'sticky',
    },
    main: {
        maxWidth: '90%', // Set the maxWidth to 1600px
        padding: 'px-6', // Adjust padding as needed
    },
    footer: {
        height: '4rem',
        position: 'relative',
    },
};

    return (
        <LandingLayout
            headerData={mockHeaderData}
            footerData={footerMockData}
            layoutConfig={layoutConfig}
        >
<div
    className="space-y-16 sm:space-y-20"
    style={{ maxWidth: layoutConfig.main.maxWidth, margin: '0 auto' }}
>
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
</div>
        </LandingLayout>
    );
};

export default HomePage;