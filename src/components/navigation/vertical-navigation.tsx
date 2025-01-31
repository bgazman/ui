import React from "react";
import Box from "@components/box";
import VerticalNavItem from "@components/navigation/vertical-nav-item";
import { NavItem, NavigationVariant } from "./navigation";

interface VerticalNavigationProps {
    navItems: NavItem[];
    className?: string;
    variant?: NavigationVariant;
    bgColor?: string;
    textColor?: string;
}

const VerticalNavigation: React.FC<VerticalNavigationProps> = ({
    navItems,
    className,
    variant = "default",
    bgColor,
    textColor,
}) => {
    return (
        <Box
            as="nav"
            className={`w-[var(--sidebar-width)] shadow-lg rounded-lg ${className}`}
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            {navItems.map((item, index) => (
                <VerticalNavItem key={index} item={item} variant={variant} />
            ))}
        </Box>
    );
};

export default VerticalNavigation;