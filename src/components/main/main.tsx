import React from 'react';

export type MainProps = {
    bgColor?: string;
    textColor?: string;
    padding?: string;
    children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({

    children
}) => {
    return (
        <main className="main">
            {children}
        </main>
    );
};

export default Main;