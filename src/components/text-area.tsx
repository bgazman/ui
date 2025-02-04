import React from "react";

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
                                               className = "",
                                           }) => {
    return (
        <div className={`flex flex-col gap-[var(--spacing-xs)] ${className}`}>
            <label htmlFor={id} className="text-[var(--text-primary)] font-medium">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full p-[var(--spacing-md)] bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-[var(--border-radius-md)] shadow-sm transition-colors"
            />
        </div>
    );
};

export default TextArea;
