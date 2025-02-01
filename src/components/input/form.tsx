import React, { useState } from 'react';
import InputField from './input-field';
import TextAreaField from './text-area';
import Button from '@components/button/button';

export type FormVariant = 'default' | 'centered' | 'compact';

interface FormProps {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    const baseClasses = `
    space-y-[var(--spacing-lg)]
    max-w-lg mx-auto
    border border-[var(--border-color)]
    p-[var(--spacing-lg)]
    rounded-[var(--border-radius-lg)]
  `;

    const variantClasses: Record<FormVariant, string> = {
        default: '',
        centered: 'justify-center',
        compact: 'space-y-[var(--spacing-md)] max-w-md',
    };

    const selectedVariantClasses = variantClasses[variant] || variantClasses.default;

    return (
        <form
            className={`${baseClasses} ${className}`}
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
                className="bg-[var(--input-bg-color)] rounded-[var(--border-radius-md)]"
            />
            <InputField
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[var(--input-bg-color)] rounded-[var(--border-radius-md)]"
            />
            <TextAreaField
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-[var(--input-bg-color)] rounded-[var(--border-radius-md)]"
            />
            <div className={`flex space-x-[var(--spacing-lg)] ${selectedVariantClasses}`}>
                <Button type="submit">Submit</Button>
                <Button type="button" onClick={handleClear} variant="secondary">
                    Clear
                </Button>
            </div>
        </form>
    );
};

export default Form;
