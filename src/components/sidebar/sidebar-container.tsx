import React, { useEffect } from 'react';
import Box from '@components/box';
import SidebarHeader from './sidebar-header';
import SidebarFooter from './sidebar-footer';
import SidebarBody from './sidebar-body';
import { NavItem } from '@components/navigation/navigation';

export type SidebarContainerProps = {
    className?: string;
    style?: React.CSSProperties;
    sidebarData: NavItem[];
    position?: 'fixed' | 'sticky' | 'relative';
    header?: React.ReactNode;
    footer?: React.ReactNode;
};

const SidebarContainer: React.FC<SidebarContainerProps> = ({
                                                               className,
                                                               style,
                                                               sidebarData,
                                                               position = 'sticky',
                                                               header,
                                                               footer,
                                                           }) => {
    useEffect(() => {
        console.log('SidebarContainer sidebarData:', sidebarData);
    }, [sidebarData]);

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
                // Keep any user-supplied style
                ...style,
            }}
            className={`
        ${getPositionClass()}
        w-64 
        h-screen
        border-r 
        border-sidebar-border
        bg-sidebar
        overflow-y-auto
        p-0
        scrollbar-custom
        ${className || ''}
      `}
        >
            {header && <SidebarHeader>{header}</SidebarHeader>}
            <SidebarBody sidebarData={sidebarData} />
            {footer && <SidebarFooter>{footer}</SidebarFooter>}
        </Box>
    );
};

export default SidebarContainer;