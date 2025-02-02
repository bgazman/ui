import React, { useEffect } from 'react';
import Box from '@components/box';
import { NavItem } from '@components/navigation/navigation';
import VerticalNavigation from '@components/navigation/vertical-navigation';
import '@components/sidebar/sidebar.css';

export interface SidebarProps {
    className?: string;
    style?: React.CSSProperties;
    sidebarData: NavItem[];
    position?: 'fixed' | 'sticky' | 'relative';
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
                                             className,
                                             style,
                                             sidebarData,
                                             position = 'relative',
                                             header,
                                             footer,
                                         }) => {
    useEffect(() => {
        // Any effect logic if needed
    }, [sidebarData]);

    const getPositionClass = () => {
        const positionClassMap = {
            fixed: 'sidebar--fixed',
            sticky: 'sidebar--sticky',
            relative: 'sidebar--relative',
        };
        return positionClassMap[position || 'relative'];
    };

    return (
        <Box
            as="aside"
            style={{ ...style }}
            className={`sidebar ${getPositionClass()} ${className || ''}`}
        >
            {header && <div className="sidebar__header">{header}</div>}
            <div className="sidebar__body">
                <VerticalNavigation navItems={sidebarData} variant="expanded" />
            </div>
            {footer && <div className="sidebar__footer">{footer}</div>}
        </Box>
    );
};

export default Sidebar;
