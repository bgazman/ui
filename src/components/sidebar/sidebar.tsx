import React from 'react';
import SidebarContainer from './sidebar-container';
import { NavItem } from '@components/navigation/navigation';

export interface SidebarProps {
    className?: string;
    style?: React.CSSProperties;
    sidebarData: NavItem[];
    position?: 'fixed' | 'sticky' | 'relative';
    header?: React.ReactNode;
    footer?: React.ReactNode;
    renderItem?: (item: NavItem, isActive: boolean) => React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
                                             className,
                                             style,
                                             sidebarData,
                                             position ,
                                             header,
                                             footer,
                                         }) => {
    return (
        <SidebarContainer
            className={className}
            style={style}
            sidebarData={sidebarData}
            position={position}
            header={header}
            footer={footer}
        />
    );
};

export default Sidebar;
