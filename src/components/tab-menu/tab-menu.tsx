import React from 'react';
import Box from '@components/box';
import Button from '@components/button/button';
import './tab-menu.css';

export type TabItem = {
    label: React.ReactNode;
    value: string;
};

export interface TabMenuProps {
    items: TabItem[];
    activeTab: string;
    setActiveTab: (value: string) => void;
    className?: string;
    style?: React.CSSProperties;

}

const TabMenu: React.FC<TabMenuProps> = ({
                                             items,
                                             activeTab,
                                             setActiveTab,
                                             className = '',
                                             style,

                                         }) => {
    return (
        <Box className={`tab-menu ${className}`} style={style}>
            {items.map((item) => (
                <Button
                    key={item.value}
                    onClick={() => setActiveTab(item.value)}
                    variant="tab"
                    isActive={activeTab === item.value} // ✅ Pass isActive prop
                >
                    {item.label}
                </Button>
            ))}
        </Box>
    );
};

export default TabMenu;
