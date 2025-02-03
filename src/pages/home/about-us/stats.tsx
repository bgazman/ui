import React from 'react';
import Card from '@components/card/card.tsx';
import Grid from '@components/grid/grid.tsx';

export interface Stat {
    number: string;
    label: string;
}

interface StatsProps {
    stats: Stat[];
    cardClassName?: string;
}

const Stats: React.FC<StatsProps> = ({ stats, cardClassName }) => (
    <Grid columns={4} gap="2rem" className="mb-16">
        {stats.map((stat, index) => (
            <Card key={index} title={stat.label} className={`text-center p-6 ${cardClassName || ''}`}>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
            </Card>
        ))}
    </Grid>
);

export default Stats;
