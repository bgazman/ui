import { NavItem } from '@components/navigation/navigation.tsx';
import {CircleArrowDownIcon} from "lucide-react";

export const mockHeaderData: { headerNavItems: NavItem[]; brandName: string; logo: { src: string; alt: string; width?: number; height?: number } } = {
    brandName: "Your Brand",
    logo: {
        alt: "Your Logo",
        icon: CircleArrowDownIcon
    },
    headerNavItems: [
        { label: "Home", href: "/" },
        { label: "Hero", href: "#hero" },
        { label: "Docs", href: "/docs" },
        { label: "Dashboard", href: "/dashboard" },
        { label: "Features", href: "#features" },
        { label: "About Us", href: "#about-us" },
        { label: "Contact", href: "#contact" }
    ]
};