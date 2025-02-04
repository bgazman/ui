import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import LinkComponent from "@components/link.tsx";
import { HorizontalNavigationVariant, NavItem } from "@components/navigation/navigation";

const variantClassMap: Record<HorizontalNavigationVariant, string> = {
    default: "",
    underline: "hover:border-b-2 hover:border-[var(--button-hover-bg-color)]",
    minimal: "px-1 py-1 text-gray-600 rounded transition-colors hover:bg-gray-100 hover:text-gray-800",
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
        <nav className={`flex gap-4 items-center ${variantClassMap[variant]} ${className}`.trim()} role="menubar">
            {navItems.map((item) => (
                <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                >
                    <LinkComponent
                        href={item.href || "#"}
                        className="px-4 py-2 inline-flex items-center justify-center cursor-pointer"
                        role="menuitem"
                        aria-haspopup={!!item.children}
                        aria-expanded={openDropdown === item.label}
                    >
                        {item.label}
                        {item.children && <ChevronDown className="ml-1" size={16} />}
                    </LinkComponent>

                    {item.children && openDropdown === item.label && (
                        <div className="absolute top-full left-0 bg-white min-w-[200px] border border-gray-300 shadow-lg rounded-md p-2 z-10">
                            {item.children.map((child) => (
                                <LinkComponent
                                    key={child.label}
                                    href={child.href || "#"}
                                    className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                                >
                                    {child.label}
                                </LinkComponent>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default HorizontalNavigation;