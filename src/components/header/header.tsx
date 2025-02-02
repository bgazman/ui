import React, { useState } from "react";
import { Menu, X, LucideIcon } from "lucide-react";
import Box from "@components/box";
import HorizontalNavigation from "@components/navigation/horizontal-navigation";
import ThemeSwitcher from "@components/theme-switcher";
import Button from "@components/button/button";
import { NavItem } from "@components/navigation/navigation";
import "@components/header/header.css"; // import our new header styles

// Internal HeaderLogo component (merged)
type LogoType = {
    src?: string;
    alt: string;
    width?: number;
    height?: number;
    icon?: LucideIcon;
};

interface HeaderLogoProps {
    logo?: string | LogoType;
    brandName?: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ logo, brandName }) => {
    return (
        <div className="flex items-center space-x-2">
            {logo &&
                (typeof logo === "string" ? (
                    <span className="text-xl font-bold">{logo}</span>
                ) : logo.icon ? (
                    <logo.icon className="h-12 w-auto" aria-label={logo.alt} />
                ) : (
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width || 48}
                        height={logo.height || 48}
                        style={{ backgroundColor: "transparent" }}
                        className="h-12 w-auto object-contain"
                    />
                ))}
            {brandName && <span className="text-xl font-semibold">{brandName}</span>}
        </div>
    );
};

// Internal HeaderActions component (merged)
interface HeaderActionsProps {
    mobile?: boolean;
}

const HeaderActions: React.FC<HeaderActionsProps> = ({ mobile = false }) => {
    return (
        <div className={`flex ${mobile ? "flex-col space-y-4 mt-4" : "items-center space-x-4"}`}>
            <ThemeSwitcher />
            <Button variant="secondary">Sign In</Button>
            <Button variant="primary">Sign Up</Button>
        </div>
    );
};

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
