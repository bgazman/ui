import React from 'react';
import NavigationLink from './navigation-link';
import {NavItem} from "./navigation.tsx";


interface NavigationMenuProps {
    navMenuItems: NavItem[];
}
const NavigationMenu: React.FC<NavigationMenuProps> = ({navMenuItems}) => {
    return (
        <ul className="navigation-menu">
            <div>
            {navMenuItems.map((item, index) => (


                <NavigationLink key={index} link={item.link} label={item.label}/>
            ))}
            </div>
        </ul>
    );
};

export default NavigationMenu;