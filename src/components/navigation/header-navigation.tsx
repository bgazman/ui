import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import LinkComponent from "@components/link/link"; // Your custom link component
import NavigationTreeComponent from "@components/navigation/navigation-tree"; // For nested items
import { NavItem } from "./navigation";

export interface HeaderNavigationProps {
    navItems: NavItem[];
    className?: string;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
                                                               navItems,
                                                               className = "",
                                                           }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <header className={`header-nav ${className}`}>
            <nav className="header-nav__container" role="menubar">
                {navItems.map((item) => (
                    <div
                        key={item.label}
                        className="header-nav__item group"
                        onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <LinkComponent
                            href={item.href || "#"}
                            className="header-nav__link"
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

                        {/* Dropdown Menu */}
                        {item.children && openDropdown === item.label && (
                            <div className="header-nav__dropdown" role="menu">
                                <NavigationTreeComponent data={item.children} />
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </header>
    );
};

export default HeaderNavigation;
