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
        <Box
            as="header"
            className={`w-full h-[var(--header-height)] shadow-sm z-50 ${position} top-0 bg-[var(--header-bg-color)] text-[var(--header-text-color)] ${className}`}
        >
            {/* Main Header Container */}
            <Box className="w-full h-[var(--header-height)] px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)] flex justify-between items-center">
                {/* Logo Section */}
                <HeaderLogo logo={logo} brandName={brandName} />

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-[var(--spacing-sm)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--button-focus-ring-color)]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Navigation Menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex">
                    <HorizontalNavigation
                        navItems={headerNavItems}
                        bgColor="var(--header-bg-color)"
                        textColor="var(--header-text-color)"
                    />
                </div>

                {/* Header Actions (Buttons, Icons, etc.) */}
                <div className="hidden lg:flex items-center space-x-[var(--spacing-md)]">
                    <HeaderActions />
                </div>
            </Box>

            {/* Mobile Navigation Menu (Dropdown) */}
            {mobileMenuOpen && (
                <Box className="lg:hidden absolute top-[var(--header-height)] left-0 w-full bg-[var(--header-bg-color)] shadow-lg p-[var(--spacing-md)]">
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
