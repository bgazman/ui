import React from "react";
import LinkComponent from "@components/link/link";
import { NavItem } from "./navigation";

const HorizontalNavItem: React.FC<{ item: NavItem, variant: 'default' | 'compact' | 'expanded', renderItem?: (item: NavItem, isParent: boolean) => React.ReactNode }> = ({ item, variant, renderItem }) => {
    const isLink = !!item.href;

    if (variant === 'default') {
        return (
            <div className="flex flex-col space-y-4">
                {isLink ? (
                    <LinkComponent href={item.href || "#"} label={item.label} isActive={false} />
                ) : (
                    <span className="font-semibold text-[var(--text-primary)]">{item.label}</span>
                )}
                {item.items && (
                    <ul className="space-y-2">
                        {item.items.map((subItem, subIndex) => (
                            renderItem ? renderItem(subItem, false) : (
                                <li key={subIndex}>
                                    <HorizontalNavItem item={subItem} variant={variant} renderItem={renderItem} />
                                </li>
                            )
                        ))}
                    </ul>
                )}
            </div>
        );
    }

    if (variant === 'compact') {
        return (
            <div className="compact-item group">
                {isLink ? (
                    <LinkComponent href={item.href || "#"} label={item.label} isActive={false} className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors px-2 py-1 text-sm" />
                ) : (
                    <span className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors px-2 py-1 text-sm">{item.label}</span>
                )}
                {item.items && (
                    <div className="compact-subitems hidden group-hover:block">
                        {item.items.map((subItem, subIndex) => (
                            renderItem ? renderItem(subItem, false) : (
                                <HorizontalNavItem key={subIndex} item={subItem} variant={variant} renderItem={renderItem} />
                            )
                        ))}
                    </div>
                )}
            </div>
        );
    }

    if (variant === 'expanded') {
        return (
            <div className="expanded-item">
                {isLink ? (
                    <LinkComponent href={item.href || "#"} label={item.label} isActive={false} />
                ) : (
                    <span className="text-[var(--text-primary)]">{item.label}</span>
                )}
                {item.items && (
                    <ul className="expanded-subitems">
                        {item.items.map((subItem, subIndex) => (
                            renderItem ? renderItem(subItem, false) : (
                                <li key={subIndex}>
                                    <HorizontalNavItem item={subItem} variant={variant} renderItem={renderItem} />
                                </li>
                            )
                        ))}
                    </ul>
                )}
            </div>
        );
    }

    return isLink ? (
        <LinkComponent href={item.href || "#"} label={item.label} isActive={false} />
    ) : (
        <span className="text-[var(--text-primary)]">{item.label}</span>
    );
};

export default HorizontalNavItem;