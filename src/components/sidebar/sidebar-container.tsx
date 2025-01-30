import React from 'react';
import Box from '@components/box';
import SidebarContent from '@components/sidebar/sidebar-content';
import { NavItem } from '@components/navigation/navigation';

export type SidebarContainerProps = {
    className?: string;
    style?: React.CSSProperties;
    sideBarMenuItems: NavItem[];
    position?: 'fixed' | 'sticky' | 'relative';
    header?: React.ReactNode;
    footer?: React.ReactNode;
    renderItem?: (item: NavItem, isActive: boolean) => React.ReactNode;
};

const SidebarContainer: React.FC<SidebarContainerProps> = ({
    className,
    style,
    sideBarMenuItems,
    position = 'sticky',
    header,
    footer,
    renderItem,
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
            }}
            className={`w-64 h-screen border-r ${getPositionClass()} ${className || ''}`}
        >
            {header && <div className="sidebar-header">{header}</div>}
            <Box className="p-4 space-y-2">
                <SidebarContent sideBarMenuItems={sideBarMenuItems} renderItem={renderItem} />
            </Box>
            {footer && <div className="sidebar-footer">{footer}</div>}
        </Box>
    );
};

export default SidebarContainer;