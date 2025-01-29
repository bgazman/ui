import React, { useState } from "react";
import Box from "@components/box";
import { Menu, X } from "lucide-react";
import HeaderLogo from "@components/header/header-logo";
import HeaderNav from "@components/header/header-nav";
import HeaderActions from "@components/header/header-actions";
import { NavItem } from "@components/navigation/navigation";

export interface HeaderContainerProps {
    className?: string;
    style?: React.CSSProperties;
    logo?: string | { src: string; alt: string; width?: number; height?: number };
    headerNavItems: NavItem[];
    brandName?: string;
    position?: "fixed" | "sticky" | "relative";
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({
    logo,
    headerNavItems,
    brandName,
    className = "",
    style,
    position = "sticky",
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <Box
            as="header"
            className={`w-full h-16 shadow-sm z-50 ${position} top-0 bg-[var(--header-bg-color)] text-[var(--header-text-color)] ${className}`}
            style={style}
        >
            <Box className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex justify-between items-center">
                <HeaderLogo logo={logo} brandName={brandName} />
                <button
                    className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--button-focus-ring-color)]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Navigation Menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className="hidden lg:flex">
                    <HeaderNav headerNavItems={headerNavItems} />
                </div>
                <div className="hidden lg:flex items-center space-x-4">
                    <HeaderActions />
                </div>
            </Box>
            {mobileMenuOpen && (
                <Box className="lg:hidden absolute top-16 left-0 w-full bg-[var(--header-bg-color)] shadow-lg p-4">
                    <HeaderNav headerNavItems={headerNavItems} orientation="vertical" />
                    <HeaderActions mobile />
                </Box>
            )}
        </Box>
    );
};

export default HeaderContainer;