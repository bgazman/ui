import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import LinkComponent from "@components/link/link";
import {HorizontalNavigationVariant, NavItem } from "@components/navigation/navigation";
import NavigationTreeComponent from "@components/tree/tree";

export interface HorizontalNavigationProps {
    navItems: NavItem[];
    variant?: HorizontalNavigationVariant;
    bgColor?: string;
    textColor?: string;
}


const HorizontalNavigation: React.FC<HorizontalNavigationProps> = ({ navItems }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <nav
            className="flex flex-wrap gap-[var(--spacing-md)] bg-[var(--header-bg-color)]
                 text-[var(--header-text-color)] p-[var(--spacing-md)]
                 rounded-[var(--border-radius-md)] shadow-md"
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
                        className="flex items-center gap-[var(--spacing-xs)]
                       px-[var(--spacing-md)] py-[var(--spacing-sm)]
                       hover:text-[var(--button-hover-text-color)]
                       transition-[var(--transition-duration)]"
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
                        <div
                            className="absolute left-0 top-full mt-[var(--spacing-xs)] w-48
                         bg-[var(--bg-primary)] shadow-lg rounded-[var(--border-radius-md)]
                         border border-[var(--border-color)]
                         animate-[fadeIn_var(--animation-duration-normal)_var(--animation-ease)_forwards]"
                            role="menu"
                        >
                            <NavigationTreeComponent data={item.children} />
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default HorizontalNavigation;
