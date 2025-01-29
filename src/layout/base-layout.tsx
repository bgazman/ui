import React from 'react';
import Header from '@components/header';
import type { HeaderProps } from '@components/header';
import Footer, { FooterProps } from '@components/footer';
import Sidebar, { SidebarProps } from '@components/sidebar/sidebar.tsx';
import Main from '@components/main';
import Grid from '@components/grid';
import { useLayout } from '@layout/context/layout-context';

export interface BaseLayoutConfig {
    header: {
        height: string;
        position: 'sticky' | 'relative';
    };
    main: {
        maxWidth?: string;
        padding?: string;
    };
    footer: {
        height: string;
        position: 'sticky' | 'relative';
    };
    sidebar?: {
        width: string;
        position: 'sticky' | 'relative';
    };
}

export interface BaseLayoutProps {
    headerData: HeaderProps;
    footerData: FooterProps;
    sidebarMenuItems?: SidebarProps['sideBarMenuItems'];
    children: React.ReactNode;
    layoutConfig: BaseLayoutConfig;
    layoutType: string;
    gridTemplate?: {
        areas: string;
        rows: string;
        columns: string;
    };
    sidebarClassName?: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
                                                   headerData,
                                                   footerData,
                                                   sidebarMenuItems,
                                                   children,
                                                   layoutConfig,
                                                   layoutType,
                                                   gridTemplate = {
                                                       areas: '"header" "main" "footer"',
                                                       rows: `${layoutConfig.header.height} 1fr ${layoutConfig.footer.height}`,
                                                       columns: '1fr'
                                                   },
                                                   sidebarClassName,
                                               }) => {
    const { layout, setLayout } = useLayout();

    React.useEffect(() => {
        setLayout(layoutType);
    }, [setLayout, layoutType]);

    return (
        <Grid
            className="w-full min-h-screen theme-container"
            style={{
                gridTemplateAreas: gridTemplate.areas,
                gridTemplateRows: gridTemplate.rows,
                gridTemplateColumns: gridTemplate.columns,
            }}
            data-layout={layout}
        >
            <Header
                className="[grid-area:header]"
                style={{ position: layoutConfig.header.position }}
                {...headerData}
            />
            {sidebarMenuItems && (
                <Sidebar
                    className={`[grid-area:sidebar] ${sidebarClassName || ''}`}
                    sideBarMenuItems={sidebarMenuItems}
                    position={layoutConfig.sidebar?.position || 'sticky'}
                />
            )}
            <Main className="[grid-area:main] w-full">
                <div
                    className={`w-full ${layoutConfig.main.padding || 'px-0'}`}
                    style={{ maxWidth: layoutConfig.main.maxWidth, margin: '0' }}
                >
                    {children}
                </div>
            </Main>
            <Footer
                className="[grid-area:footer]"
                style={{ position: layoutConfig.footer.position }}
                {...footerData}
            />
        </Grid>
    );
};

export default BaseLayout;