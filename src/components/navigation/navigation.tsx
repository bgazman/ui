import React from 'react';
import './navigation.css';
import BrandName from "./brand-name.tsx";
import NavigationMenu from "./navigation-menu.tsx";
import GetStartedButton from "../get-started/get-started-btn.tsx";

export interface NavigationProps {
    navItems: NavItem[];
}
export type NavItem = {
    label: string;
    link: string;
};

const Navigation: React.FC<NavigationProps> = ({navItems}) => {
    return (
        <nav className="navigation">
            <div className="navigation-container">
                <BrandName name={'My Company'}/>
                <NavigationMenu navMenuItems={navItems}/>
                <GetStartedButton href="/get-started" label="Get Started"/>
            </div>
        </nav>
    );
};

export default Navigation;