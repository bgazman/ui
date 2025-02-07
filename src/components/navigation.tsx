import React, { useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Button from "@components/button.tsx";
import List from "@components/list.tsx";

export type NavigationType = "sidebar" | "navbar" | "drawer";
export type MenuItem = {
    label: string;
    icon?: React.ReactNode;
    href?: string;
    badge?: number;
    subItems?: MenuItem[];
};

export interface NavigationProps {
    type?: NavigationType;
    items: MenuItem[];
    collapsible?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const Navigation: React.FC<NavigationProps> = ({
    type = "sidebar",
    items,
    collapsible = false,
    className = "",
    style,
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

    const toggleDropdown = (label: string) => {
        setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleMobileMenu = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <nav
            style={style}
            className={clsx(
                "transition-all duration-300",
                type === "sidebar" && "h-full w-64 p-4",
                type === "navbar" && "w-full flex items-center justify-between px-6 py-4",
                type === "drawer" &&
                `fixed top-0 left-0 h-full w-64 shadow-lg transform ${
                    mobileOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform`,
                className
            )}
        >
            {type === "sidebar" && collapsible && (
                <Button variant="secondary" onClick={toggleSidebar} className="mb-4">
                    {isOpen ? "Collapse" : "Expand"}
                </Button>
            )}

            {type === "navbar" && (
                <Button variant="secondary" onClick={toggleMobileMenu} className="lg:hidden">
                    <Menu size={24} />
                </Button>
            )}

            <List
                items={items}
                spacing="normal"
                direction={type === "sidebar" ? "vertical" : "horizontal"}
                onItemClick={(label) => {
                    const item = items.find(i => i.label === label);
                    if (item && item.subItems) {
                        toggleDropdown(label);
                    }
                }}
                className={clsx(isOpen || type !== "sidebar" ? "block" : "hidden", className)}
            />

            {type === "drawer" && mobileOpen && (
                <Button
                    variant="secondary"
                    onClick={toggleMobileMenu}
                    className="absolute top-4 right-4"
                >
                    <X size={24} />
                </Button>
            )}
        </nav>
    );
};

export default Navigation;