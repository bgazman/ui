import { NavItem } from "@components/navigation.tsx";

export const mockFooterData: {
    footerNavItems: NavItem[];
    copyright: string;
    socialLinks: {
        twitter?: string;
        linkedin?: string;
        facebook?: string;
    };
} = {
    footerNavItems: [
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs" },
        { label: "Dashboard", href: "/dashboard" },
        { label: "Features", href: "#features" },
        { label: "About Us", href: "#about-us" },
        { label: "Contact", href: "#contact" }
    ],
    copyright: '© 2023 YourBrandName. All rights reserved.',
    socialLinks: {
        twitter: 'https://twitter.com/yourbrand',
        linkedin: 'https://linkedin.com/company/yourbrand',
        facebook: 'https://facebook.com/yourbrand'
    }
};