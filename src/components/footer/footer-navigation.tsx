import React from 'react';
import Box from '@components/box';
import HorizontalNavigation from "@components/navigation/horizontal-navigation";
import {NavItem} from "@components/navigation/navigation.tsx";



interface NavigationProps {
    footerNavItems: NavItem[];
}

const FooterNavigation: React.FC<NavigationProps> = ({ footerNavItems }) => {
    return (
        <Box className="flex justify-center md:justify-start w-full md:w-auto">
            <HorizontalNavigation
                navItems={footerNavItems.map((item) => ({
                    label: item.label,
                    href: item.href,
                }))}
            />
        </Box>
    );
};

export default FooterNavigation;
