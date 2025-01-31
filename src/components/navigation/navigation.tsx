import React from "react";
import HorizontalNavigation from "./horizontal-navigation";
import VerticalNavigation from "./vertical-navigation";
export interface NavItem {
    label: string;
    href?: string;
    items?: NavItem[];
}

export interface NavigationProps {
    navItems: NavItem[];
    className?: string;
    variant?: 'default' | 'compact' | 'accordion';
    renderItem?: (item: NavItem, isParent: boolean) => React.ReactNode;
    orientation?: 'horizontal' | 'vertical';
}
const Navigation: React.FC<NavigationProps> = (props) => {
    const { orientation = 'horizontal' } = props;

    if (orientation === 'vertical') {
        return <VerticalNavigation {...props} />;
    }

    return <HorizontalNavigation {...props} />;
};

export default Navigation;