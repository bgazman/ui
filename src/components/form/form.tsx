import React, { useState } from 'react';
import InputField from '@components/input-field/input-field';
import TextAreaField from '@components/text-area/text-area';
import Button from '@components/button/button';

export type FormVariant = 'default' | 'centered' | 'compact';

export interface FormProps {
    onSubmit: (data: Record<string, string>) => void;
    className?: string;
    variant?: FormVariant;
    style?: React.CSSProperties;
}

const Form: React.FC<FormProps> = ({
                                       onSubmit,
                                       className = "",
                                       variant = 'default',
                                       style,
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

    return (
        <form
            className={`form ${variant !== 'default' ? `form--${variant}` : ''} ${className}`}
            style={style}
            onSubmit={handleSubmit}
        >
            {/* Generic Input Fields */}
            {Object.entries(formData).map(([key, value]) =>
                key === 'message' ? (
                    <TextAreaField
                        key={key}
                        id={key}
                        name={key}
                        placeholder={`Your ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                        value={value}
                        onChange={handleChange}
                        required
                    />
                ) : (
                    <InputField
                        key={key}
                        id={key}
                        name={key}
                        type={key === 'email' ? 'email' : 'text'}
                        placeholder={`Your ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                        value={value}
                        onChange={handleChange}
                        required
                    />
                )
            )}

            {/* Form Actions */}
            <div className="form__actions">
                <Button type="submit" variant="primary">Submit</Button>
                <Button type="button" onClick={handleClear} variant="secondary">
                    Clear
                </Button>
            </div>
        </form>
    );
};

export default Form;
