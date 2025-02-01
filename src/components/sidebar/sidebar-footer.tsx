// SidebarFooter.tsx
import React from 'react';

interface SidebarFooterProps {
    children: React.ReactNode;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ children }) => {
    return <div className="sidebar-footer">{children}</div>;
};

export default SidebarFooter;
