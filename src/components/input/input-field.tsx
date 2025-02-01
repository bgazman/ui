import React from "react";

interface InputFieldProps {
    id: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    className?: string;
    theme?: string;
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
                                                   theme = "light",
                                               }) => (
    <div className="flex flex-col">
        <label htmlFor={id} className="mb-2 font-semibold text-gray-700">
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
            className={`p-2 border rounded focus:outline-none focus:ring ${className}`}
            style={{
                backgroundColor: `var(--input-bg-color-${theme})`,
                borderColor: `var(--input-border-color-${theme})`,
                boxShadow: `0 0 0 3px var(--input-focus-ring-color-${theme})`,
            }}
        />
    </div>
);

export default InputField;
