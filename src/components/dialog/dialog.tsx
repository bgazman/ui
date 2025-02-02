import React from "react";
import "@components/dialog/dialog.css";

export type DialogVariant = "default" | "fullscreen";

export interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    variant?: DialogVariant;
    title?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Dialog: React.FC<DialogProps> = ({
                                           isOpen,
                                           onClose,
                                           variant = "default",
                                           title,
                                           children,
                                           className = "",
                                           style,
                                       }) => {
    if (!isOpen) return null;
    return (
        <div className={`dialog-overlay ${className}`} style={style}>
            <div className={`dialog dialog--${variant}`}>
                <div className="dialog__header">
                    {title && <h3 className="dialog__title">{title}</h3>}
                    <button className="dialog__close" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="dialog__body">{children}</div>
            </div>
        </div>
    );
};

export default Dialog;
