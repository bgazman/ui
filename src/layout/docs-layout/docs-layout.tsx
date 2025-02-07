import React from 'react';
import Header from '@components/header';
import Sidebar from '@components/sidebar';
import Footer from '@components/footer';
import { NavItem } from '@components/navigation.tsx';
import Main from '@components/main';

interface DocsLayoutProps {
    children: React.ReactNode;
    headerData: NavItem[];
    footerData: NavItem[];
    sidebarData: NavItem[];
    tocItems: NavItem[];
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({
                                                          children,
                                                          headerData,
                                                          footerData,
                                                          sidebarData,
                                                          tocItems
                                                      }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header
                position="fixed"
                headerNavItems={headerData}
                showSidebarToggle={false}
                isSidebarOpen={true}
            />
            <div className="flex flex-1 pt-16">
                <div className="w-64 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
                    <Sidebar
                        position="relative"
                        sidebarData={sidebarData}
                        isOpen={true}
                        className="h-full bg-[var(--sidebar-bg-color)]"
                    />
                </div>

                <Main className="flex-1 p-8 overflow-y-auto">
                    {children}
                </Main>

                <div className="w-64 h-[calc(100vh-4rem)] sticky top-16">
                    <div className="h-full overflow-y-auto [direction:rtl]">
                        <div className="[direction:ltr]">
                            <Sidebar
                                position="relative"
                                sidebarData={tocItems}
                                isOpen={true}
                                className="h-full bg-[var(--sidebar-bg-color)]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer footerNavItems={footerData} />
        </div>
    );
};

export default DocsLayout;