import React from 'react';
import Header from '@components/header';
import Sidebar from '@components/sidebar';
import Footer from '@components/footer';
import { NavItem } from '@components/navigation/navigation';

interface DocsLayoutProps {
    children: React.ReactNode;
    headerData: NavItem[];
    footerData: NavItem[];
    sidebarData: NavItem[];
}
export const DocsLayout: React.FC<DocsLayoutProps> = ({
    children,
    headerData,
    footerData,
    sidebarData
}) => {
    return (
        <div className="flex flex-col">
            <Header
                position="fixed"
                headerNavItems={headerData}
                showSidebarToggle={false}
                isSidebarOpen={true}
            />
            <div className="flex-1 flex mt-[var(--header-height)]">
                <Sidebar
                    position="fixed"
                    sidebarData={sidebarData}
                    isOpen={true}
                    className="h-full"
                />
                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
            <Footer
                footerNavItems={footerData}
                className="ml-64"
            />
        </div>
    );
};
export default DocsLayout;