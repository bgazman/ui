import React from 'react';
import Card from '@components/card';

interface ComponentPreviewProps {
    title?: string;
    description?: string;
    sourceCode: string;
    children: React.ReactNode;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
                                                               title = "Component Preview",
                                                               description,
                                                               sourceCode,
                                                               children
                                                           }) => {
    return (
        <div className="space-y-8">
            {/* Preview Section */}
            <Card>
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>
                    {description && (
                        <p className="text-gray-500 mb-4">{description}</p>
                    )}
                    <div className="p-4 border rounded-lg bg-gray-50">
                        {children}
                    </div>
                </div>
            </Card>

            {/* Source Code Section */}
            <Card>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium">Source Code</h3>
                        <button
                            onClick={() => navigator.clipboard.writeText(sourceCode)}
                            className="px-3 py-1 text-sm border rounded-md hover:bg-gray-50"
                        >
                            Copy
                        </button>
                    </div>
                    <pre className="p-4 bg-gray-50 rounded-lg overflow-x-auto">
            <code className="text-sm font-mono whitespace-pre">
              {sourceCode}
            </code>
          </pre>
                </div>
            </Card>
        </div>
    );
};

export default ComponentPreview;