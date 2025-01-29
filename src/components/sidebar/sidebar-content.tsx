import React from "react";
import { NavItem } from "@components/navigation/navigation.tsx";
import SidebarItem from "@components/sidebar/sidebar-item";

interface SidebarContentProps {
    sideBarMenuItems: { label: string; items: NavItem[] }[];
    className?: string;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
    sideBarMenuItems,
    className = "",
}) => {
    return (
        <div className={`flex flex-col space-y-4 ${className}`}>
            {sideBarMenuItems.map((item, index) => (
                <div key={index}>
                    <h3 className="font-semibold">{item.label}</h3>
                    <ul className="space-y-2">
                        {item.items.map((subItem, subIndex) => (
                            <SidebarItem
                                key={subIndex}
                                navItem={subItem}
                                className="text-blue-500"
                            />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SidebarContent;