import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import LinkComponent from "@components/link/link";
import { NavItem, NavigationVariant } from "./navigation";

interface VerticalNavItemProps {
  item: NavItem;
  variant: NavigationVariant;
}

const VerticalNavItem: React.FC<VerticalNavItemProps> = ({ item, variant }) => {
  const [isOpen, setIsOpen] = useState(variant === "expanded");
  const isLink = !!item.href;
  const hasItems = (item.items?.length ?? 0) > 0;

  // Detect active link
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (item.href) {
      setIsActive(window.location.pathname === item.href);
    }
  }, [item.href]);

  // Handle Hover for Compact Mode
  const handleMouseEnter = () => {
    if (variant === "compact") {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (variant === "compact") {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isLink ? (
        <LinkComponent
          href={item.href || "#"}
          label={item.label}
          isActive={isActive}
          className={`px-[var(--spacing-md)] py-[var(--spacing-sm)] text-sm font-medium
            ${
              isActive
                ? "bg-[var(--button-bg-color)] text-[var(--button-text-color)] font-bold"
                : "text-[var(--text-primary)]"
            }
            hover:bg-[var(--button-hover-bg-color)] hover:text-[var(--button-hover-text-color)]
            rounded-md transition-colors duration-[var(--transition-duration)]`}
        />
      ) : (
        <button
          onClick={() => variant === "default" && setIsOpen(!isOpen)}
          className={`px-[var(--spacing-md)] py-[var(--spacing-sm)] text-sm font-semibold
            text-[var(--text-primary)] hover:bg-[var(--bg-alt1)]
            rounded-md transition-colors flex items-center justify-between w-full
            duration-[var(--transition-duration)]`}
        >
          {item.label}
          {hasItems && variant !== "expanded" && (
            <span className="ml-auto">
              {isOpen ? (
                <ChevronUp size={16} className="text-[var(--text-primary)]" />
              ) : (
                <ChevronDown size={16} className="text-[var(--text-primary)]" />
              )}
            </span>
          )}
        </button>
      )}

      {hasItems && (isOpen || variant === "expanded") && (
        <div
          className="ml-[var(--spacing-sm)] mt-[var(--spacing-xs)] border-l-[1px]
            border-[var(--border-color)] pl-[var(--spacing-sm)]
            fade-in slide-up transition-all duration-[var(--animation-duration-normal)]
            ease-[var(--animation-ease)]"
        >
          {item.items?.map((subItem, subIndex) => (
            <VerticalNavItem key={subIndex} item={subItem} variant={variant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VerticalNavItem;