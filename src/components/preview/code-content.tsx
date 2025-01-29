import React from 'react';
import { Check, Copy } from 'lucide-react';
import Button from '@components/button';
import Card from '@components/card/card';
import Box from '@components/box';

interface CodeContentProps {
    sourceCode: string;
    onCopy: () => void;
    isCopied: boolean;
}

const CodeContent: React.FC<CodeContentProps> = ({
    sourceCode,
    onCopy,
    isCopied,
}) => (
    <Card>
        <Box className="flex justify-end p-2 border-b" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <Button
                onClick={onCopy}
                className="inline-flex items-center px-3 py-1 text-sm font-medium border rounded-md shadow-sm hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2"
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
        <pre className="p-4 text-sm overflow-x-auto" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <code className="font-mono whitespace-pre">{sourceCode}</code>
        </pre>
    </Card>
);

export default CodeContent;