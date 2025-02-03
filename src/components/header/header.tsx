import React from 'react';
import Box from '@components/box';
import HorizontalNavigation from '@components/navigation/horizontal-navigation';
import ThemeSwitcher from '@components/theme-switcher';
import Button from '@components/button/button';
import { Menu, X } from 'lucide-react';
import { NavItem } from '@components/navigation/navigation';

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
    position = 'sticky',
    className = '',
    headerNavItems,
    showSidebarToggle = false,
    isSidebarOpen = false,
    onToggleSidebar,
    style
}) => {
    return (
        <Box as="header" className={`${position} ${className}`} style={style}>
            <Box className="header-inner">
                <div className="flex items-center space-x-3">
                    {showSidebarToggle && (
                        <Button onClick={onToggleSidebar} className="header-hamburger-button">
                            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    )}
                    <span className="font-bold text-xl">MyBrand</span>
                </div>

                <HorizontalNavigation navItems={headerNavItems} />

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