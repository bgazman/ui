import React from 'react';
import Header, { HeaderProps } from "@components/header/header.tsx";
import Sidebar, {SidebarProps} from "@components/sidebar/sidebar.tsx";
import Main from "@components/main/main.tsx";

interface DashboardLayoutProps {
    children: React.ReactNode;
    header: HeaderProps;
    sidebar: SidebarProps;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, header}) => {
    return (
        <div className="layout-container dashboard">
            {/* Shared Header */}
            <Header {...header} />

            {/* Sidebar */}
            <Sidebar sideBarMenuItems={[]} />

            <Main children={children}/>
        </div>
    );
};

export default DashboardLayout;