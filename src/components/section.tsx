import React from 'react';
    import Box from '@components/box';

    interface SectionProps {
        id?: string;
        title?: string;
        description?: string;
        children?: React.ReactNode;
        className?: string;
        style?: React.CSSProperties;
    }

    const Section: React.FC<SectionProps> = ({
        id,
        title,
        description,
        children,
        className = '',
        style,
    }) => (
        <Box
            as="section"
            id={id}
            className={`w-full px-4 sm:px-8 lg:px-16 py-24 ${className}`}
            style={{ ...style, width: '100%', margin: '0 auto' }}
        >
            <Box className="w-full h-full bg-cover bg-center bg-no-repeat">
                <Box className="mx-auto w-full text-center mb-12">
                    {(title || description) && (
                        <Box className="mb-8">
                            {title && (
                                <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                    {title}
                                </h2>
                            )}
                            {description && (
                                <p className="text-lg sm:text-xl" style={{ color: 'var(--text-secondary)' }}>
                                    {description}
                                </p>
                            )}
                        </Box>
                    )}
                    {children}
                </Box>
            </Box>
        </Box>
    );

    export default Section;