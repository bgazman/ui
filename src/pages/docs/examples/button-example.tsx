import React from 'react';
import Button from '@components/button.tsx';

const ButtonExample: React.FC = () => (
    <div className="button-examples">
      <Button className="primary">Primary Button</Button>
        <Button className="secondary">Secondary Button</Button>
        <Button className="disabled" disabled>Disabled Button</Button>
    </div>
);

export default ButtonExample;