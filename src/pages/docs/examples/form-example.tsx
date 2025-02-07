import React from 'react';
import Form, { FormField } from '@components/form.tsx';

const FormExample: React.FC = () => {
    const fields: FormField[] = [
        {
            type: 'input',
            name: 'username',
            label: 'Username',
            placeholder: 'Enter your username',
        },
        {
            type: 'textarea',
            name: 'bio',
            label: 'Bio',
            placeholder: 'Tell us about yourself',
        },
    ];

    const handleSubmit = (data: Record<string, string>) => {
        console.log('Form data:', data);
    };

    return (
        <div className="form">
            <h2>Form Example</h2>
            <Form fields={fields} onSubmit={handleSubmit} />
        </div>
    );
};

export default FormExample;