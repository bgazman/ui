import React, { useState } from 'react';
import Header from '@components/header';
import Sidebar from '@components/sidebar';
import Footer from '@components/footer';
import { NavItem } from '@components/navigation/navigation';
import Main from "@components/main.tsx";

interface DashboardLayoutProps {
    children: React.ReactNode;
    headerNavItems: NavItem[];
    sidebarItems: NavItem[];
    footerNavItems: NavItem[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
                                                             headerNavItems,
                                                             footerNavItems,
                                                             sidebarItems,
                                                             children
                                                         }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen">
            {/* ✅ Fixed Header: Does not move */}
            <Header
                position="fixed"
                headerNavItems={headerNavItems}
                showSidebarToggle
                isSidebarOpen={isSidebarOpen}
                onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                className="w-full transition-all"
            />
            <div className="flex">
                {/* ✅ Sidebar: Fixed width to prevent header shifting */}
                <Sidebar
                    position="fixed"
                    sidebarData={sidebarItems}
                    isOpen={isSidebarOpen}
                    className="h-screen bg-[var(--sidebar-bg-color)] w-64"
                />
                {/* ✅ Corrected Content Shifting */}
                <div className={`flex-1 flex flex-col min-h-screen transition-all ${isSidebarOpen ? 'ml-0' : '-ml-64'}`}>
                    <Main className="flex-1 p-6 mt-[var(--header-height)] bg-[var(--bg-color)]">
                        {children}
                    </Main>
                    <Footer footerNavItems={footerNavItems} />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
