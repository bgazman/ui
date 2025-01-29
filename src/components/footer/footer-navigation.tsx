import React from 'react';
import Box from '@components/box.tsx';
import Navigation from '@components/navigation/navigation.tsx';

type MenuItemType = {
    label: string;
    href: string;
};

interface NavigationProps {
    menuItems: MenuItemType[];
}

const FooterNavigation: React.FC<NavigationProps> = ({ menuItems }) => {
    return (
        <Box className="flex justify-center">
            <Navigation
                className="flex flex-wrap space-x-6"
                orientation="horizontal"
                navItems={menuItems.map((item) => ({
                    label: item.label,
                    link: item.href,
                }))}
            />
        </Box>
    );
};

export default FooterNavigation;