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
                                                          id,
                                                          ...rest
                                                      }) => {
    return (
        <div className="flex flex-col w-full">
            {label && (
                <label
                    htmlFor={id}
                    className="mb-1 text-text-primary font-medium"
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                className={clsx(
                    "w-full",
                    "border border-border",
                    "bg-bg-primary text-text-primary",
                    "rounded-md p-md",
                    "outline-none transition-all duration-fast ease-in-out",
                    "focus:ring-2 focus:ring-button-hover",
                    error && "border-[var(--border-color-error)]",
                    className
                )}
                {...rest}
            />
            {error && (
                <div className="mt-2 text-sm text-[var(--text-error)]">
                    {error}
                </div>
            )}
        </div>
    );
};