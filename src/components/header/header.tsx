import React from 'react';
import Box from '@components/box';
import ThemeSwitcher from '@components/theme-switcher';
import Button from '@components/button/button';
import { Menu, X } from 'lucide-react';
import { NavItem } from '@components/navigation/navigation';
import HeaderNavigation from "@components/navigation/header-navigation";

export interface HeaderProps {
    position?: 'fixed' | 'sticky' | 'relative';
    className?: string;
    style?: React.CSSProperties;
    headerNavItems: NavItem[];
    showSidebarToggle?: boolean;
    isSidebarOpen?: boolean;
    onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({
    className = 'header',
    headerNavItems,
    showSidebarToggle = false,
    isSidebarOpen = false,
    onToggleSidebar,
}) => {
    return (
        <Box as="header" className={className}>
            <Box className="header-inner">
                <div className="flex items-center space-x-3">
                    {showSidebarToggle && (
                        <Button onClick={onToggleSidebar} className="header-hamburger-button">
                            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    )}
                    <span className="font-bold text-xl">MyBrand</span>
                </div>

                <HeaderNavigation navItems={headerNavItems} />

                <div className="flex items-center space-x-4">
                    <ThemeSwitcher />
                    <Button variant="secondary">Sign In</Button>
                    <Button variant="primary">Sign Up</Button>
                </div>
            </Box>
        </Box>
    );
};

export default Header;