import React, { ElementType, ReactNode } from 'react';

interface BoxProps<T extends ElementType = 'div'> {
    as?: T; // Dynamic element type
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Box = <T extends ElementType = 'div'>({
                                                as,
                                                children,
                                                className,
                                                style,
                                                ...rest
                                            }: BoxProps<T> & React.ComponentPropsWithoutRef<T>) => {
    const Component = as || 'div'; // Default to 'div'
    return (
        <Component className={className} style={style} {...rest}>
            {children}
        </Component>
    );
};

export default Box;
