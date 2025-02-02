import React from 'react';

export interface InputFieldProps {
    id: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
                                                   id,
                                                   name,
                                                   type,
                                                   placeholder,
                                                   value,
                                                   onChange,
                                                   required = false,
                                                   className = "",
                                               }) => {

    return (
        <div className="input-field-wrapper">
            <label htmlFor={id} className="input-field__label">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={`input-field ${className}`}
            />
        </div>
    );
};

export default InputField;
