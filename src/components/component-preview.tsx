import React, { useState } from "react";
import Box from "@components/box.tsx";
import TabMenu from "@components/tab-menu.tsx";
import { Card } from "@components/card.tsx";
import { Button } from "@components/button.tsx";
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
                                                               className = "",
                                                               style,
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
            className={`flex flex-col gap-[var(--spacing-md)] w-full p-[var(--spacing-md)] bg-[var(--bg-primary)] rounded-[var(--border-radius-lg)] ${className}`}
            style={{
                outline: "3px solid var(--border-color)",
                outlineOffset: "10px",
                ...style,
            }}
        >
            {(title || description) && (
                <div className="flex flex-col mb-[var(--spacing-sm)]">
                    {title && <h3 className="text-sm font-medium">{title}</h3>}
                    {description && <p className="text-sm">{description}</p>}
                </div>
            )}
            <TabMenu items={tabItems} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex flex-col md:flex-row gap-[var(--spacing-md)] justify-center">
                {activeTab === "code" ? (
                    <Card
                        title="Source Code"
                        className="relative overflow-hidden rounded-lg p-[var(--spacing-lg)] border border-[var(--border-color)]"
                    >
                        <div className="flex justify-between items-center p-2 border-b border-b-[var(--border-color)]">
                            <Button
                                onClick={handleCopyCode}
                                className="inline-flex items-center px-3 py-1 text-sm font-medium border rounded-md shadow-sm hover:bg-[var(--button-hover-bg-color)] focus:outline-none focus:ring-2 focus:ring-offset-2"
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
                        <TextArea
                            id="sourceCode"
                            name="sourceCode"
                            placeholder="Source Code"
                            value={sourceCode}
                            onChange={() => {}}
                            className="w-full h-64 p-4 text-sm font-mono border-none resize-none"
                        />
                    </Card>
                ) : (
                    <Box className="overflow-hidden rounded-lg border flex-1">{children}</Box>
                )}
            </div>
        </div>
    );
};

export default ComponentPreview;
