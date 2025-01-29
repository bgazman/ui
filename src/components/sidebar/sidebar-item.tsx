import React from 'react';
import { NavItem } from '@components/navigation.tsx';
import LinkComponent from '@components/link';

type SidebarItemProps = {
    item: NavItem;
    className?: string;
    style?: React.CSSProperties;
    isActive?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
    item,
    className,
    style,
    isActive = false
}) => (
    <li className={`block ${className || ''}`} style={style}>
        <LinkComponent
            href={item.href}
            label={item.label}
            isActive={isActive}
        />
    </li>
);

export default SidebarItem;