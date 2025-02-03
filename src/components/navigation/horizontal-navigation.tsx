import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import LinkComponent from "@components/link/link";
import { HorizontalNavigationVariant, NavItem } from "@components/navigation/navigation";
import NavigationTreeComponent from "@components/navigation/navigation-tree";

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

    // Map each variant to a specific class or set of classes
    const variantClassMap: Record<HorizontalNavigationVariant, string> = {
        default: "horizontal-nav--default",
        underline: "horizontal-nav--underline",
        minimal: "horizontal-nav--minimal",
    };

    return (
        <nav
            className={`horizontal-nav ${variantClassMap[variant]} ${className}`}
            role="menubar"
        >
            {navItems.map((item) => (
                <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                >
                    {/* Top-Level Navigation Item */}
                    <LinkComponent
                        href={item.href || "#"}
                        className="horizontal-nav__link"
                        onKeyDown={(e) => {
                            if ((e.key === "Enter" || e.key === " ") && item.children) {
                                setOpenDropdown(openDropdown === item.label ? null : item.label);
                            }
                        }}
                        role="menuitem"
                        aria-haspopup={!!item.children}
                        aria-expanded={openDropdown === item.label}
                    >
                        {item.label} {item.children && <ChevronDown size={16} />}
                    </LinkComponent>

                    {/* Dropdown Menu using the Tree */}
                    {item.children && openDropdown === item.label && (
                        <div className="horizontal-nav__dropdown" role="menu">
                            <NavigationTreeComponent data={item.children} />
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default HorizontalNavigation;
