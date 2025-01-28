import React from "react";
import Navigation from "./navigation.tsx";
import Box from "@components/box.tsx"; // Utility component for layout and styling
import ThemeSwitcher from "@components/theme-switcher.tsx";

type MenuItemType = {
    label: string;
    href: string;
};

type LogoType = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

export interface HeaderProps {
    className?: string;
    style?: React.CSSProperties;
    logo?: string | LogoType;
    menuItems: MenuItemType[];
    brandName?: string;
    position?: "fixed" | "sticky" | "relative";
}

const Header: React.FC<HeaderProps> = ({
                                           logo,
                                           menuItems,
                                           brandName,
                                           className,
                                           style,
                                           position = "sticky",
                                       }) => {
    const getPositionClass = () =>
        ({
            fixed: "fixed top-0 left-0 right-0",
            sticky: "sticky top-0",
            relative: "relative",
        }[position]);

    const renderLogo = () => {
        if (!logo) return null;
        if (typeof logo === "string") {
            return <span className="text-xl font-bold">{logo}</span>;
        }
        return (
            <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto object-contain"
            />
        );
    };

    return (
        <Box
            as="header"
            className={`w-full bg-white shadow-sm z-50 ${getPositionClass()} ${className || ""}`}
            style={style}
        >
            <Box className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
                <Box className="flex justify-between items-center h-16">
                    {/* Left: Logo and Brand */}
                    <Box className="flex items-center">
                        {renderLogo()}
                        {brandName && (
                            <span className="text-xl font-semibold text-gray-900">
                                {brandName}
                            </span>
                        )}
                    </Box>

                    {/* Center: Navigation */}
                    <Box className="flex-1">
                        <Navigation
                            className="flex justify-center items-center space-x-6"
                            navItems={menuItems.map((item) => ({
                                label: item.label,
                                link: item.href,
                            }))}
                            orientation="horizontal"
                        />
                    </Box>

                    {/* Right: Theme Switcher and Actions */}
                    <Box>
                        <Box className="flex items-center space-x-4">
                            {/* Theme Switcher */}
                            <ThemeSwitcher />

                            {/* Sign In and Sign Up */}
                            <a
                                href="#"
                                className="text-gray-800 hover:text-gray-900 font-medium"
                            >
                                Sign In
                            </a>
                            <a
                                href="#"
                                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Sign Up
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
