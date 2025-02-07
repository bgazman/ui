import React from 'react';
import Badge from '@components/badge.tsx';

const BadgeExample: React.FC = () => (
    <div className="badge-examples space-y-4">
        <Badge className="primary">Primary Badge</Badge>
        <Badge className="secondary">Secondary Badge</Badge>
        <Badge className="success">Success Badge</Badge>
        <Badge className="danger">Danger Badge</Badge>
    </div>
);

export default BadgeExample;