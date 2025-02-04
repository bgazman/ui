import React from 'react';
import Grid from '@components/grid.tsx';
import Box from '@components/box';

const GridExample: React.FC = () => (
    <Grid columns={3} rows={3} gap="1rem">
        <Box style={{ backgroundColor: 'var(--bg-primary)', padding: '1rem' }}>Item 1</Box>
        <Box style={{ backgroundColor: 'var(--bg-secondary)', padding: '1rem' }}>Item 2</Box>
        <Box style={{ backgroundColor: 'var(--bg-alt1)', padding: '1rem' }}>Item 3</Box>
        <Box style={{ backgroundColor: 'var(--bg-alt2)', padding: '1rem' }}>Item 4</Box>
        <Box style={{ backgroundColor: 'var(--text-primary)', padding: '1rem' }}>Item 5</Box>
        <Box style={{ backgroundColor: 'var(--text-secondary)', padding: '1rem' }}>Item 6</Box>
        <Box style={{ backgroundColor: 'var(--border-color)', padding: '1rem' }}>Item 7</Box>
        <Box style={{ backgroundColor: 'var(--button-bg-color)', padding: '1rem' }}>Item 8</Box>
        <Box style={{ backgroundColor: 'var(--button-secondary-bg-color)', padding: '1rem' }}>Item 9</Box>
    </Grid>
);

export default GridExample;