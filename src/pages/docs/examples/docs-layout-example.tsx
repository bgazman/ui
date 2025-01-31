import React from 'react';
import DocsLayout from '@layout/docs-layout';
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
    sidebar: {
        width: '16rem',
        position: 'sticky' as const,
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

const sidebarMenuItems = [
    { label: 'Home', items: [{ href: '#home', label: 'Home' }] },
    { label: 'About', items: [{ href: '#team', label: 'Team' }, { href: '#company', label: 'Company' }] },
    { label: 'Services', items: [{ href: '#services', label: 'Services' }] },
    { label: 'Contact', items: [{ href: '#contact', label: 'Contact' }] },
];

const DocsLayoutExample: React.FC = () => (
    <DocsLayout
        headerData={headerData}
        footerData={footerData}
        layoutConfig={layoutConfig}
        sidebarMenuItems={sidebarMenuItems}
    >
        <Box className="docs-content">
            <h1>Welcome to the Docs Page</h1>
            <p>This is some dummy content for the docs layout.</p>
            <p>Here is some more dummy content to fill the page.</p>
            <p>Feel free to add more content as needed.</p>
        </Box>
    </DocsLayout>
);

export default DocsLayoutExample;