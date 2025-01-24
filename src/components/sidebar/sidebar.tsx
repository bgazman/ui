// sidebar.tsx
import React from 'react';
import NavigationMenu from "../navigation/components/navigation-menu.tsx";
import {NavItem} from "../navigation/navigation.tsx";

interface SidebarProps {
  navItems: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => {
  return (
    <aside className="sidebar bg-gray-100 w-64 p-4 shadow-md">
      {/* Navigation Component */}
      <NavigationMenu navMenuItems={navItems} />
    </aside>
  );
};

export default Sidebar;