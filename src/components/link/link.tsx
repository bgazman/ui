import React from "react";

type LinkComponentProps = {
    href: string;
    label: string;
    isActive: boolean;
    className?: string;
    style?: React.CSSProperties;
};

const LinkComponent: React.FC<LinkComponentProps> = ({
    href,
    label,
    isActive,
    className,
    style
}) => (
    <a
        href={href}
        className={`block px-2 py-1.5 text-sm rounded-md transition-colors hover:bg-[var(--bg-alt1)] ${isActive ? 'bg-[var(--bg-alt1)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'} ${className}`}
        style={style}
    >
        {label}
    </a>
);

export default LinkComponent;