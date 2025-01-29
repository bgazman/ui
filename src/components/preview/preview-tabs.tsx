import React from 'react';
import Box from '@components/box';

interface PreviewTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const PreviewTabs: React.FC<PreviewTabsProps> = ({
    activeTab,
    onTabChange,
}) => (
    <Box className="flex border-b p-4">
        <button
            onClick={() => onTabChange('preview')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                activeTab === 'preview'
                    ? 'border-active-tab text-active-tab'
                    : 'border-transparent text-inactive-tab hover:text-hover-tab hover:border-hover-tab'
            }`}
        >
            Preview
        </button>
        <button
            onClick={() => onTabChange('code')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                activeTab === 'code'
                    ? 'border-active-tab text-active-tab'
                    : 'border-transparent text-inactive-tab hover:text-hover-tab hover:border-hover-tab'
            }`}
        >
            Code
        </button>
    </Box>
);

export default PreviewTabs;