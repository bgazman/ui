import React from "react";
import { NavItem } from "@components/navigation/navigation.tsx";
import SidebarItem from "@components/sidebar/sidebar-item";

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
        <div className={`flex flex-col space-y-4 ${className}`}>
            {sideBarMenuItems.map((item, index) => (
                <div key={index}>
                    <h3 className="font-semibold">{item.label}</h3>
                    <ul className="space-y-2">
                        {item.items.map((subItem, subIndex) => (
                            renderItem ? renderItem(subItem, false) : (
                                <SidebarItem
                                    key={subIndex}
                                    navItem={subItem}
                                />
                            )
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SidebarContent;