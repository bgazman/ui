import React, { useEffect, useRef } from 'react';
import { mockHeaderData } from './data/header-data';
import LandingLayout from '@layout/landing-layout';
import ContactUs from '@components/contact-us/contact-us';
import Box from '@components/box';
import CardExample from "@pages/docs/examples/card-example";
import TabMenuExample from "@pages/docs/examples/tab-menu-example";
import { footerMockData } from "@pages/demo/data/footer-data";
import AnimatedSection from '@components/animated-section/animated-section'
import './demo.css';

// Types
interface LayoutConfig {
    header: {
        height: string;
        position: 'sticky';
    };
    main: {
        maxWidth: string;
        padding: string;
    };
    footer: {
        height: string;
        position: 'relative';
    };
}

interface SectionProps {
    id: string;
    children: React.ReactNode;
}


const DemoPage: React.FC = () => {
    const layoutConfig: LayoutConfig = {
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
        // Header scroll animation
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
                    <TabMenuExample />

                    <CardExample />

                    <ContactUs
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

export default DemoPage;