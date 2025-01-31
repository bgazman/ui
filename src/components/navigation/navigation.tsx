import React from "react";
import HorizontalNavigation from "./horizontal-navigation";
import VerticalNavigation from "./vertical-navigation";
export interface NavItem {
    label: string;
    href?: string;
    items?: NavItem[];
}

// navigation.ts
export type NavigationVariant = 'default' | 'compact' | 'accordion' | 'hoverExpandable' | 'clickExpandable' | 'expanded';

// navigation.tsx
export interface NavigationProps {
    navItems: NavItem[];
    className?: string;
    variant?: NavigationVariant;
    renderItem?: (item: NavItem, isParent: boolean) => React.ReactNode;
    orientation?: 'horizontal' | 'vertical'; // Add this line
}

const Navigation: React.FC<NavigationProps> = (props) => {
    const { orientation = 'horizontal' } = props;

    if (orientation === 'vertical') {
        return <VerticalNavigation {...props} />;
    }

    return <HorizontalNavigation {...props} />;
};

export default Navigation;