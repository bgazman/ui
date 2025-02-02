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
                                                         variant = 'default',
                                                         className = '',
                                                         children,
                                                         ...props
                                                     }) => {
    return (
        <a
            href={href}
            className={`link link--${variant} ${isActive ? "link--active" : ""} ${!href ? "pointer-events-none opacity-50" : ""} ${className}`}
            role="link"
            aria-current={isActive ? "page" : undefined}
            {...props}
        >
            {children}
        </a>
    );
};

export default LinkComponent;
