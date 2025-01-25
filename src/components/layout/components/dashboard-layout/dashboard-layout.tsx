import React from 'react';
import Header, { HeaderProps } from "../../../../components/header/header";
import Footer from "../../../../components/footer/footer";
import Sidebar from "../../../../components/sidebar/sidebar";
import Main from "../../../main/main.tsx";

interface DashboardLayoutProps {
    children: React.ReactNode;
    header: HeaderProps;
    contact: string;
    note: string;
    bgColor?: string;
    textColor?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, header, contact, note, bgColor = "var(--layout-bg)", textColor = "var(--layout-text-color)" }) => {
    return (
        <div className="layout-container dashboard" style={{ backgroundColor: bgColor, color: textColor }}>
            {/* Shared Header */}
            <Header {...header} />

            {/* Sidebar */}
            <Sidebar navItems={header.menuItems.map(item => ({ label: item.label, link: item.href }))} />

            <Main children={children}/>

            {/* Shared Footer */}
            <Footer contact={contact} note={note} />
        </div>
    );
};

export default DashboardLayout;