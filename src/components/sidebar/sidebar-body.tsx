import React, { useEffect } from "react";
import { NavItem } from "@components/navigation/navigation";
import Box from "@components/box";
import VerticalNavigation from "@components/navigation/vertical-navigation";

export interface SidebarBodyProps {
    sidebarData: NavItem[];
    className?: string;
}

const SidebarBody: React.FC<SidebarBodyProps> = ({ sidebarData, className }) => {
    useEffect(() => {
        console.log('SidebarBody sidebarData:', sidebarData);
    }, [sidebarData]);

    return (
        <Box className={`flex flex-col space-y-[var(--spacing-md)] ${className}`}>
            <VerticalNavigation navItems={sidebarData} variant="expanded" />
        </Box>
    );
};

export default SidebarBody;