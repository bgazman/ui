import React from "react";

export type LinkVariant = "default" | "primary" | "secondary" | "disabled";

export interface LinkComponentProps {
    href: string;
    isActive?: boolean;
    variant?: LinkVariant;
    className?: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
    role?: string;
    "aria-haspopup"?: boolean;
    "aria-expanded"?: boolean;
    children: React.ReactNode;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
                                                         href,
                                                         isActive = false,
                                                         variant = "default",
                                                         className = "",
                                                         children,
                                                         ...props
                                                     }) => {
    // Base classes for all links
    const baseClasses = "block px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-sm rounded-md transition-colors";

    // Variant-specific classes
    const variantClasses: Record<LinkVariant, string> = {
        default: "text-[var(--text-secondary)] hover:bg-[var(--bg-alt1)]",
        primary: "text-[var(--text-primary)] font-semibold hover:bg-[var(--bg-alt1)]",
        secondary: "text-[var(--text-tertiary)] hover:bg-[var(--bg-alt2)]",
        disabled: "pointer-events-none opacity-50",
    };

    // Active state overrides variant styles if needed
    const activeClasses = isActive ? "bg-[var(--bg-alt1)] text-[var(--text-primary)] font-semibold" : "";

    // If href is falsy, disable pointer events and reduce opacity
    const disabledClasses = !href ? "pointer-events-none opacity-50" : "";

    return (
        <a
            href={href}
            className={`${baseClasses} ${variantClasses[variant]} ${activeClasses} ${disabledClasses} ${className}`.trim()}
            role="link"
            aria-current={isActive ? "page" : undefined}
            {...props}
        >
            {children}
        </a>
    );
};

export default LinkComponent;
