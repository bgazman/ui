import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import LinkComponent from "@components/link/link";
import { NavItem } from "@components/navigation/navigation";

interface NavigationTreeProps {
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

    // Calculate left indentation based on nesting level using your CSS var for spacing
    const paddingLeft = `calc(${level + 1} * var(--spacing-md))`;

    return (
        <div>
            {hasChildren ? (
                <div
                    className="flex items-center gap-[var(--spacing-xs)] cursor-pointer px-[var(--spacing-md)] py-[var(--spacing-sm)] transition-all hover:bg-[var(--bg-alt1)] rounded-[var(--border-radius-md)]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>{item.label}</span>
                    {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
            ) : (
                <LinkComponent
                    href={item.href || "#"}
                    className="block px-[var(--spacing-md)] py-[var(--spacing-sm)] transition-all hover:bg-[var(--button-hover-bg-color)] text-[var(--button-hover-text-color)] rounded-[var(--border-radius-md)]"
                >
                    {item.label}
                </LinkComponent>
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
