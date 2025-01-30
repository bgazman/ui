import React from 'react';
import Box from '@components/box';
import Button from '@components/button/button';

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

const TabMenu: React.FC<TabMenuProps> = ({ items, activeTab, setActiveTab, className = '', style }) => {
    const getButtonVariant = (isActive: boolean) =>
        isActive ? "primary" : "secondary";

    return (
        <Box className={`flex border-b p-4 ${className}`} style={style}>
            {items.map((item) => (
                <Button
                    key={item.value}
                    onClick={() => setActiveTab(item.value)}
                    variant={getButtonVariant(activeTab === item.value)}
                    className="px-4 py-2 text-sm font-medium border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{ outline: 'none' }}
                >
                    {item.label}
                </Button>
            ))}
        </Box>
    );
};

export default TabMenu;