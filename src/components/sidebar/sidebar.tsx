// @components/sidebar/sidebar.tsx
import React, { useEffect } from 'react';
import Box from '@components/box';
import { NavItem } from '@components/navigation/navigation';
import VerticalNavigation from '@components/navigation/vertical-navigation';

export interface SidebarProps {
    className?: string;
    style?: React.CSSProperties;
    sidebarData: NavItem[];
    position?: 'fixed' | 'sticky' | 'relative';
    isOpen?: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

const positionClassMap: Record<'fixed' | 'sticky' | 'relative', string> = {
    fixed: 'sidebar--fixed',
    sticky: 'sidebar--sticky',
    relative: 'sidebar--relative',
};

const Sidebar: React.FC<SidebarProps> = ({
    className,
    style,
    sidebarData,
    position = 'relative',
    isOpen = true,
    header,
    footer,
}) => {
    useEffect(() => {
        // Any side effects on sidebarData change
    }, [sidebarData]);

    const classes = [
        'sidebar',
        positionClassMap[position],
        !isOpen && 'sidebar-closed',
        className,
    ].filter(Boolean);

    return (
        <Box as="aside" style={style} className={classes.join(' ')}>
            {header && <div className="sidebar__header">{header}</div>}

            <div className="sidebar__body">
                <VerticalNavigation navItems={sidebarData} variant="expanded" />
            </div>

            {footer && <div className="sidebar__footer">{footer}</div>}
        </Box>
    );
};

export default Sidebar;