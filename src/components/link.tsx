import React from 'react';
import classNames from 'classnames';

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
        className={classNames(
            'block px-2 py-1.5 text-sm rounded-md transition-colors hover:bg-[var(--bg-alt1)]',
            {
                'bg-[var(--bg-alt1)] text-[var(--text-primary)]': isActive,
                'text-[var(--text-secondary)]': !isActive,
            },
            className
        )}
        style={style}
    >
        {label}
    </a>
);

export default LinkComponent;