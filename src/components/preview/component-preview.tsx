import React, { useState } from 'react';
import PreviewContainer from './preview-container';
import TabMenu, { TabItem } from '@components/tab-menu/tab-menu';
import PreviewContent from './preview-content';
import CodeContent from './code-content';
import Box from '@components/box.tsx';

interface ComponentPreviewProps {
    title?: string;
    description?: string;
    sourceCode: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const tabMenuItems: TabItem[] = [
    { label: 'Preview', value: 'preview' },
    { label: 'Code', value: 'code' },
];

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
    title,
    description,
    sourceCode,
    children,
    className = '',
    style,
}) => {
    const [activeTab, setActiveTab] = useState('preview');
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyCode = async () => {
        await navigator.clipboard.writeText(sourceCode);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <PreviewContainer
            title={title}
            description={description}
            className={className}
            style={style}
            activeTab={activeTab}
        >
            <TabMenu
                items={tabMenuItems}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {activeTab === 'preview' && (
                <Box className={`overflow-hidden rounded-lg ${className}`} style={{ ...style, border: '2px solid var(--border-color)' }}>
                    <PreviewContent activeTab={activeTab}>{children}</PreviewContent>
                </Box>
            )}

            {activeTab === 'code' && (
                <Box className={`overflow-hidden rounded-lg p-[var(--spacing-lg)] justify-start ${className}`} style={{ ...style, border: '2px solid var(--border-color)' }}>
                    <CodeContent
                        sourceCode={sourceCode}
                        onCopy={handleCopyCode}
                        isCopied={isCopied}
                    />
                </Box>
            )}
        </PreviewContainer>
    );
};

export default ComponentPreview;