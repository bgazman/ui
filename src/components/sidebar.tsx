import React from 'react';
import clsx from 'clsx';
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
    fixed: 'fixed left-0 top-0',
    sticky: 'sticky top-0',
    relative: 'relative',
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
    const classes = clsx(
        "transform transition-transform duration-300 ease-in-out bg-[var(--sidebar-bg-color)] w-64",
        positionClassMap[position],
        isOpen ? 'translate-x-0' : '-translate-x-full',
        "overflow-y-auto", // Enables scrolling
        className
    );

    return (
        <Box as="aside" style={style} className={classes}>
            {header && <div className="p-4 border-b">{header}</div>}

            {/* Scrollable Content */}
            <div className="p-4">
                <VerticalNavigation navItems={sidebarData} variant="expanded" />
            </div>

            {footer && <div className="p-4 border-t">{footer}</div>}
        </Box>
    );
};

export default Sidebar;