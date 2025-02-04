import React from "react";
import clsx from "clsx";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
                                                label,
                                                error,
                                                className,
                                                ...rest
                                            }) => {
    return (
        <label className="block w-full mb-md">
            {label && <span className="block mb-xs font-medium text-text-primary">{label}</span>}
            <input
                className={clsx(
                    "w-full",
                    "border border-border",
                    "bg-bg-primary text-text-primary",
                    "rounded-md px-sm py-xs",
                    "focus:outline-none focus:ring-2 focus:ring-text-tertiary",
                    error && "border-red-500",
                    className
                )}
                {...rest}
            />
            {error && <span className="text-red-500 text-sm mt-xs">{error}</span>}
        </label>
    );
};
