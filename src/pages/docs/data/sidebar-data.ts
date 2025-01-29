import { NavItem } from '@components/navigation/navigation.tsx';

export const mockSidebarData: { sideBarMenuItems: NavItem[] } = {
    sideBarMenuItems: [
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
                { label: "Box", href: "#box" },
                { label: "Button", href: "#button" },
                { label: "Card", href: "#card" },
                { label: "Component Preview", href: "#component-preview" },
                { label: "Contact Us", href: "#contact-us" },
                { label: "Dynamic Grid", href: "#dynamic-grid" },
                { label: "Flexible Grid", href: "#flexible-grid" },
                { label: "Floating Button", href: "#floating-button" },
                { label: "Floating Menu", href: "#floating-menu" },
                { label: "Footer", href: "#footer" },
                { label: "Form", href: "#form" },
                { label: "Grid", href: "#grid" },
                { label: "Header", href: "#header" },
                { label: "Input Field", href: "#input-field" },
                { label: "Link Button", href: "#link-button" },
                { label: "Main", href: "#main" },
                { label: "Navigation Link", href: "#navigation-link" },
                { label: "Navigation Menu", href: "#navigation-menu" },
                { label: "Section Container", href: "#section-container" },
                { label: "Section Content", href: "#section-content" },
                { label: "Section Header", href: "#section-header" },
                { label: "Section", href: "#section" },
                { label: "Sidebar Container", href: "#sidebar-container" },
                { label: "Sidebar Item", href: "#sidebar-item" },
                { label: "Sidebar Section", href: "#sidebar-section" },
                { label: "Sidebar", href: "#sidebar" },
                { label: "Submit Button", href: "#submit-button" },
                { label: "Text Area", href: "#text-area" },
                { label: "Theme Switcher", href: "#theme-switcher" }
            ]
        }
    ]
};