import NavigationLink from "./navigation-link";
import {NavItem} from "../navigation";
interface NavigationMenuProps {
    navMenuItems: NavItem[];
    orientation?: 'vertical' | 'horizontal'; // Add orientation prop to define menu layout
}
const NavigationMenu: React.FC<NavigationMenuProps> = ({ navMenuItems, orientation = 'horizontal' }) => {
    return (
        <ul className={`navigation-menu ${orientation === 'vertical' ? 'vertical-menu' : 'horizontal-menu'}`}>
                {navMenuItems.map((item, index) => (
                    <NavigationLink key={index} link={item.link} label={item.label} />
                ))}
        </ul>
    );
};

export default NavigationMenu;