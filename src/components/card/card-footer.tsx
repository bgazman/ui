// CardFooter.tsx
import React from 'react';
import Button from "@components/button/button.tsx";

interface CardFooterProps {
    actionLink?: string;
    actionText?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ actionLink, actionText }) => {
    if (!actionLink || !actionText) return null;

    return (
        <div className="mt-4 flex justify-center">
            <Button onClick={() => (window.location.href = actionLink)}>
                {actionText}
            </Button>
        </div>
    );
};

export default CardFooter;
