import React from 'react';
import Form from '@components/form.tsx';

const FormExample: React.FC = () => {
    const handleSubmit = (data: Record<string, string>) => {
    };

    return (

            <Form onSubmit={handleSubmit}  />

    );
};

export default FormExample;