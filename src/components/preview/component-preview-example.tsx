import React from 'react';

interface PreviewContentProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    activeTab: string;
}

const ComponentPreviewExample: React.FC<PreviewContentProps> = ({ children, className = '', style, activeTab }) => (
    <div className={`p-4 ${className}`} style={style}>
        <div className={activeTab === 'preview' ? 'preview-content-styles' : 'code-content-styles'}>
            {children}
        </div>
    </div>
);

export default ComponentPreviewExample;
