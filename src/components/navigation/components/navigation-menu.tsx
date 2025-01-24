import NavigationLink from "./navigation-link.tsx";
import {NavItem} from "../navigation.tsx";
interface NavigationMenuProps {
    navMenuItems: NavItem[];
    orientation?: 'vertical' | 'horizontal'; // Add orientation prop to define menu layout
}
const NavigationMenu: React.FC<NavigationMenuProps> = ({ navMenuItems, orientation = 'horizontal' }) => {
    return (
        <ul className={`navigation-menu ${orientation === 'vertical' ? 'vertical-menu' : 'horizontal-menu'}`}>
            <div>
                {navMenuItems.map((item, index) => (
                    <NavigationLink key={index} link={item.link} label={item.label} />
                ))}
            </div>
        </ul>
    );
};

export default NavigationMenu;