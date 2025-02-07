import React from "react";
import clsx from "clsx";
import Button from "@components/button.tsx";
import { Menu } from "lucide-react";

export interface HeaderProps {
    variant?: "fixed" | "sticky" | "relative";
    className?: string;
    style?: React.CSSProperties;
    showSidebarToggle?: boolean;
    onToggleSidebar?: () => void;
    children: React.ReactNode;
}

const variantClasses = {
    fixed: "fixed top-0",
    sticky: "sticky top-0",
    relative: "relative",
};

const Header: React.FC<HeaderProps> = ({
    variant = "fixed",
    className = "",
    style,
    showSidebarToggle = false,
    onToggleSidebar,
    children,
}) => {
    return (
        <header
            style={style}
            className={clsx(
                variantClasses[variant],
                "h-header w-full z-10", // Ensure the header is full width and on top
                className
            )}
        >
            <div className={clsx("flex items-center justify-between p-4 h-full bg-primary", className)}>
                {showSidebarToggle && (
                    <Button onClick={onToggleSidebar} className="primary">
                        <Menu size={24} />
                    </Button>
                )}
                <div className="flex-1 flex justify-center">
                    {children}
                </div>
            </div>
        </header>
    );
};

export default Header;