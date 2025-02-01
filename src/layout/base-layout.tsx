import React from 'react';
import Header from '@components/header/header';
import type { HeaderProps } from '@components/header/header';
import Footer, { FooterProps } from '@components/footer/footer';
import Sidebar from '@components/sidebar/sidebar';
import type { SidebarProps } from '@components/sidebar/sidebar';
import Main from '@components/main/main';
import Grid from '@components/grid/grid';
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
    sidebarMenuItems?: SidebarProps['sidebarData'];
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
                                                   children,
                                                   layoutConfig,
                                                   layoutType,
                                                   gridTemplate = {
                                                       areas: '"header" "main" "footer"',
                                                       rows: `${layoutConfig.header.height} 1fr ${layoutConfig.footer.height}`,
                                                       columns: '1fr'
                                                   },
                                                   sidebarMenuItems = [], // Ensure sidebarMenuItems is always defined
                                                   sidebarClassName
                                               }) => {
    console.log('Footer data in BaseLayout:', footerData); // Add this line to log footerData

    const { layout, setLayout } = useLayout();

    React.useEffect(() => {
        setLayout(layoutType);
    }, [setLayout, layoutType]);

    const enhancedFooterData: FooterProps = {
        ...footerData,
        className: `[grid-area:footer] ${footerData.className || ''}`.trim(),
        style: {
            position: layoutConfig.footer.position,
            ...(footerData.style || {})
        }
    };

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

            {layoutConfig.sidebar && (
                <Sidebar
                    className={`[grid-area:sidebar] ${sidebarClassName || ''}`}
                    style={{ position: layoutConfig.sidebar.position }}
                    sidebarData={sidebarMenuItems}
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

            <Footer {...enhancedFooterData} />
        </Grid>
    );
};

export default BaseLayout;