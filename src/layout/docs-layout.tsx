import React from 'react';
import BaseLayout, { BaseLayoutProps } from './base-layout';

type DocsLayoutProps = Omit<BaseLayoutProps, 'layoutType' | 'gridTemplate'>;

const DocsLayout: React.FC<DocsLayoutProps> = (props) => {
    const gridTemplate = {
        areas: '"header header" "sidebar main" "footer footer"',
        rows: `${props.layoutConfig.header.height} 1fr ${props.layoutConfig.footer.height}`,
        columns: `${props.layoutConfig.sidebar?.width || '16rem'} 1fr` // Use sidebar width from layoutConfig
    };

    return (
        <BaseLayout
            {...props}
            layoutType="docs"
            gridTemplate={gridTemplate}
            sidebarMenuItems={props.sidebarMenuItems}
            sidebarClassName="border-theme" // Pass className prop
        />
    );
};

export default DocsLayout;