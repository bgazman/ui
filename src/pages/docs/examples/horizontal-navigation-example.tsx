import React from 'react';
import HorizontalNavigation from '@components/navigation/horizontal-navigation';
import { NavItem } from '@components/navigation/navigation';
import Box from '@components/box';

const horizontalNavItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Docs", href: "#docs" },
    {
        label: "Products",
        items: [
            { label: "Product 1", href: "#product-1" },
            { label: "Product 2", href: "#product-2" },
            { label: "Product 3", href: "#product-3" }
        ]
    }
];


const HorizontalNavigationExample: React.FC = () => {
    return (
        <Box className="horizontal-navigation-example" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            <HorizontalNavigation navItems={horizontalNavItems} variant="default" />
            <HorizontalNavigation navItems={horizontalNavItems} variant="clickExpandable" />
        </Box>
    );
};

export default HorizontalNavigationExample;