import React from 'react';
import BaseLayout, { BaseLayoutProps } from './base-layout';
import { SidebarProvider } from '@components/sidebar/sidebar-context';
import { NavigationProvider } from '@components/navigation/navigation-context';
import { NavItem } from '@components/navigation/navigation.tsx';

type SidebarMenuItem = {
    label: string;
    items: NavItem[];
};

type DocsLayoutProps = Omit<BaseLayoutProps, 'layoutType' | 'gridTemplate'> & {
    sidebarMenuItems: SidebarMenuItem[];
};

const DocsLayout: React.FC<DocsLayoutProps> = (props) => {
    const gridTemplate = {
        areas: '"header header" "sidebar main" "footer footer"',
        rows: `${props.layoutConfig.header.height} 1fr ${props.layoutConfig.footer.height}`,
        columns: `${props.layoutConfig.sidebar?.width || 'var(--sidebar-width)'} 1fr`
    };

    return (
        <SidebarProvider sideBarMenuItems={props.sidebarMenuItems}>
            <NavigationProvider>
                <BaseLayout
                    {...props}
                    layoutType="docs"
                    gridTemplate={gridTemplate}
                    sidebarMenuItems={props.sidebarMenuItems}
                    sidebarClassName="border-[var(--border-color)]"
                />
            </NavigationProvider>
        </SidebarProvider>
    );
};

export default DocsLayout;