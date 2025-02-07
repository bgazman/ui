import React, { useState } from "react";
import Box from "@components/box.tsx";
import TabMenu from "@components/tab-menu/tab-menu.tsx";
import Card from "@components/card.tsx";
import Button from "@components/button.tsx";
import TextArea from "@components/text-area.tsx";
import { Check, Copy } from "lucide-react";

export interface ComponentPreviewProps {
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
}) => {
    const [activeTab, setActiveTab] = useState("preview");
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyCode = async () => {
        await navigator.clipboard.writeText(sourceCode);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const tabItems = [
        { label: "Preview", value: "preview" },
        { label: "Code", value: "code" },
    ];

    return (
        <div
            className={`flex flex-col gap-md w-full p-md bg-bg-primary rounded-lg ${className}`}
            style={{
                outline: "3px solid var(--border-color)",
                outlineOffset: "10px",
            }}
        >
            {(title || description) && (
                <div className="flex flex-col mb-sm">
                    {title && <h3 className="text-sm font-medium">{title}</h3>}
                    {description && <p className="text-sm">{description}</p>}
                </div>
            )}

            {/* Tab Menu */}
            <TabMenu items={tabItems} activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Preview and Code Sections */}
            <div className="flex flex-col md:flex-row gap-md justify-center">
                {activeTab === "code" ? (
                    <div className="relative">
                        <div className="absolute inset-0 bg-button rounded-lg opacity-10 blur-2xl"></div>
                        <div className="relative bg-bg-secondary p-lg rounded-lg border border-border">
                            <Card
                                title="Source Code"
                                variant="outlined"
                                className="relative overflow-hidden rounded-lg p-lg border border-border flex-1"
                            >
                                {/* Button for Copying Code */}
                                <div className="flex justify-between items-center p-2 border-b border-border">
                                    <Button
                                        onClick={handleCopyCode}
                                        variant="secondary"
                                        className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-md shadow-sm"
                                    >
                                        {isCopied ? (
                                            <>
                                                <Check className="mr-2 h-4 w-4" />
                                                Copied
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="mr-2 h-4 w-4" />
                                                Copy
                                            </>
                                        )}
                                    </Button>
                                </div>

                                {/* Code Display */}
                                <TextArea
                                    name="sourceCode"
                                    placeholder="Source Code"
                                    value={sourceCode}
                                    onChange={() => {}}
                                    className="w-full h-64 p-4 text-sm font-mono border-none resize-none"
                                />
                            </Card>
                        </div>
                    </div>
                ) : (
                    <Box className="overflow-hidden rounded-lg flex-1 p-lg border-none">
                        <div className="relative">
                            <div className="absolute inset-0 bg-button rounded-lg opacity-10 blur-2xl"></div>
                            <div className="relative bg-bg-secondary p-lg rounded-lg border border-border">
                                {children}
                            </div>
                        </div>
                    </Box>
                )}
            </div>
        </div>
    );
};

export default ComponentPreview;