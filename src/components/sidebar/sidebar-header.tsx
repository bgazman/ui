import React from 'react';

interface SidebarHeaderProps {
    children: React.ReactNode;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ children }) => {
    return <div className="sidebar-header">{children}</div>;
};

export default SidebarHeader;