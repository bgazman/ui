import React from 'react';
import Box from '@components/box';
import SidebarHeader from './sidebar-header';
import SidebarFooter from './sidebar-footer';
import SidebarBody from './sidebar-body';
import { NavItem } from '@components/navigation/navigation';

export type SidebarContainerProps = {
    className?: string;
    style?: React.CSSProperties;
    sideBarMenuItems: NavItem[];
    position?: 'fixed' | 'sticky' | 'relative';
    header?: React.ReactNode;
    footer?: React.ReactNode;
};

const SidebarContainer: React.FC<SidebarContainerProps> = ({
    className,
    style,
    sideBarMenuItems,
    position = 'sticky',
    header,
    footer,
}) => {
    const getPositionClass = () =>
        ({
            fixed: 'fixed top-0 left-0',
            sticky: 'sticky top-0',
            relative: 'relative',
        }[position]);

    return (
        <Box
            as="aside"
            style={{
                ...style,
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--sidebar-border-color)',
                overflowY: style?.overflowY || 'auto',
                '--scrollbar-track': 'var(--bg-primary)',
                '--scrollbar-thumb': 'var(--text-tertiary)',
                scrollbarWidth: 'thin',
                scrollbarColor: 'var(--text-tertiary) var(--bg-primary)',
                padding: '0', // Remove or adjust padding here
            }}
            className={`w-64 h-screen border-r ${getPositionClass()} ${className || ''}`}
        >
            {header && <SidebarHeader>{header}</SidebarHeader>}
            <SidebarBody sideBarMenuItems={sideBarMenuItems} />
            {footer && <SidebarFooter>{footer}</SidebarFooter>}
        </Box>
    );
};

export default SidebarContainer;