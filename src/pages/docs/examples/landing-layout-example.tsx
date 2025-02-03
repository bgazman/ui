import React from 'react';
import LandingLayout from '@layout/landing-layout/landing-layout.tsx';
import Box from '@components/box';

const layoutConfig = {
    header: {
        height: '4rem',
        position: 'sticky' as const,
    },
    main: {
        maxWidth: '90%',
        padding: 'px-6',
        minHeight: 'calc(100vh - 8rem)',
    },
    footer: {
        height: '4rem',
        position: 'relative' as const,
    },
};

const headerData = {
    logo: 'https://via.placeholder.com/150',
    headerNavItems: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#contact', label: 'Contact' },
    ],
};

const footerData = {
    text: '© 2023 Your Company',
    menuItems: [
        { href: '#privacy', label: 'Privacy Policy' },
        { href: '#terms', label: 'Terms of Service' },
    ],
};

const LandingLayoutExample: React.FC = () => (
    <LandingLayout
        headerData={headerData}
        footerData={footerData}
        layoutConfig={layoutConfig}
    >
        <Box className="landing-content">
            <h1>Welcome to the Landing Page</h1>
            <p>This is some dummy content for the landing layout.</p>
            <p>Here is some more dummy content to fill the page.</p>
            <p>Feel free to add more content as needed.</p>
        </Box>
    </LandingLayout>
);

export default LandingLayoutExample;