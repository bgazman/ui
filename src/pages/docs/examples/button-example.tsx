import React from 'react';
import Button from '@components/button/button';

const ButtonExample: React.FC = () => (
    <div className="button-examples">
        <Button onClick={() => alert('Primary Button clicked!')} variant="primary" size="md">Primary Button</Button>
        <Button onClick={() => alert('Secondary Button clicked!')} variant="secondary" size="md">Secondary Button</Button>
        <Button onClick={() => alert('Disabled Button clicked!')} variant="disabled" size="md" disabled>Disabled Button</Button>
        <Button onClick={() => alert('Large Button clicked!')} variant="primary" size="lg">Large Button</Button>
        <Button onClick={() => alert('Small Button clicked!')} variant="primary" size="sm">Small Button</Button>
    </div>
);

export default ButtonExample;