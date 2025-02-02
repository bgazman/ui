import React, { useState } from "react";
import Box from "@components/box";
import TabMenu from "@components/tab-menu/tab-menu";
import Card from "@components/card/card";
import Button from "@components/button/button";
import TextArea from "@components/text-area/text-area";
import { Check, Copy } from "lucide-react";
import "@components/preview/component-preview.css";

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
        <div className={`component-preview ${className}`} style={style}>
            {(title || description) && (
                <div className="component-preview__header">
                    {title && <h3 className="component-preview__title">{title}</h3>}
                    {description && <p className="component-preview__description">{description}</p>}
                </div>
            )}
            <TabMenu items={tabItems} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="component-preview__content">
                {activeTab === "code" ? (
                    <Card className="component-preview__code" title="Source Code">
                        <div className="component-preview__code-header">
                            <Button onClick={handleCopyCode} className="component-preview__copy-button">
                                {isCopied ? (
                                    <>
                                        <Check className="component-preview__icon" />
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy className="component-preview__icon" />
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
                            className="component-preview__textarea"
                        />
                    </Card>
                ) : (
                    <Box className="component-preview__example">{children}</Box>
                )}
            </div>
        </div>
    );
};

export default ComponentPreview;
