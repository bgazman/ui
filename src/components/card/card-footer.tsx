import React from 'react';
import Button from '@components/button';

interface CardFooterProps {
    actionLink?: string;
    actionText?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ actionLink, actionText }) => (
    <>
        {actionLink && actionText && (
            <Button
                className="mt-4"
                style={{ textDecoration: 'none' }}
                onClick={() => window.location.href = actionLink}
            >
                {actionText}
            </Button>
        )}
    </>
);

export default CardFooter;