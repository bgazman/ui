import React from 'react';

export type MainProps = {
    bgColor?: string;
    textColor?: string;
    padding?: string;
    children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({
    bgColor = "var(--main-bg)",
    textColor = "var(--main-text-color)",
    padding = "var(--main-padding)",
    children
}) => {
    return (
        <main style={{ backgroundColor: bgColor, color: textColor, padding: padding }}>
            {children}
        </main>
    );
};

export default Main;