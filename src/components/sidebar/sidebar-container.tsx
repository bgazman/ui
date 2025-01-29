import React from 'react';

import Box from '@components/box';
import { NavItem } from '@components/navigation';

import SidebarContent from "@components/sidebar/sidebar-content.tsx";
import {useSidebar} from "@components/sidebar/sidebar-context.tsx";

export type SidebarContainerProps = {
    className?: string;
    style?: React.CSSProperties;
    sideBarMenuItems: { label: string; items: NavItem[] }[];
    position?: 'fixed' | 'sticky' | 'relative';
};

export const SidebarContainer: React.FC<Omit<SidebarContainerProps, 'sideBarMenuItems'>> = ({
                                                                                                className,
                                                                                                style,
                                                                                                position = 'sticky',
                                                                                            }) => {
    const { sideBarMenuItems } = useSidebar();

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
            <Box className="p-4 space-y-2">
                {sideBarMenuItems.map((section, sectionIndex) => (
                    <SidebarContent
                        key={sectionIndex}
                        section={section}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default SidebarContainer;