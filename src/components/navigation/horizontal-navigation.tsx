import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "@components/link.tsx";
import { HorizontalNavigationVariant, NavItem } from "@components/navigation.tsx";
import "./horizontal-navigation.css";

const variantClassMap: Record<HorizontalNavigationVariant, string> = {
    default: "nav-default",
    underline: "nav-underline",
    minimal: "nav-minimal",
};

export interface HorizontalNavigationProps {
    navItems: NavItem[];
    variant?: HorizontalNavigationVariant;
    className?: string;
}

const HorizontalNavigation: React.FC<HorizontalNavigationProps> = ({
                                                                       navItems,
                                                                       variant = "default",
                                                                       className = "",
                                                                   }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <nav
            className={`horizontal-nav ${variantClassMap[variant]} ${className}`.trim()}
            role="menubar"
        >
            {navItems.map((item) => (
                <div
                    key={item.label}
                    className="nav-item"
                    onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                >
                    <Link
                        href={item.href || "#"}
                        className="nav-link"
                        role="menuitem"
                        aria-haspopup={!!item.children}
                        aria-expanded={openDropdown === item.label}
                    >
                        {item.label}
                        {item.children && <ChevronDown className="ml-1" size={16} />}
                    </Link>

                    {item.children && openDropdown === item.label && (
                        <div className="nav-dropdown">
                            {item.children.map((child) => (
                                <Link key={child.label} href={child.href || "#"} className="nav-dropdown-item">
                                    {child.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default HorizontalNavigation;
