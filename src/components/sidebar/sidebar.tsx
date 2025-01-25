import React from 'react';
import Navigation, { NavItem } from "@components/navigation/navigation";

export type SidebarProps = {
    sideBarMenuItems: NavItem[];
    bgColor?: string;
    textColor?: string;
    padding?: string;
};

const Sidebar: React.FC<SidebarProps> = ({
                                             sideBarMenuItems,
}) => {
    return (
        <aside className="sidebar" >
            <Navigation navItems={sideBarMenuItems} orientation="vertical" />
        </aside>
    );
};

export default Sidebar;