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
        {
            label: "Products",
            items: [
                { label: "Product 1", href: "#product-1" },
                { label: "Product 2", href: "#product-2" },
                { label: "Product 3", href: "#product-3" }
            ]
        },
        { label: "Docs", href: "#docs" }
    ]
};