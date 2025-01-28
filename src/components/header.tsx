import React from "react";
import Navigation from "./navigation.tsx";
import Box from "@components/box.tsx";
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
            className={`w-full shadow-sm z-50 ${getPositionClass()} ${className || ""}`}
            style={{
                backgroundColor: `var(--header-bg-color)`,
                color: `var(--header-text-color)`,
                ...style,
            }}
        >
            <Box className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
                <Box className="flex justify-between items-center h-16">
                    <Box className="flex items-center">
                        {renderLogo()}
                        {brandName && (
                            <span className="text-xl font-semibold">
                                {brandName}
                            </span>
                        )}
                    </Box>
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
                    <Box>
                        <Box className="flex items-center space-x-4">
                            <ThemeSwitcher />
                            <a
                                href="#"
                                className="font-medium"
                            >
                                Sign In
                            </a>
                            <a
                                href="#"
                                className="inline-block px-4 py-2 rounded"
                                style={{
                                    backgroundColor: `var(--button-bg-color)`,
                                    color: `var(--button-text-color)`,
                                }}
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