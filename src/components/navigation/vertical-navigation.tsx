import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import LinkComponent from "@components/link/link";
import { NavItem, VerticalNavigationVariant } from "@components/navigation/navigation";

export interface VerticalNavigationProps {
    navItems: NavItem[];
    variant?: VerticalNavigationVariant;
    className?: string;
}

const VerticalNavigation: React.FC<VerticalNavigationProps> = ({
                                                                   navItems,
                                                                   variant = "default",
                                                                   className,
                                                               }) => {
    const combinedClassName = `vertical-nav ${className || ""}`.trim();

    return (
        <nav className={combinedClassName}>
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
            className="vertical-nav__node"
            onMouseEnter={() => variant === "compact" && setIsOpen(true)}
            onMouseLeave={() => variant === "compact" && setIsOpen(false)}
        >
            <div className="vertical-nav__node-content" onClick={handleClick}>
                {item.href ? (
                    <LinkComponent href={item.href} className="vertical-nav__node-link">
                        {item.label}
                    </LinkComponent>
                ) : (
                    <span className="vertical-nav__node-label">{item.label}</span>
                )}
                {hasChildren && variant !== "compact" && (
                    <span className="vertical-nav__toggle-icon">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
                )}
            </div>
            {hasChildren && (variant === "expanded" || isOpen) && (
                <div
                    className={`vertical-nav__dropdown ${
                        variant === "compact" ? "vertical-nav__dropdown--compact" : ""
                    }`}
                    style={
                        variant !== "compact"
                            ? { paddingLeft: `calc(${level + 1} * var(--spacing-md))` }
                            : {}
                    }
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
