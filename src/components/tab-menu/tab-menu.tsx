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

const TabMenu: React.FC<TabMenuProps> = ({
                                             items,
                                             activeTab,
                                             setActiveTab,
                                             className = '',
                                             style,
                                         }) => {
    const getButtonClass = (isActive: boolean) =>
        isActive
            ? 'py-4 border-b-2 border-[var(--button-hover-bg-color)] text-[var(--button-hover-text-color)]'
            : 'py-1 border-b-2 border-transparent text-[var(--text-secondary)] hover:text-[var(--button-hover-text-color)] hover:border-[var(--button-hover-bg-color)]';

    return (
        <Box className={`flex border-b border-transparent p-4 ${className}`} style={style}>
            {items.map((item) => (
                <Button
                    key={item.value}
                    onClick={() => setActiveTab(item.value)}
                    className={`px-4 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${getButtonClass(activeTab === item.value)}`}
                >
                    {item.label}
                </Button>
            ))}
        </Box>
    );
};

export default TabMenu;
