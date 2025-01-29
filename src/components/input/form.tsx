import React, { useState } from 'react';
import InputField from './input-field.tsx';
import TextAreaField from './text-area.tsx';
import SubmitButton from '../button/submit-button.tsx';

interface FormProps {
    onSubmit: (data: Record<string, string>) => void;
    className?: string;
    style?: React.CSSProperties;
    theme?: string;
}

const Form: React.FC<FormProps> = ({ onSubmit, className = '', style, theme = 'light' }) => {
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

    return (
        <form
            className={`space-y-6 max-w-lg mx-auto ${className}`}
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
                className="bg-var(--input-bg-color)"
                theme={theme}
            />
            <InputField
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-var(--input-bg-color)"
                theme={theme}
            />
            <TextAreaField
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-var(--input-bg-color)"
                theme={theme}
            />
            <SubmitButton label="Submit" />
        </form>
    );
};

export default Form;