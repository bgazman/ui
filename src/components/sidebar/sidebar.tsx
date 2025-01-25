import React from 'react';
import Navigation, { NavItem } from "../navigation/navigation.tsx";

export type SidebarProps = {
    sideBarMenuItems: NavItem[];
    bgColor?: string;
    textColor?: string;
    padding?: string;
};

const Sidebar: React.FC<SidebarProps> = ({
                                             sideBarMenuItems,
    bgColor = "var(--sidebar-bg)",
    textColor = "var(--sidebar-text-color)",
    padding = "var(--sidebar-padding)"
}) => {
    return (
        <aside className="sidebar" style={{ backgroundColor: bgColor, color: textColor, padding: padding }}>
            <Navigation navItems={sideBarMenuItems} orientation="vertical" />
        </aside>
    );
};

export default Sidebar;