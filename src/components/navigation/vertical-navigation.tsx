import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import LinkComponent from "@components/link.tsx";
import { NavItem, VerticalNavigationVariant } from "@components/navigation/navigation";

export interface VerticalNavigationProps {
    navItems: NavItem[];
    variant?: VerticalNavigationVariant;
    className?: string;
}

const VerticalNavigation: React.FC<VerticalNavigationProps> = ({
                                                                   navItems,
                                                                   variant = "default",
                                                                   className = "",
                                                               }) => {
    return (
        <nav
            className={`shadow-lg p-[var(--spacing-md)] rounded-[var(--border-radius-md)] w-[var(--sidebar-width)] bg-[var(--bg-primary)] ${className}`}
        >
            {navItems.map((item) => (
                <TreeNode key={item.label} item={item} level={0} variant={variant} />
            ))}
        </nav>
    );
};

interface TreeNodeProps {
    item: NavItem;
    level: number;
    variant: VerticalNavigationVariant; // "expanded" | "compact" | "default"
}

const TreeNode: React.FC<TreeNodeProps> = ({ item, level, variant }) => {
    const [isOpen, setIsOpen] = useState(variant === "expanded");
    const hasChildren = !!(item.children && item.children.length > 0);

    const handleClick = () => {
        if (variant === "default") {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div
            className="flex flex-col relative"
            onMouseEnter={() => variant === "compact" && setIsOpen(true)}
            onMouseLeave={() => variant === "compact" && setIsOpen(false)}
        >
            <div
                className="flex items-center gap-[var(--spacing-xs)] cursor-pointer px-[var(--spacing-md)] py-[var(--spacing-sm)] transition-all rounded-[var(--border-radius-md)] hover:bg-[var(--bg-alt1)]"
                onClick={handleClick}
            >
                {item.href ? (
                    <LinkComponent href={item.href} className="text-text-primary">
                        {item.label}
                    </LinkComponent>
                ) : (
                    <span className="text-[var(--sidebar-text-color)]">{item.label}</span>
                )}
                {hasChildren && variant !== "compact" && (
                    <span className="transition-transform">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
                )}
            </div>
            {hasChildren && (variant === "expanded" || isOpen) && (
                <div
                    className={`bg-[var(--bg-primary)] ${
                        variant === "compact"
                            ? "absolute left-full top-0 shadow-md rounded-[var(--border-radius-md)] w-48 z-50"
                            : ""
                    }`}
                    style={variant !== "compact" ? { paddingLeft: `calc(${level + 1} * var(--spacing-md))` } : {}}
                >
                    {item.children?.map((child, index) => (
                        <TreeNode
                            key={`${child.label}-${index}`}
                            item={child}
                            level={level + 1}
                            variant={variant}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default VerticalNavigation;
