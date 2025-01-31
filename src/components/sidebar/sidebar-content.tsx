import React from "react";
import { NavItem } from "@components/navigation/navigation.tsx";
import SidebarItem from "@components/sidebar/sidebar-item";
import Box from "@components/box";

interface SidebarContentProps {
    sideBarMenuItems: { label: string; items: NavItem[] }[];
    className?: string;
    renderItem?: (item: NavItem, isActive: boolean) => React.ReactNode;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
    sideBarMenuItems,
    className = "",
    renderItem,
}) => {
    return (
        <Box className={`flex flex-col space-y-[var(--spacing-md)] ${className}`}>
            {sideBarMenuItems.map((item, index) => (
                <Box key={index}>
                    <h3 className="font-semibold text-[var(--text-primary)]">{item.label}</h3>
                    <Box as="ul" className="space-y-[var(--spacing-sm)]">
                        {item.items.map((subItem, subIndex) => (
                            renderItem ? renderItem(subItem, false) : (
                                <SidebarItem
                                    key={subIndex}
                                    navItem={subItem}
                                />
                            )
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default SidebarContent;