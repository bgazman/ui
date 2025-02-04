import React from 'react';
import {Card} from '@components/card.tsx';

const CardExample: React.FC = () => (
    <Card title="Card Title" description="This is a description.">
        <div>Card Content</div>
    </Card>
);

export default CardExample;