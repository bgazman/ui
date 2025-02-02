import { NavItem } from '@components/navigation/navigation.tsx';

export const mockSidebarData: NavItem[] = [
    { label: "Dashboard", href: "/" },
    {
        label: "Components",
        children: [
            { label: "Button", href: "/components/button/button.tsx" },
            { label: "Card", href: "/components/card/card.tsx" },
            { label: "Footer", href: "/components/footer/footer.tsx" },
            { label: "Form", href: "/components/form/form.tsx" },
            {
                label: "Grid",
                children: [
                    { label: "Dynamic Grid", href: "/components/grid/dynamic-grid" },
                    { label: "Flexible Grid", href: "/components/grid/flexible-grid" },
                    { label: "Grid", href: "/components/grid/grid" }
                ]
            },
            { label: "Header", href: "/components/header/header" },
            { label: "Link", href: "/components/link/link" },
            { label: "Main", href: "/components/main/main" },
            {
                label: "Navigation",
                children: [
                    { label: "Horizontal Navigation", href: "/components/navigation/horizontal-navigation.tsx" },
                    { label: "Vertical Navigation", href: "/components/navigation/vertical-navigation.tsx" }
                ]
            },
            { label: "Section", href: "/components/section/section.tsx" },
            { label: "Animated Section", href: "/components/animated-section/animated-section" },
            { label: "Select Menu", href: "/components/select-menu/select-menu" },
            { label: "Sidebar", href: "/components/sidebar" },
            { label: "Tab Menu", href: "/components/tab-menu/tab-menu.tsx" },
            { label: "Theme Switcher", href: "/components/theme-switcher" },
            { label: "Tree", href: "/components/tree/tree" }
        ]
    },
    {
        label: "Services",
        children: [
            {
                label: "Support",
                children: [
                    { label: "Hardware", href: "#hardware-support" },
                    { label: "Software", href: "#software-support" },
                    { label: "Network", href: "#network-support" }
                ]
            },
            {
                label: "Professional",
                children: [
                    { label: "Consulting", href: "#consulting" },
                    { label: "Training", href: "#training" },
                    { label: "Enterprise", href: "#enterprise" }
                ]
            }
        ]
    },
    { label: "Contact", href: "#contact" }
];