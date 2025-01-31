import { CircleArrowDownIcon } from 'lucide-react';

export const mockHeaderData = {
    brandName: "Your Brand",
    logo: {
        alt: "Your Logo",
        icon: CircleArrowDownIcon
    },
    headerNavItems: [
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs" },
        { label: "Features", href: "#features" },
        { label: "About Us", href: "#about-us" },
        { label: "Contact", href: "#contact" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Testimonials", href: "#testimonials" }
    ]
};