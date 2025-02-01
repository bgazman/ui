import React from 'react';
import { Check, Copy } from 'lucide-react';
import Button from '@components/button/button';
import Card from '@components/card/card';
import Box from '@components/box';
import TextArea from '@components/form/text-area';

interface CodeContentProps {
    sourceCode: string;
    onCopy: () => void;
    isCopied: boolean;
}

const ComponentPreviewCode: React.FC<CodeContentProps> = ({ sourceCode, onCopy, isCopied }) => (
    <Card className="relative max-w-md mx-auto p-4">
        <Box className="flex justify-between items-center p-2 border-b component-preview-code-header">
            <Button
                onClick={onCopy}
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
        </Box>
        <TextArea
            id="sourceCode"
            name="sourceCode"
            placeholder="Source Code"
            value={sourceCode}
            onChange={() => {}}
            className="w-full h-64 p-4 text-sm font-mono border-none resize-none"
            theme="dark"
        />
    </Card>
);

export default ComponentPreviewCode;
