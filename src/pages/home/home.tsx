import React from 'react';
import { mockFooterData } from './data/footer-data';
import { mockHeaderData } from './data/header-data';
import { aboutUsData } from './data/about-us-data';
import BaseLayout from '@layout/base-layout/base-layout';
import FeaturesSection from './features-section';
import AboutUs from '@components/about-us/about-us';
import ContactUs from '@components/contact-us/contact-us';
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
        <BaseLayout
            headerData={mockHeaderData}
            footerData={mockFooterData}
            layoutConfig={layoutConfig}
            layoutType="home"
            gridTemplate={{
                areas: '"header" "main" "footer"',
                rows: `${layoutConfig.header.height} 1fr ${layoutConfig.footer.height}`,
                columns: '1fr',
            }}
        >
            <Box className="space-y-16 sm:space-y-20" style={{ maxWidth: layoutConfig.main.maxWidth, margin: '0 auto' }}>
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
        </BaseLayout>
    );
};

export default HomePage;
