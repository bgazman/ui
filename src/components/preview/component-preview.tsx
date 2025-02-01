import React, { useState } from 'react';
import ComponentPreviewContainer from './component-preview-container';
import ComponentPreviewExample from './component-preview-example';
import ComponentPreviewCode from './component-preview-code';
import Box from '@components/box';
import TabMenu from '@components/tab-menu/tab-menu';

interface ComponentPreviewProps {
    title?: string;
    description?: string;
    sourceCode: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

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

    const tabItems = [
        { label: 'Preview', value: 'preview' },
        { label: 'Code', value: 'code' },
    ];

    return (
        <ComponentPreviewContainer
            title={title}
            description={description}
            className={`flex flex-col ${className}`}
            style={style}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        >
            <TabMenu items={tabItems} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex flex-row">
                {activeTab === 'code' && (
                    <Box
                        className={`overflow-hidden rounded-lg p-[var(--spacing-lg)] justify-start component-preview-border ${className}`}
                        style={{ ...style, flex: '1 1 50%' }}
                    >
                        <ComponentPreviewCode sourceCode={sourceCode} onCopy={handleCopyCode} isCopied={isCopied} />
                    </Box>
                )}
                {activeTab === 'preview' && (
                    <Box
                        className={`overflow-hidden rounded-lg component-preview-border ${className}`}
                        style={{ ...style, flex: '1 1 50%' }}
                    >
                        <ComponentPreviewExample activeTab={activeTab}>{children}</ComponentPreviewExample>
                    </Box>
                )}
            </div>
        </ComponentPreviewContainer>
    );
};

export default ComponentPreview;
