import React from "react";
import Navigation, { NavItem } from "@components/navigation/navigation.tsx";

interface HeaderNavProps {
    headerNavItems: NavItem[];
    orientation?: "horizontal" | "vertical";
    className?: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({
    headerNavItems,
    orientation = "horizontal",
    className = "",
}) => {
    return (
        <Navigation
            className={`flex ${orientation === "horizontal" ? "justify-center items-center space-x-6" : "flex-col space-y-4"} ${className}`}
            navItems={headerNavItems}
            orientation={orientation}
        />
    );
};

export default HeaderNav;