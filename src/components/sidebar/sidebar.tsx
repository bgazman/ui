// sidebar.tsx
import React from 'react';
import Navigation, {NavItem} from "../navigation/navigation.tsx";

interface SidebarProps {
  navItems: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => {
  return (
    <aside className="sidebar bg-gray-100 w-64 p-4 shadow-md">
      {/* Navigation Component */}
        <Navigation navItems={navItems} orientation="vertical"/>
    </aside>
  );
};

export default Sidebar;