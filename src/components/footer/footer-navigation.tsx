// FooterNavigation.tsx
import React from 'react';
import Box from '@components/box.tsx';

import HorizontalNavigation from "@components/navigation/horizontal-navigation.tsx";

type MenuItemType = {
    label: string;
    href: string;
};

interface NavigationProps {
    menuItems: MenuItemType[];
}

const FooterNavigation: React.FC<NavigationProps> = ({ menuItems }) => {
    return (
        <Box className="flex justify-center md:justify-start w-full md:w-auto">
            <HorizontalNavigation
                navItems={menuItems.map((item) => ({
                    label: item.label,
                    href: item.href,
                }))}
            />
        </Box>
    );
};

export default FooterNavigation;
