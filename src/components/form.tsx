import React, { useState } from "react";
import { InputField } from "@components/input-field.tsx";
import TextArea from "@components/text-area.tsx";
import Button from "@components/button.tsx";

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

    const baseClasses =
        "flex flex-col gap-[var(--spacing-md)] w-full max-w-lg p-[var(--spacing-md)] bg-[var(--bg-primary)] rounded-[var(--border-radius-lg)]";
    const outlineStyle = { outline: "3px solid var(--border-color)", outlineOffset: "10px" };

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
            <InputField
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
            />

            <InputField
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
            />

            <TextArea
                name="message"
                label="Your Message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleTextAreaChange}
                className="custom-text-area"
                variant="default"
                required
            />

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