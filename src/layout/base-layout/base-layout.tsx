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
                                                   sidebarMenuItems = [],
                                               }) => {
    const { layout, setLayout } = useLayout();

    React.useEffect(() => {
        setLayout(layoutType);
    }, [setLayout, layoutType]);

    const headerPositionClass =
        layoutConfig.header.position === 'sticky' ? 'header--sticky' : 'header--relative';
    const footerPositionClass =
        layoutConfig.footer.position === 'sticky' ? 'footer--sticky' : 'footer--relative';
    const sidebarPositionClass =
        layoutConfig.sidebar?.position === 'sticky' ? 'sidebar--sticky' : 'sidebar--relative';

    const enhancedFooterData: FooterProps = {
        ...footerData,
        className: `base-layout__footer ${footerPositionClass} ${footerData.className || ''}`.trim()
    };

    // Calculate the number of columns by splitting the gridTemplate.columns string.
    const numColumns = gridTemplate.columns.split(' ').length;

    // Set CSS variables for grid layout on the grid element
    const gridRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (gridRef.current) {
            gridRef.current.style.setProperty('--grid-template-areas', gridTemplate.areas);
            gridRef.current.style.setProperty('--grid-template-rows', gridTemplate.rows);
            gridRef.current.style.setProperty('--grid-template-columns', gridTemplate.columns);
        }
    }, [gridTemplate]);

    return (
        <Grid
            ref={gridRef}
            columns={numColumns}
            className={`base-layout theme-container w-full min-h-screen`}
            style={{
                gridTemplateAreas: gridTemplate.areas,
                gridTemplateRows: gridTemplate.rows,
                gridTemplateColumns: gridTemplate.columns,
            }}
            data-layout={layout}
        >
            <Header
                className={`base-layout__header ${headerPositionClass}`}
                {...headerData}
            />

            {layoutConfig.sidebar && (
                <Sidebar
                    className={`h-full base-layout__sidebar ${sidebarPositionClass} || ''}`}
                    sidebarData={sidebarMenuItems}
                />
            )}

            <Main className="base-layout__main w-full">
                <div
                    className={`main-container ${layoutConfig.main.padding || 'px-0'} ${
                        layoutConfig.main.maxWidth ? `max-w-[${layoutConfig.main.maxWidth}]` : ''
                    }`}
                >
                    {children}
                </div>
            </Main>

            <Footer {...enhancedFooterData} />
        </Grid>
    );
};

export default BaseLayout;
