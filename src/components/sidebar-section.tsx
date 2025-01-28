import React from 'react';
import SidebarItem from '@components/sidebar-item.tsx';
import { NavItem } from '@components/navigation.tsx';

type SidebarSectionProps = {
    section: NavItem;
    className?: string;
    style?: React.CSSProperties;
};

const SidebarSection: React.FC<SidebarSectionProps> = ({ section, className, style }) => (
    <div className={`sidebar-section ${className || ''}`} style={style}>
        <h3>{section.label}</h3>
        <ul>
            {section.items.map((item, index) => (
                <SidebarItem key={index} item={item} />
            ))}
        </ul>
    </div>
);

export default SidebarSection;