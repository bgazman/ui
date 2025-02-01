// SidebarBody.tsx
import React from "react";
import { NavItem } from "@components/navigation/navigation";
import Box from "@components/box";
import VerticalNavigation from "@components/navigation/vertical-navigation";

export interface SidebarBodyProps {
    sideBarMenuItems: NavItem[];
    className?: string;
}

const SidebarBody: React.FC<SidebarBodyProps> = ({ sideBarMenuItems, className = "" }) => {
    return (
        <Box className={`flex flex-col space-y-[var(--spacing-md)] ${className}`}>
            <VerticalNavigation navItems={sideBarMenuItems} variant="expanded" />
        </Box>
    );
};

export default SidebarBody;
