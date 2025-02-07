import React from 'react';
import Card from '@components/card.tsx';

const CardExample: React.FC = () => (
    <div className="card-examples space-y-4">
        <Card className={'elevated'}>
            <h3>Card Title</h3>
            <p>Card content goes here...</p>
        </Card>
        <Card className={'primary'}>
            <h3>Card Title</h3>
            <p>Card content goes here...</p>
        </Card>
        <Card className={'secondary'}>
            <h3>Card Title</h3>
            <p>Card content goes here...</p>
        </Card>
        <Card className={'success'}>
            <h3>Card Title</h3>
            <p>Card content goes here...</p>
        </Card>
    </div>
);

export default CardExample;