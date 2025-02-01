import React from "react";

type LinkComponentProps = {
    href: string;
    isActive?: boolean; // Default to false
    className?: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
    role?: string;
    "aria-haspopup"?: boolean;
    "aria-expanded"?: boolean;
    children: React.ReactNode;
};

const LinkComponent: React.FC<LinkComponentProps> = ({
                                                         href,
                                                         isActive = false, // Default value
                                                         className = "", // Default to empty string
                                                         children
                                                     }) => (
    <a
        href={href}
        className={`block px-2 py-1.5 text-sm rounded-md transition-colors hover:bg-[var(--bg-alt1)] 
            ${isActive ? 'bg-[var(--bg-alt1)] text-[var(--text-primary)] font-semibold' : 'text-[var(--text-secondary)]'}
            ${!href ? 'pointer-events-none opacity-50' : ''} ${className}`}
        role="link"
        aria-current={isActive ? "page" : undefined} // Accessibility improvement
    >
        {children}
    </a>
);

export default LinkComponent;
