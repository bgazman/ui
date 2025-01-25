import React from 'react';
import NavigationMenu from "./components/navigation-menu.tsx";

export interface NavigationProps {
    orientation?: 'horizontal' | 'vertical';
    navItems: NavItem[];
    children?: React.ReactNode; // Add this line to allow children
}

export type NavItem = {
    label: string;
    link: string;
};

const Navigation: React.FC<NavigationProps> = ({ navItems, orientation, children }) => {
    return (
        <div className="navigation">
            {children}
            <div className="navigation-container">
                <NavigationMenu navMenuItems={navItems} orientation={orientation} />
            </div>
        </div>
    );
};

export default Navigation;