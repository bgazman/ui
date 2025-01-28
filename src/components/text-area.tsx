import React from 'react';

interface TextAreaProps {
    id: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    className?: string;
    theme?: string; // Add theme prop
}

const TextArea: React.FC<TextAreaProps> = ({
    id,
    name,
    placeholder,
    value,
    onChange,
    required = false,
    className = '',
    theme = 'light', // Default theme
}) => (
    <div className="flex flex-col">
        <label htmlFor={id} className="mb-2 font-semibold text-gray-700">
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
        <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
            style={{ backgroundColor: `var(--input-bg-color-${theme})` }} // Use theme variable
        />
    </div>
);

export default TextArea;