import React from 'react';
import CardHeader from '@components/card/card-header';
import CardBody from '@components/card/card-body';
import CardFooter from '@components/card/card-footer';
import CardContainer from "@components/card/card-container";

interface CardProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
    actionLink?: string;
    actionText?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    children,
    actionLink,
    actionText,
    className = '',
    style,
}) => (
    <CardContainer className={`max-w-md mx-auto rounded-[var(--border-radius-md)] ${className}`} style={style}>
        <CardHeader title={title} />
        <CardBody description={description}>{children}</CardBody>
        <CardFooter actionLink={actionLink} actionText={actionText} />
    </CardContainer>
);

export default Card;