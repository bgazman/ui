import React from "react";
import LinkComponent from "@components/link/link";
import { NavItem } from "./navigation";

const NavItemComponent: React.FC<{ item: NavItem, variant: 'default' | 'compact' | 'accordion', renderItem?: (item: NavItem, isParent: boolean) => React.ReactNode, orientation: 'horizontal' | 'vertical' }> = ({ item, variant, renderItem, orientation }) => {
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
                                    <NavItemComponent item={subItem} variant={variant} renderItem={renderItem} orientation={orientation} />
                                </li>
                            )
                        ))}
                    </ul>
                )}
            </div>
        );
    }

    if (variant === 'accordion' && orientation === 'vertical') {
        return (
            <div className="accordion-item">
                {isLink ? (
                    <LinkComponent href={item.href || "#"} label={item.label} isActive={false} />
                ) : (
                    <>
                        <button className="accordion-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 'var(--spacing-sm)', color: 'var(--text-primary)', transition: 'color var(--transition-duration) var(--transition-timing-function)' }}>
                            {item.label}
                            <span style={{ marginLeft: 'var(--spacing-xs)', transition: 'transform var(--transition-duration) var(--transition-timing-function)', transform: 'rotate(0deg)' }}>
                                ▼
                            </span>
                        </button>
                        {item.items && (
                            <div className="accordion-content">
                                {item.items.map((subItem, subIndex) => (
                                    renderItem ? renderItem(subItem, false) : (
                                        <NavItemComponent key={subIndex} item={subItem} variant={variant} renderItem={renderItem} orientation={orientation} />
                                    )
                                ))}
                            </div>
                        )}
                    </>
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
                                <NavItemComponent key={subIndex} item={subItem} variant={variant} renderItem={renderItem} orientation={orientation} />
                            )
                        ))}
                    </div>
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

export default NavItemComponent;