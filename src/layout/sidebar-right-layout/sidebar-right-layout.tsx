import React from 'react';
import Header, { HeaderProps } from "@components/header.tsx";
import Footer from "@components/footer.tsx";
import Sidebar from "@components/sidebar.tsx";

interface SidebarRightLayoutProps {
    children: React.ReactNode;
    header: HeaderProps;
    contact: string;
    note: string;
    bgColor?: string;
    textColor?: string;
}

const SidebarRightLayout: React.FC<SidebarRightLayoutProps> = ({ children, header, contact, note, bgColor = "var(--layout-bg)", textColor = "var(--layout-text-color)" }) => {
    return (
        <div className="layout-container sidebar-right" style={{ backgroundColor: bgColor, color: textColor }}>
            {/* Shared Header */}
            <Header {...header}  />

            {/* Main Content */}
            <main className="main">
                {children}
            </main>

            {/* Sidebar */}
            <Sidebar sideBarMenuItems={header.menuItems.map(item => ({ label: item.label, link: item.href }))} />

            {/* Shared Footer */}
            <Footer contact={contact} note={note} />
        </div>
    );
};

export default SidebarRightLayout;