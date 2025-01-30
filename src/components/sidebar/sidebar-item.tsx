import React from 'react';
import { NavItem } from '@components/navigation/navigation';
import LinkComponent from '@components/link/link.tsx';

export interface SidebarItemProps {
    navItem: NavItem;
    className?: string;
    style?: React.CSSProperties;
    isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    navItem,
    className = '',
    style,
    isActive = false,
}) => {
    return (
        <li className={`block ${className}`} style={style}>
            <LinkComponent
                href={navItem.href}
                label={navItem.label}
                isActive={isActive}
                className="block px-4 py-2 rounded transition-colors text-decoration-none"
            />
        </li>
    );
};

export default SidebarItem;