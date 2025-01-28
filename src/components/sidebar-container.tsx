import React from 'react';
import Box from '@components/box.tsx';
import SidebarSection from '@components/sidebar-section.tsx';
import { NavItem } from '@components/navigation.tsx';

export type SidebarContainerProps = {
    className?: string;
    style?: React.CSSProperties;
    sideBarMenuItems: NavItem[];
    position?: 'fixed' | 'sticky' | 'relative';
};

const SidebarContainer: React.FC<SidebarContainerProps> = ({
    className,
    style,
    sideBarMenuItems,
    position = 'sticky',
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
            className={`sidebar ${getPositionClass()} ${className || ''}`}
            style={{
                backgroundColor: `var(--sidebar-bg-color)`,
                color: `var(--sidebar-text-color)`,
                borderColor: `var(--border-color)`,
                borderStyle: 'solid',
                borderWidth: '1px',
                ...style,
            }}
        >
            {sideBarMenuItems.map((section, index) => (
                <SidebarSection key={index} section={section} />
            ))}
        </Box>
    );
};

export default SidebarContainer;