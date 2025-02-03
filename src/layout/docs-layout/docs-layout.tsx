import React from 'react';
import Header, { HeaderProps } from '@components/header/header';
import Sidebar, { SidebarProps } from '@components/sidebar/sidebar';
import Footer, { FooterProps } from '@components/footer/footer';
import Main from '@components/main/main';

interface DocsLayoutProps {
    headerData: HeaderProps;
    sidebarData: SidebarProps['sidebarData'];
    footerData?: FooterProps;   // optional: some docs sites skip a footer
    children: React.ReactNode;
}

const DocsLayout: React.FC<DocsLayoutProps> = ({
                                                   headerData,
                                                   sidebarData,
                                                   footerData,
                                                   children,
                                               }) => {
    return (
        <div className="docs-layout">
            {/* Fixed Header at the top */}
            <Header {...headerData} className="docs-layout__header" />

            {/* Fixed Sidebar on the left */}
            <Sidebar
                sidebarData={sidebarData}
                className="docs-layout__sidebar"
            />

            {/* Main content area (on the right) */}
            <Main className="docs-layout__main">
                {children}
            </Main>

            {/* Footer, if provided */}
            {footerData && (
                <Footer {...footerData} className="docs-layout__footer" />
            )}
        </div>
    );
};

export default DocsLayout;
