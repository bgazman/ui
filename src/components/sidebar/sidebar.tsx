import React from 'react';
import SidebarContainer from './sidebar-container';
import { NavItem } from '@components/navigation/navigation.tsx';

export interface SidebarProps {
    className?: string;
    style?: React.CSSProperties;
    sideBarMenuItems: NavItem[];
    position?: 'fixed' | 'sticky' | 'relative';
    header?: React.ReactNode;
    footer?: React.ReactNode;
    renderItem?: (item: NavItem, isActive: boolean) => React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    className,
    style,
    sideBarMenuItems,
    position = 'sticky',
    header,
    footer,
    renderItem,
}) => {
    return (
        <SidebarContainer
            className={className}
            style={style}
            sideBarMenuItems={sideBarMenuItems}
            position={position}
            header={header}
            footer={footer}
            renderItem={renderItem}
        />
    );
};

export default Sidebar;