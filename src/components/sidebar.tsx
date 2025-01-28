import React from 'react';
import Navigation, { NavItem } from "@components/navigation.tsx";

export type SidebarProps = {
    className?: string;
    sideBarMenuItems: NavItem[];
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