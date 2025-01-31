import React from 'react';
import VerticalNavigation from '@components/navigation/vertical-navigation';
import { NavItem } from '@components/navigation/navigation';
import Box from '@components/box';

const verticalNavItems: NavItem[] = [
    {
        label: "Getting Started",
        items: [
            { label: "Introduction", href: "#introduction" },
            { label: "Installation", href: "#installation" },
            { label: "Quick Start", href: "#quick-start" }
        ]
    },
    {
        label: "Components",
        items: [
            { label: "Layout", href: "#layout" },
            { label: "Theme", href: "#data-display" },
            { label: "Navigation", href: "#navigation" },
            { label: "Forms", href: "#forms" }
        ]
    },
    {
        label: "API Reference",
        items: [
            { label: "Hooks", href: "#hooks" },
            { label: "Utils", href: "#utils" },
            { label: "Types", href: "#types" }
        ]
    },
    {
        label: "UI Components",
        items: [
            { label: "Box", href: "#box-component" },
            { label: "Grid", href: "#grid-component" },
            { label: "Button", href: "#button-component" },
            { label: "Tab Menu", href: "#tab-menu-component" },
            { label: "Card", href: "#card-component" },
            { label: "Text Area", href: "#text-area-component" },
            { label: "Input Field", href: "#input-field-component" },
            { label: "Form", href: "#form-component" },
            { label: "Section", href: "#section-component" },
            { label: "Navigation", href: "#navigation-component" },
            { label: "Header", href: "#header" },
            { label: "Main", href: "#main" },
            { label: "Footer", href: "#footer" }
        ]
    }
];

const VerticalNavigationExample: React.FC = () => {
    return (
        <Box className="vertical-navigation-example" style={{ display: 'flex', flexDirection: 'row', gap: 'var(--spacing-lg)' }}>
            <VerticalNavigation navItems={verticalNavItems} variant="default" />
            <VerticalNavigation navItems={verticalNavItems} variant="compact" />
            <VerticalNavigation navItems={verticalNavItems} variant="accordion" />
        </Box>
    );
};

export default VerticalNavigationExample;