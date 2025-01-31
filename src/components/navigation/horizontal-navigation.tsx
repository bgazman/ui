import React from "react";
import Box from "@components/box";
import NavItemComponent from "./nav-item-component";
import { NavigationProps } from "./navigation";

interface HorizontalNavigationProps extends NavigationProps {
    bgColor?: string;
    textColor?: string;
}

const HorizontalNavigation: React.FC<HorizontalNavigationProps> = ({ navItems, className, variant = 'default', renderItem, bgColor, textColor }) => {
    const containerClass = `${className || ''} ${variant === 'compact' ? 'compact-class' : ''}`;

    return (
        <Box as="nav" className={containerClass} style={{ display: 'flex', flexDirection: 'row', gap: 'var(--spacing-lg)', backgroundColor: bgColor, color: textColor }}>
            {navItems.map((item, index) => (
                <NavItemComponent key={index} item={item} variant={variant} renderItem={renderItem} orientation="horizontal" />
            ))}
        </Box>
    );
};

export default HorizontalNavigation;