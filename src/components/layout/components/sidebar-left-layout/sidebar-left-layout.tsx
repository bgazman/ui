import React from 'react';
import Header, { HeaderProps } from "../../../../components/header/header";
import Footer from "../../../../components/footer/footer";
import Sidebar from "../../../../components/sidebar/sidebar";

interface SidebarLeftLayoutProps {
    children: React.ReactNode;
    header: HeaderProps;
    contact: string;
    note: string;
    bgColor?: string;
    textColor?: string;
}

const SidebarLeftLayout: React.FC<SidebarLeftLayoutProps> = ({ children, header, contact, note, bgColor = "var(--layout-bg)", textColor = "var(--layout-text-color)" }) => {
    return (
        <div className="app-layout sidebar-left" style={{ backgroundColor: bgColor, color: textColor }}>
            {/* Shared Header */}
            <Header {...header} />

            {/* Sidebar */}
            <Sidebar navItems={header.menuItems.map(item => ({ label: item.label, link: item.href }))} />

            {/* Main Content */}
            <main className="main">
                {children}
            </main>

            {/* Shared Footer */}
            <Footer contact={contact} note={note} />
        </div>
    );
};

export default SidebarLeftLayout;