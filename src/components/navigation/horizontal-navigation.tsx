import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import LinkComponent from "@components/link/link";
import {
    HorizontalNavigationVariant,
    NavItem,
} from "@components/navigation/navigation";
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

    const variantClassMap: Record<HorizontalNavigationVariant, string> = {
        default: "horizontal-nav--default",
        onClick: "horizontal-nav--on-click",
        onHover: "horizontal-nav--on-hover",
        expanded: "horizontal-nav--expanded",
    };

    const combinedClassName = `horizontal-nav ${
        variantClassMap[variant]
    } ${className}`.trim();

    return (
        <nav className={combinedClassName} role="menubar">
            {navItems.map((item) => (
                <div
                    key={item.label}
                    className="horizontal-nav__item"
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
