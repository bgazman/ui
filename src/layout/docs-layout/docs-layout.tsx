import React from 'react';
import Header from '@components/header';
import Sidebar from '@components/sidebar';
import Footer from '@components/footer';
import { NavItem } from '@components/navigation/navigation';

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
    return (
        <div className="min-h-screen">
            <Header
                position="fixed"
                headerNavItems={headerNavItems}
                className="left-64 w-[calc(100%-16rem)] transition-all"
            />
            <div className="flex">
                <div className="fixed inset-y-0 left-0 transform translate-x-0 transition-transform duration-300 ease-in-out">
                    <Sidebar
                        position="relative"
                        sidebarData={sidebarItems}
                        isOpen={true}
                        className="h-screen bg-[var(--sidebar-bg-color)]"
                    />
                </div>
                <div className="flex-1 flex flex-col min-h-screen transition-all ml-64">
                    <main className="flex-1 p-6 mt-[var(--header-height)] bg-[var(--bg-color)]">
                        {children}
                    </main>
                    <Footer footerNavItems={footerNavItems} />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;