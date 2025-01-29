import React from "react";

import Header, { HeaderProps } from "@components/header/header.tsx";
import Footer from "@components/footer/footer.tsx";
import Sidebar from "@components/sidebar/sidebar.tsx";

interface SidebarLeftLayoutProps {
    children: React.ReactNode;
    header: HeaderProps;
    contact: string;
    note: string;
    bgColor?: string;
    textColor?: string;
}

const SidebarLeftLayout: React.FC<SidebarLeftLayoutProps> = ({ children, header, contact, note}) => {
    return (
        <div className="layout-container sidebar-left" >
            {/* Shared Header */}
            <Header {...header}  />

            {/* Sidebar */}
            <Sidebar sideBarMenuItems={header.menuItems.map(item => ({ label: item.label, link: item.href }))} />

            {/* Main Content */}
            <main className="main">
                {children}
            </main>

            {/* Shared Footer */}
            <Footer contact={contact} note={note}  />
        </div>
    );
};

export default SidebarLeftLayout;