import React, { useState } from 'react';
import Header from '@components/header';
import Sidebar from '@components/sidebar';
import Footer from '@components/footer';
import { NavItem } from '@components/navigation.tsx';
import Main from "@components/main";

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
        <div className="flex flex-col min-h-screen bg-[var(--bg-color)]">
            <Header
                position="fixed"
                headerNavItems={headerNavItems}
                showSidebarToggle
                isSidebarOpen={isSidebarOpen}
                onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                className="w-full z-10 bg-[var(--header-bg-color)]"
            />

            <div className="flex flex-1 mt-[var(--header-height)]">
                <Sidebar
                    position="fixed"
                    sidebarData={sidebarItems}
                    isOpen={isSidebarOpen}
                    variant="primary"
                    className="h-screen"
                />

                <main className={`flex-1 min-h-screen transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
                    <Main className="flex-1 p-4 bg-[var(--bg-color)]">
                        {children}
                    </Main>
                    <Footer footerNavItems={footerNavItems} />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;