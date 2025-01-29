import { Home } from 'lucide-react';

export const mockHeaderData = {
    brandName: "Your Brand",
    logo: {
        alt: "Your Logo",
        icon: Home
    },
    headerNavItems: [
        { label: "Home", href: "/" },
        { label: "Features", href: "#features" },
        { label: "About Us", href: "#about-us" },
        { label: "Contact", href: "#contact" }
    ]
};