import React from 'react';
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
    fixed: 'sidebar--fixed left-0',
    sticky: 'sidebar--sticky',
    relative: 'sidebar--relative',
};

const Sidebar: React.FC<SidebarProps> = ({
                                             className,
                                             style,
                                             sidebarData,
                                             position = 'fixed',
                                             isOpen = true,
                                             header,
                                             footer,
                                         }) => {
    const classes = [
        'sidebar',
        'transform transition-transform duration-300 ease-in-out',
        positionClassMap[position],
        isOpen ? 'translate-x-0' : '-translate-x-full',
        className,
    ].filter(Boolean);

    return (
        <Box as="aside" style={style} className={`${classes.join(' ')} w-64 h-screen bg-[var(--sidebar-bg-color)]`}>
            {header && <div className="sidebar__header">{header}</div>}
            <div className="sidebar__body">
                <VerticalNavigation navItems={sidebarData} variant="expanded" />
            </div>
            {footer && <div className="sidebar__footer">{footer}</div>}
        </Box>
    );
};

export default Sidebar;
