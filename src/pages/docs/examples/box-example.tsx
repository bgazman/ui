import React from 'react';
import Box from '@components/box';

const BoxExample: React.FC = () => (
    <div>
        <Box padding="2rem" margin="2rem" backgroundColor="#f0f0f0" border="2px solid #000">
            <p>This is a box with custom styles.</p>
        </Box>
        <Box>
            <p>This is a box with default styles.</p>
        </Box>
    </div>
);

export default BoxExample;