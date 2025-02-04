import React from "react";
import ThemeSwitcher from "@components/theme-switcher.tsx";
import Button from "@components/button.tsx";
import { Menu, X } from "lucide-react";
import { NavItem } from "@components/navigation/navigation.tsx";
import HorizontalNavigation from "@components/navigation/horizontal-navigation.tsx";

export interface HeaderProps {
    position?: "fixed" | "sticky" | "relative";
    className?: string;
    style?: React.CSSProperties;
    headerNavItems: NavItem[];
    showSidebarToggle?: boolean;
    isSidebarOpen?: boolean;
    onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({
                                           position = "fixed",
                                           className = "",
                                           style,
                                           headerNavItems,
                                           showSidebarToggle = false,
                                           isSidebarOpen = false,
                                           onToggleSidebar,
                                       }) => {
    const positionClasses = {
        fixed: "fixed top-0 left-0 right-0 z-50",
        sticky: "sticky top-0 z-50",
        relative: "relative",
    };

    return (
        <header
            style={style}
            className={`${positionClasses[position]} h-[var(--header-height)] w-full bg-[var(--header-bg-color)] text-[var(--header-text-color)] ${className}`}
        >
            <div className="flex items-center justify-between p-[var(--spacing-md)] h-full">
                <div className="flex items-center space-x-3">
                    {showSidebarToggle && (
                        <Button
                            onClick={onToggleSidebar}
                            className="inline-flex items-center bg-transparent border-none cursor-pointer"
                        >
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
            </div>
        </header>
    );
};

export default Header;
