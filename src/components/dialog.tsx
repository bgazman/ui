import React from "react";

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

    const dialogClass = variant === "fullscreen"
        ? "w-full h-full m-0 rounded-none"
        : "rounded-lg max-w-lg w-full";

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${className}`} style={style}>
            <div className={`bg-white shadow-lg p-6 ${dialogClass}`}>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
                    {title && <h3 className="text-lg font-bold">{title}</h3>}
                    <button
                        className="text-2xl leading-none hover:text-gray-700 focus:outline-none"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                <div className="overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Dialog;