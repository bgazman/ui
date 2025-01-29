import React from 'react';
import SidebarContainer from './sidebar-container.tsx';
import sidebarItem from "@components/sidebar/sidebar-item.tsx";

export interface SidebarProps {
    className?: string;
    style?: React.CSSProperties;
    sideBarMenuItems: Array<typeof sidebarItem>;
    position?: 'fixed' | 'sticky' | 'relative';
}

const Sidebar: React.FC<SidebarProps> = ({
    className,
    style,
    sideBarMenuItems,
    position = 'sticky',
}) => {
    return (
        <SidebarContainer
            className={className}
            style={style}
            sideBarMenuItems={sideBarMenuItems}
            position={position}
        />
    );
};

export default Sidebar;