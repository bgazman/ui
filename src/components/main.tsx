import React from 'react';

export type MainProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

const Main: React.FC<MainProps> = ({ children, className, style }) => {
    return (
        <main className={className} style={style}>
            {children}
        </main>
    );
};

export default Main;