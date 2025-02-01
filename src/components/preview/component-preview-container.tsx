// ComponentPreviewContainer.tsx
import React from 'react';

interface PreviewContainerProps {
    title?: string;
    description?: string;
    className?: string;
    style?: React.CSSProperties;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    children: React.ReactNode;
}

const ComponentPreviewContainer: React.FC<PreviewContainerProps> = ({
                                                                        title,
                                                                        description,
                                                                        children,
                                                                        className = '',
                                                                        style,
                                                                        activeTab,
                                                                    }) => (
    <div className={`space-y-4 ${className}`} style={style}>
        <div className="flex items-center justify-between mb-2">
            {(title || description) && (
                <div>
                    {title && <h3 className="text-sm font-medium">{title}</h3>}
                    {description && <p className="text-sm">{description}</p>}
                </div>
            )}
        </div>
        <div className={activeTab === 'preview' ? 'preview-content-styles' : 'code-content-styles'}>
            {children}
        </div>
    </div>
);

export default ComponentPreviewContainer;
