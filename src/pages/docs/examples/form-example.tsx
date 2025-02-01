import React from 'react';
import Form from '@components/form/form';

const FormExample: React.FC = () => {
    const handleSubmit = (data: Record<string, string>) => {
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} theme="light" variant="default" />
        </div>
    );
};

export default FormExample;