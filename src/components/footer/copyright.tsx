import React from 'react';
import Box from '@components/box';

interface CopyrightProps {
    text: string;
}

const Copyright: React.FC<CopyrightProps> = ({ text }) => {
    return (
        <Box as="p" className="text-sm text-center md:text-right">
            {text}
        </Box>
    );
};

export default Copyright;