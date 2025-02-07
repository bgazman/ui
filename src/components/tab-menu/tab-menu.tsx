import React from 'react';
import Button from '@components/button.tsx';
import './tab-menu.css';

export interface TabMenuItem {
    label: string;
    value: string;
}

export interface TabMenuProps {
    items: TabMenuItem[];
    activeTab: string;
    setActiveTab: (value: string) => void;
    className?: string;
}

const TabMenu: React.FC<TabMenuProps> = ({
    items,
    activeTab,
    setActiveTab,
    className = ''
}) => {
    return (
        <div className={`tab-menu ${className}`}>
            {items.map((item) => (
                <Button
                    key={item.value}
                    className={`tab-button ${activeTab === item.value ? 'button active' : 'button inactive'}`}
                    onClick={() => setActiveTab(item.value)}
                >
                    {item.label}
                </Button>
            ))}
        </div>
    );
};

export default TabMenu;