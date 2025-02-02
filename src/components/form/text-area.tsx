import React from 'react';

export interface TextAreaProps {
    id: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
                                               id,
                                               name,
                                               placeholder,
                                               value,
                                               onChange,
                                               required = false,
                                               className = '',
                                           }) => {
    return (
        <div className="textarea-wrapper">
            <label htmlFor={id} className="textarea__label">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={`textarea ${className}`}
            />
        </div>
    );
};

export default TextArea;