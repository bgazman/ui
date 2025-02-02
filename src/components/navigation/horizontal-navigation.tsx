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

const HorizontalNavigation: React.FC<HorizontalNavigationProps> = ({ navItems }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <nav className="horizontal-nav">
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
