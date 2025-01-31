import { NavItem } from '@components/navigation/navigation.tsx';

export const mockSidebarData: { sideBarMenuItems: NavItem[] } = {
    sideBarMenuItems: [
        {
            label: "Getting Started",
            items: [
                { label: "Introduction", href: "#introduction", items: [] },
                { label: "Installation", href: "#installation", items: [] },
                { label: "Quick Start", href: "#quick-start", items: [] }
            ]
        },
        {
            label: "Components",
            items: [
                { label: "Layout", href: "#layout", items: [] },
                { label: "Theme", href: "#data-display", items: [] },
                { label: "Navigation", href: "#navigation", items: [] },
                { label: "Forms", href: "#forms", items: [] }
            ]
        },
        {
            label: "API Reference",
            items: [
                { label: "Hooks", href: "#hooks", items: [] },
                { label: "Utils", href: "#utils", items: [] },
                { label: "Types", href: "#types", items: [] }
            ]
        },
        {
            label: "UI Components",
            items: [
                { label: "Box", href: "#box-component", items: [] },
                { label: "Grid", href: "#grid-component", items: [] },
                { label: "Button", href: "#button-component", items: [] },
                { label: "Tab Menu", href: "#tab-menu-component", items: [] },
                { label: "Card", href: "#card-component", items: [] },
                { label: "Text Area", href: "#text-area-component", items: [] },
                { label: "Input Field", href: "#input-field-component", items: [] },
                { label: "Form", href: "#form-component", items: [] },
                { label: "Section", href: "#section-component", items: [] },
                { label: "Navigation", href: "#navigation-component", items: [] },
                { label: "Header", href: "#header", items: [] },
                { label: "Main", href: "#main", items: [] },
                { label: "Footer", href: "#footer", items: [] }
            ]
        }
    ]
};