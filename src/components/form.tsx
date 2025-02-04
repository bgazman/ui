import React, { useState } from "react";
import { InputField } from "@components/input-field.tsx";
import TextAreaField from "@components/text-area.tsx";
import { Button } from "@components/button.tsx";

export type FormVariant = "default" | "centered" | "compact";

export interface FormProps {
    onSubmit: (data: Record<string, string>) => void;
    className?: string;
    variant?: FormVariant;
    style?: React.CSSProperties;
}

const Form: React.FC<FormProps> = ({
                                       onSubmit,
                                       className = "",
                                       variant = "default",
                                       style,
                                   }) => {
    const [formData, setFormData] = useState<Record<string, string>>({
        name: "",
        email: "",
        message: "",
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
            name: "",
            email: "",
            message: "",
        });
    };

    // Base form styles
    const baseClasses =
        "flex flex-col gap-[var(--spacing-md)] w-full max-w-lg p-[var(--spacing-md)] bg-[var(--bg-primary)] rounded-[var(--border-radius-lg)]";
    // Additional inline style for outline that Tailwind doesn't apply via @apply
    const outlineStyle = { outline: "3px solid var(--border-color)", outlineOffset: "10px" };

    // Variant overrides
    const variantClasses = {
        default: "",
        centered: "mx-auto text-center",
        compact: "max-w-sm p-[var(--spacing-sm)]",
    };

    return (
        <form
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            style={{ ...outlineStyle, ...style }}
            onSubmit={handleSubmit}
        >
            {Object.entries(formData).map(([key, value]) =>
                key === "message" ? (
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
                        type={key === "email" ? "email" : "text"}
                        placeholder={`Your ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                        value={value}
                        onChange={handleChange}
                        required
                    />
                )
            )}

            <div className="mt-[var(--spacing-md)] flex flex-col gap-[var(--spacing-xs)]">
                <Button type="submit" variant="primary">
                    Submit
                </Button>
                <Button type="button" onClick={handleClear} variant="secondary">
                    Clear
                </Button>
            </div>
        </form>
    );
};

export default Form;
