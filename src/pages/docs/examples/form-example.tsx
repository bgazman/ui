import React from 'react';
import Form from '@components/input/form';

const FormExample: React.FC = () => {
    const handleSubmit = (data: Record<string, string>) => {
        console.log('Form submitted with data:', data);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} theme="light" />
        </div>
    );
};

export default FormExample;