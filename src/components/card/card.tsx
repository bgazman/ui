import React from "react";
import Button from "@components/button/button";

export interface CardProps {
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
                                       className = "",
                                       style,
                                   }) => {
    // Combine your .card base class with any passed-in class
    const combinedClassName = `card ${className}`.trim();

    return (
        <div className={combinedClassName} style={style}>
            {/* Header */}
            <div className="card-header">{title}</div>

            {/* Body */}
            <div className="card-body">
                {description && <p className="card-body-description">{description}</p>}
                {children}
            </div>

            {/* Footer */}
            {actionLink && actionText && (
                <div className="card-footer">
                    <Button onClick={() => (window.location.href = actionLink)}>
                        {actionText}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Card;
