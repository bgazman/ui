import React from 'react';
import { Properties } from 'csstype';

export interface LinkButtonProps {
    href?: string;
    children: React.ReactNode;
    className?: string;
    style?: Properties<string | number>;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({
    href = '#',
    children,
    className = '',
    style,
    onClick,
}) => {
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
            style={{
                ...style,
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-primary)',
                '--hover-bg-color': 'var(--button-hover-bg-color)',
                '--hover-text-color': 'var(--button-hover-text-color)',
            } as Properties<string | number>}
        >
            {children}
        </a>
    );
};

export default LinkButton;