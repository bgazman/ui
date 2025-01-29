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
                { label: "Box", href: "#box-component" },
                { label: "Grid", href: "#grid-component" },
                { label: "Button", href: "#button-component" },
                { label: "Card", href: "#card-component" },
                { label: "Text Area", href: "#text-area-component" },
                { label: "Input Field", href: "#input-field" },
                { label: "Form", href: "#form" },
                { label: "Section", href: "#section-component" },
                { label: "Sidebar", href: "#sidebar" },
                { label: "Header", href: "#header" },
                { label: "Main", href: "#main" },
                { label: "Footer", href: "#footer" },

            ]
        }
    ]
};