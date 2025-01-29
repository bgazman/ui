import React from 'react';
import { NavItem } from '@components/navigation/navigation';
import LinkButton from '@components/link-button';

export type SidebarItemProps = {
    navItem: NavItem;
    className?: string;
    style?: React.CSSProperties;
    isActive?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
    navItem,
    className,
    style,
    isActive = false
}) => {
    return (
        <li className={`block ${className || ''}`} style={style}>
            <LinkButton
                href={navItem.href}
                className={`block px-4 py-2 rounded transition-colors ${
                    isActive ? 'bg-[var(--button-bg-color)] text-[var(--button-text-color)]' : 'text-[var(--text-primary)]'
                } hover:bg-[var(--button-hover-bg-color)] hover:text-[var(--button-hover-text-color)] no-underline`}
            >
                {navItem.label}
            </LinkButton>
        </li>
    );
};

export default SidebarItem;