import React from 'react';
import Card from '@components/card.tsx';

const CardExample: React.FC = () => (
    <div className="space-y-4">
        <Card title="Default Card" description="This is a default card.">
            <div>Default Card Content</div>
        </Card>
        <Card title="Outlined Card" description="This is an outlined card." variant="outlined">
            <div>Outlined Card Content</div>
        </Card>
        <Card title="Shadowed Card" description="This is a shadowed card." variant="shadowed">
            <div>Shadowed Card Content</div>
        </Card>
        <Card title="Elevated Card" description="This is an elevated card." variant="elevated">
            <div>Elevated Card Content</div>
        </Card>
        <Card title="Bordered Card" description="This is a bordered card." variant="bordered">
            <div>Bordered Card Content</div>
        </Card>
    </div>
);

export default CardExample;