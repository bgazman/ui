import React from 'react';
import NavigationMenu from "./components/navigation-menu.tsx";

export interface NavigationProps {
    orientation?: 'horizontal' | 'vertical';
    navItems: NavItem[];
}
export type NavItem = {
    label: string;
    link: string;
};

const Navigation: React.FC<NavigationProps> = ({navItems,orientation}) => {
    return (
        <nav className="navigation">
            <div className="navigation-container">
                <NavigationMenu navMenuItems={navItems} orientation={orientation}/>
            </div>
        </nav>
    );
};

export default Navigation;