import React from 'react';

interface SectionProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({
                                             title,
                                             description,
                                             children,
                                             className = '',
                                             style,
                                         }) => (
    <section className={`container mx-auto px-4 py-12 ${className}`} style={style}>
        <div className="text-center mb-12">
            {(title || description) && (
                <div className="mb-8">
                    {title && <h2 className="text-3xl font-bold text-gray-900">{title}</h2>}
                    {description && <p className="mt-4 text-lg text-gray-600">{description}</p>}
                </div>
            )}
            {/* Ensure proper layout for children */}
            <div className="flex flex-wrap gap-6 justify-center">{children}</div>
        </div>
    </section>
);

export default Section;
