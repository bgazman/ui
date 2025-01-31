import React from "react";
import Box from "@components/box";
import NavItemComponent from "./nav-item-component";
import { NavigationProps, NavItem } from "./navigation";

const VerticalNavigation: React.FC<NavigationProps> = ({ navItems, className, variant = 'default', renderItem }) => {
    const containerClass = `${className || ''} ${variant === 'compact' ? 'compact-class' : ''}`;

    return (
        <Box as="nav" className={containerClass} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {navItems.map((item: NavItem, index: number) => (
                <NavItemComponent key={index} item={item} variant={variant} renderItem={renderItem} orientation="vertical" />
            ))}
        </Box>
    );
};

export default VerticalNavigation;