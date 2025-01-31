// horizontal-navigation.tsx
import React from "react";
import Box from "@components/box";
import HorizontalNavItem from "./horizontal-nav-item";
import { NavigationProps, NavigationVariant } from "./navigation";

interface HorizontalNavigationProps extends NavigationProps {
    bgColor?: string;
    textColor?: string;
    variant?: NavigationVariant;
}

const HorizontalNavigation: React.FC<HorizontalNavigationProps> = ({ navItems, className, variant = 'default', renderItem, bgColor, textColor }) => {
    const containerClass = `${className || ''} ${variant === 'default' ? 'default-class' : ''}`;

    return (
        <Box as="nav" className={containerClass} style={{ display: 'flex', flexDirection: 'row', gap: 'var(--spacing-lg)', backgroundColor: bgColor, color: textColor }}>
            {navItems.map((item, index) => (
                <HorizontalNavItem key={index} item={item} variant={variant} renderItem={renderItem} />
            ))}
        </Box>
    );
};

export default HorizontalNavigation;