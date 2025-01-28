import React from 'react';
import { NavItem } from '@components/navigation.tsx';

type SidebarItemProps = {
    item: NavItem;
    className?: string;
    style?: React.CSSProperties;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ item, className, style }) => (
    <li className={`sidebar-item ${className || ''}`} style={style}>
        <a href={item.href}>{item.label}</a>
    </li>
);

export default SidebarItem;