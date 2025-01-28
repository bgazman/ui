import React from 'react';

interface LinkButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children, className = '', style }) => {
    return (
        <a
            href={href}
            className={`inline-block px-4 py-2 bg-[var(--button-bg-color)] text-[var(--button-text-color)] rounded hover:bg-[var(--button-hover-bg-color)] focus:outline-none focus:ring focus:ring-[var(--button-focus-ring-color)] ${className}`}
            style={style}
        >
            {children}
        </a>
    );
};

export default LinkButton;