import React from 'react';
import Button from '@components/button/button';

const ButtonExample: React.FC = () => (
    <div className="button-examples">
        <Button onClick={() => alert('Primary Button clicked!')} variant="primary">Primary Button</Button>
        <Button onClick={() => alert('Secondary Button clicked!')} variant="secondary">Secondary Button</Button>
        <Button onClick={() => alert('Disabled Button clicked!')} variant="disabled" disabled>Disabled Button</Button>
        <Button onClick={() => alert('Large Button clicked!')} variant="large">Large Button</Button>
        <Button onClick={() => alert('Small Button clicked!')} variant="small">Small Button</Button>
    </div>
);

export default ButtonExample;