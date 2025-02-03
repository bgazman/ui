import React, { useState } from 'react';
import Header, { HeaderProps } from '@components/header/header';
import Sidebar, { SidebarProps } from '@components/sidebar/sidebar';
import Footer, { FooterProps } from '@components/footer/footer';
import Main from '@components/main/main';
import './dashboard-layout.css';

interface DashboardLayoutProps {
    headerData: HeaderProps;
    sidebarData: SidebarProps['sidebarData'];
    footerData?: FooterProps;
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
                                                             headerData,
                                                             sidebarData,
                                                             footerData,
                                                             children,
                                                         }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="dashboard-layout">
            {/* Sticky Header with hamburger toggler */}
            <Header
                {...headerData}
                showSidebarToggle={true}
                isSidebarOpen={isSidebarOpen}
                onToggleSidebar={handleToggleSidebar}
                className="dashboard-layout__header"
            />

            {/* Overlay Sidebar, toggles in/out */}
            <Sidebar
                sidebarData={sidebarData}
                className={`dashboard-layout__sidebar ${isSidebarOpen ? 'open' : ''}`}
            />

            {/* Main content */}
            <Main className="dashboard-layout__main">
                {children}
            </Main>

            {/* Optional footer */}
            {footerData && (
                <Footer {...footerData} className="dashboard-layout__footer" />
            )}
        </div>
    );
};

export default DashboardLayout;
