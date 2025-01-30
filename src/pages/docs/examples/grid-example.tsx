import React from 'react';
import Grid from '@components/grid/grid';

const GridExample: React.FC = () => (
    <Grid columns={3} gap="1rem">
        <div style={{ backgroundcolor: 'var(--bg-primary)', padding: '1rem' }}>Item 1</div>
        <div style={{ backgroundcolor: 'var(--bg-secondary)', padding: '1rem' }}>Item 2</div>
        <div style={{ backgroundcolor: 'var(--bg-alt1)', padding: '1rem' }}>Item 3</div>
    </Grid>
);

export default GridExample;