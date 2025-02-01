import React from "react";
import HorizontalNavigation from "./horizontal-navigation";
import VerticalNavigation from "./vertical-navigation";

export interface NavItem {
    label: string;
    href?: string;
    children?: NavItem[];
}

export type HorizontalNavigationVariant = 'default' | 'onClick' | 'onHover' | 'expanded';
export type VerticalNavigationVariant = 'default' | 'expanded' | 'compact';

export interface HorizontalNavigationProps {
    navItems: NavItem[];
    className?: string;
    variant?: HorizontalNavigationVariant;
    renderItem?: (item: NavItem, isParent: boolean) => React.ReactNode;
    orientation: 'horizontal';
}

export interface VerticalNavigationProps {
    navItems: NavItem[];
    className?: string;
    variant?: VerticalNavigationVariant;
    renderItem?: (item: NavItem, isParent: boolean) => React.ReactNode;
    orientation: 'vertical';
}

type NavigationProps = HorizontalNavigationProps | VerticalNavigationProps;

const Navigation: React.FC<NavigationProps> = (props) => {
    if (props.orientation === 'vertical') {
        return <VerticalNavigation {...props} />;
    }

    return <HorizontalNavigation {...props} />;
};

export default Navigation;