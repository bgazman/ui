import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import LinkComponent from "@components/link/link";
import {NavItem, VerticalNavigationVariant} from "@components/navigation/navigation";

interface VerticalNavigationProps {
    navItems: NavItem[];
    variant?: VerticalNavigationVariant;
    className?: string;
}

const VerticalNavigation: React.FC<VerticalNavigationProps> = ({
                                                                   navItems,
                                                                   variant = "default",
                                                                   className,
                                                               }) => {
    return (
        <nav
            className={`w-[var(--sidebar-width)] shadow-lg p-[var(--spacing-md)] rounded-[var(--border-radius-md)] ${className || ""}`}
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
    variant: "expanded" | "compact" | "default";
}

const TreeNode: React.FC<TreeNodeProps> = ({ item, level, variant }) => {
    const [isOpen, setIsOpen] = useState(variant === "expanded");
    const hasChildren = item.children && item.children.length > 0;

    const handleClick = () => {
        if (variant === "default") {
            setIsOpen(!isOpen);
        }
    };

    const childrenContainerStyle =
        variant !== "compact"
            ? { paddingLeft: `calc(${level + 1} * var(--spacing-md))` }
            : {};

    return (
        <div
            className="relative flex flex-col group"
            onMouseEnter={() => variant === "compact" && setIsOpen(true)}
            onMouseLeave={() => variant === "compact" && setIsOpen(false)}
        >
            <div
                className="flex items-center gap-[var(--spacing-xs)] cursor-pointer px-[var(--spacing-md)] py-[var(--spacing-sm)] transition-all hover:bg-[var(--sidebar-hover-bg-color)] rounded-[var(--border-radius-md)]"
                onClick={handleClick}
            >
                {item.href ? (
                    <LinkComponent href={item.href} className="text-[var(--sidebar-text-color)]" isActive={false}>
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
                    className={
                        variant === "compact"
                            ? "absolute left-full top-0 bg-[var(--bg-primary)] shadow-md rounded-[var(--border-radius-md)] w-48 z-50 hidden group-hover:block"
                            : "bg-[var(--bg-primary)]"
                    }
                    style={variant !== "compact" ? childrenContainerStyle : {}}
                >
                    {item.children?.map((child, index) => (
                        <TreeNode key={child.label + index} item={child} level={level + 1} variant={variant} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default VerticalNavigation;
