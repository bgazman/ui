import React from "react";
import clsx from "clsx";
import InputField from "@components/input-field.tsx";
import TextArea from "@components/text-area.tsx";
import Button from "@components/button.tsx";
import Typography from "@components/typography.tsx"; // ✅ Use Typography

export type FormVariant = "default" | "card" | "minimal" | "bordered";

export interface FormField {
    type: "input" | "textarea";
    name: string;
    label?: string;
    placeholder?: string;
    error?: string;
    className?: string;
    [key: string]: unknown;
}

export interface FormProps {
    fields: FormField[];
    onSubmit: (data: Record<string, string>) => void;
    variant?: FormVariant;
    className?: string;
}

const Form: React.FC<FormProps> = ({ fields, onSubmit, variant = "default", className = "" }) => {
    const [formData, setFormData] = React.useState<Record<string, string>>({});

    const handleChange = (name: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(formData);
    };

    const formClass = clsx(
        "flex flex-col gap-4 p-6",
        {
            default: "bg-surface rounded-lg shadow-md border border-border",
            card: "bg-primary shadow-lg rounded-xl p-8 border border-primary",
            minimal: "bg-transparent p-0 shadow-none border-none",
            bordered: "border-2 border-primary p-8 rounded-md",
        }[variant],
        className
    );

    return (
        <form onSubmit={handleSubmit} className={formClass}>
            {fields.map((field) => (
                <div key={field.name} className="flex flex-col">
                    {field.type === "input" ? (
                        <InputField
                            id={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            {...field}
                            error={undefined} // Remove error from InputField
                        />
                    ) : (
                        <TextArea
                            id={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            {...field}
                            error={undefined} // Remove error from TextArea
                        />
                    )}
                    {field.error && (
                        <Typography as="span" variant="caption" font="sans" weight="normal" className="mt-2 text-danger">
                            {field.error}
                        </Typography>
                    )}
                </div>
            ))}

            <Button className="w-full py-3 mt-4 rounded-md text-center font-medium transition-all duration-200 bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Submit
            </Button>
        </form>
    );
};

export default Form;