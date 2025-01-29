import React from 'react';

interface LinkButtonProps {
    href?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href = '#', children, className = '', style, onClick }) => {
    const isExternal = href.startsWith('http') || href.startsWith('//');

    return (
        <a
            href={href}
            onClick={(event) => {
                if (href === '#' && onClick) {
                    event.preventDefault(); // Prevent navigation when used as a button
                    onClick(event);
                }
            }}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className={`block px-4 py-2 rounded transition-colors text-decoration-none ${className}`}
            style={style}
        >
            {children}
        </a>
    );
};

export default LinkButton;