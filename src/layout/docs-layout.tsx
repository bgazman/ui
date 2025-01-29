// layouts/docs-layout.tsx
import React from 'react';
import BaseLayout, { BaseLayoutProps } from './base-layout';
import { SidebarProvider } from '@components/sidebar/sidebar-context';

type DocsLayoutProps = Omit<BaseLayoutProps, 'layoutType' | 'gridTemplate'>;

const DocsLayout: React.FC<DocsLayoutProps> = (props) => {
    const gridTemplate = {
        areas: '"header header" "sidebar main" "footer footer"',
        rows: `${props.layoutConfig.header.height} 1fr ${props.layoutConfig.footer.height}`,
        columns: `${props.layoutConfig.sidebar?.width || '16rem'} 1fr`
    };

    return (
        <SidebarProvider sideBarMenuItems={props.sidebarMenuItems || []}>
            <BaseLayout
                {...props}
                layoutType="docs"
                gridTemplate={gridTemplate}
                sidebarMenuItems={props.sidebarMenuItems}
                sidebarClassName="border-theme"
            />
        </SidebarProvider>
    );
};

export default DocsLayout;