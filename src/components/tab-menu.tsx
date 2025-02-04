import React from "react";
import Box from "@components/box.tsx";
import Button  from "@components/button.tsx";

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
                                             className = "",
                                             style,
                                         }) => {
    return (
        <Box
            as="div"
            style={style}
            className={`flex   border-[var(--border-color)] ${className}`}
        >
            {items.map((item) => (
                <Button
                    key={item.value}
                    onClick={() => setActiveTab(item.value)}
                    variant="tab"
                    isActive={activeTab === item.value}
                    className={`py-[var(--spacing-sm)]  ${
                        activeTab === item.value
                            ? "border-b-4 border-bg-primary"
                            : ""
                    }`}
                >
                    {item.label}
                </Button>
            ))}
        </Box>
    );
};

export default TabMenu;
