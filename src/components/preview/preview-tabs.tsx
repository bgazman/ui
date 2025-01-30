import React from 'react';
import Box from '@components/box';
import Button from '@components/button/button';

interface PreviewTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const PreviewTabs: React.FC<PreviewTabsProps> = ({
    activeTab,
    onTabChange,
}) => {
    const getButtonClass = (isActive: boolean) =>
        isActive
            ? "border-active-tab text-active-tab"
            : "border-transparent text-inactive-tab hover:text-hover-tab hover:border-hover-tab";

    return (
        <Box className="flex border-b p-4">
            <Button
                onClick={() => onTabChange('preview')}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${getButtonClass(activeTab === 'preview')}`}
                style={{ outline: 'none' }}
            >
                Preview
            </Button>
            <Button
                onClick={() => onTabChange('code')}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${getButtonClass(activeTab === 'code')}`}
                style={{ outline: 'none' }}
            >
                Code
            </Button>
        </Box>
    );
};

export default PreviewTabs;