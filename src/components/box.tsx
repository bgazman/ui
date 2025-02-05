import React, { forwardRef } from "react";

export interface BoxProps<T extends React.ElementType> {
    as?: T;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const Box = forwardRef<HTMLElement, BoxProps<any>>(({
    as: Component = "div",
    id,
    className = "",
    style,
    children,
    ...rest
}, ref) => {
    return (
        <Component ref={ref} id={id} className={className} style={style} {...rest}>
            {children}
        </Component>
    );
});

export default Box;