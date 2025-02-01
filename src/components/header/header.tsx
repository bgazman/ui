import React, { useState } from "react";
import { Menu, X, LucideIcon } from "lucide-react";
import Box from "@components/box";
import HeaderLogo from "@components/header/header-logo";
import HeaderActions from "@components/header/header-actions";
import HorizontalNavigation from "@components/navigation/horizontal-navigation";
import { NavItem } from "@components/navigation/navigation";

export interface HeaderProps {
    className?: string;
    logo?: string | {
        src: string;
        alt: string;
        width?: number;
        height?: number;
        icon?: LucideIcon;
    };
    headerNavItems: NavItem[];
    brandName?: string;
    position?: "fixed" | "sticky" | "relative";
}

const Header: React.FC<HeaderProps> = ({
                                           logo,
                                           headerNavItems,
                                           brandName,
                                           className = "",
                                           position = "sticky",
                                       }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <Box as="header" className={`header-container ${position} ${className}`}>
            <Box className="header-inner">
                <HeaderLogo logo={logo} brandName={brandName} />
                <button
                    className="header-mobile-menu-button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Navigation Menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className="header-desktop-nav">
                    <HorizontalNavigation
                        navItems={headerNavItems}
                        bgColor="var(--header-bg-color)"
                        textColor="var(--header-text-color)"
                    />
                </div>
                <div className="header-actions">
                    <HeaderActions />
                </div>
            </Box>
            {mobileMenuOpen && (
                <Box className="header-mobile-menu">
                    <HorizontalNavigation
                        navItems={headerNavItems}
                        bgColor="var(--header-bg-color)"
                        textColor="var(--header-text-color)"
                    />
                    <HeaderActions mobile />
                </Box>
            )}
        </Box>
    );
};

export default Header;
