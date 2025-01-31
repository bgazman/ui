import React, { useState, useEffect, useRef } from "react";
import LinkComponent from "@components/link/link";
import { NavigationVariant, NavItem } from "./navigation";

interface HorizontalNavItemProps {
    item: NavItem;
    variant: NavigationVariant;
    renderItem?: (item: NavItem, isParent: boolean) => React.ReactNode;
}

const HorizontalNavItem: React.FC<HorizontalNavItemProps> = ({ item, variant, renderItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isLink = !!item.href;
    const hasItems = (item.items?.length ?? 0) > 0;
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    // Handle outside click to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="relative group">
            {isLink ? (
                <LinkComponent href={item.href || "#"} label={item.label} isActive={false} className="px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-alt1)] rounded-md transition-colors" />
            ) : (
                <button
                    onClick={toggleDropdown}
                    className="px-4 py-2 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-alt1)] rounded-md transition-colors flex items-center"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                >
                    {item.label}
                    {hasItems && <span className="ml-2">▼</span>}
                </button>
            )}

            {hasItems && isOpen && (
                <div ref={dropdownRef} className="absolute left-0 mt-2 w-48 bg-[var(--bg-primary)] shadow-lg rounded-lg z-10">
                    {item.items?.map((subItem, subIndex) => (
                        renderItem ? renderItem(subItem, false) : (
                            <HorizontalNavItem key={subIndex} item={subItem} variant={variant} renderItem={renderItem} />
                        )
                    ))}
                </div>
            )}
        </div>
    );
};

export default HorizontalNavItem;
