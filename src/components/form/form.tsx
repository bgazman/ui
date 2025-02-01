import React, { useState } from 'react';
import InputField from './input-field';
import TextAreaField from './text-area';
import Button from '@components/button/button';

export type FormVariant = 'default' | 'centered' | 'compact';

export interface FormProps {
    onSubmit: (data: Record<string, string>) => void;
    className?: string;
    style?: React.CSSProperties;
    variant?: FormVariant;
}

const Form: React.FC<FormProps> = ({
                                       onSubmit,
                                       className = '',
                                       style,
                                       variant = 'default',
                                   }) => {
    const [formData, setFormData] = useState<Record<string, string>>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleClear = () => {
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <form
            className={`form ${variant !== 'default' ? `form--${variant}` : ''} ${className}`}
            style={style}
            onSubmit={handleSubmit}
        >
            <InputField
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <InputField
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <TextAreaField
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
            />
            <div className="form__actions">
                <Button type="submit">Submit</Button>
                <Button type="button" onClick={handleClear} variant="secondary">
                    Clear
                </Button>
            </div>
        </form>
    );
};

export default Form;
