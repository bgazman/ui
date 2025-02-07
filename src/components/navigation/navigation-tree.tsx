import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "@components/link.tsx";
import { NavItem } from "@components/navigation.tsx";

export interface NavigationTreeProps {
    data: NavItem[];
    level?: number;
}

const NavigationTreeComponent: React.FC<NavigationTreeProps> = ({ data, level = 0 }) => {
    return (
        <div className="flex flex-col">
            {data.map((item, index) => (
                <NavigationTreeNode key={index} item={item} level={level} />
            ))}
        </div>
    );
};

const NavigationTreeNode: React.FC<{ item: NavItem; level: number }> = ({ item, level }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;
    const paddingLeft = `calc(${level + 1} * var(--spacing-md))`;

    return (
        <div>
            {hasChildren ? (
                <div
                    className="flex items-center gap-[var(--spacing-xs)] cursor-pointer px-[var(--spacing-md)] py-[var(--spacing-sm)] transition-all rounded-[var(--border-radius-md)] hover:bg-[var(--bg-alt1)]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>{item.label}</span>
                    {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
            ) : (
                <Link
                    href={item.href || "#"}
                    className="block px-[var(--spacing-md)] py-[var(--spacing-sm)] transition-all rounded-[var(--border-radius-md)] hover:bg-[var(--button-hover-bg-color)] hover:text-[var(--button-hover-text-color)]"
                >
                    {item.label}
                </Link>
            )}
            {hasChildren && isOpen && (
                <div style={{ paddingLeft }}>
                    <NavigationTreeComponent data={item.children!} level={level + 1} />
                </div>
            )}
        </div>
    );
};

export default NavigationTreeComponent;
