import React from 'react';
import SidebarContainer from '@components/sidebar-container.tsx';
import { NavItem } from '@components/navigation.tsx';

export type SidebarProps = {
    className?: string;
    style?: React.CSSProperties;
    sideBarMenuItems: NavItem[];
    position?: 'fixed' | 'sticky' | 'relative';
};

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