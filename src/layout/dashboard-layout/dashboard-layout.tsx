import React, { useEffect } from 'react';
import Header from '@components/header.tsx';
import type { HeaderProps } from '@components/header.tsx';
import Sidebar, { SidebarProps } from '@components/sidebar.tsx';
import Main, { MainProps } from '@components/main.tsx';
import { useLayout } from '@layout/context/layout-context';

interface LayoutConfig {
    header: {
        height: string;
        position: 'sticky' | 'relative';
    };
    sidebar: {
        width: string;
        position: 'sticky' | 'relative';
    };
    main: {
        maxWidth: string;
        padding: string;
    };
}

interface DashboardLayoutProps {
    mainData: Omit<MainProps, 'children'>;
    headerData: HeaderProps;
    sidebarData: SidebarProps;
    children: React.ReactNode;
    layoutConfig: LayoutConfig;
}

const defaultHeaderItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Settings', href: '/settings' },
];

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
                                                             mainData,
                                                             headerData: {
                                                                 logo = '/dashboard-logo.png',
                                                                 menuItems = defaultHeaderItems,
                                                                 brandName = 'Dashboard',
                                                                 ...headerRest
                                                             },
                                                             sidebarData,
                                                             children,
                                                             layoutConfig
                                                         }) => {
    const { layout, setLayout } = useLayout();

    useEffect(() => {
        setLayout('dashboard');
    }, [setLayout]);

    return (
        <div className="grid w-full min-h-screen"
             style={{
                 gridTemplateAreas: '"header header" "sidebar main"',
                 gridTemplateColumns: `${layoutConfig.sidebar.width} 1fr`,
                 gridTemplateRows: `${layoutConfig.header.height} 1fr`
             }}
             data-layout={layout}>
            <Header
                className="[grid-area:header]"
                logo={logo}
                menuItems={menuItems}
                brandName={brandName}
                {...headerRest}
            />
            <Sidebar
                className="[grid-area:sidebar]"
                {...sidebarData}
            />
            <Main
                className="[grid-area:main]"
                {...mainData}
            >
                {children}
            </Main>
        </div>
    );
};

export default DashboardLayout;