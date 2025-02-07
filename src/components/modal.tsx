import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import Animated from "@components/animated.tsx";

export type ModalVariant = "default" | "fullscreen" | "centered";
export type ModalSize = "sm" | "md" | "lg";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    variant?: ModalVariant;
    size?: ModalSize;
    children: React.ReactNode;
    className?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    variant = "default",
    size = "md",
    children,
    className = "",
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isOpen]);

    const handleClickOutside = (event: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    const modalClass = clsx(
        "relative bg-surface text-content border border-border shadow-lg rounded-lg max-h-[90vh] overflow-y-auto",
        {
            'sm': 'w-full max-w-sm',
            'md': 'w-full max-w-md',
            'lg': 'w-full max-w-lg'
        }[size],
        variant === "fullscreen" && "w-full h-full rounded-none",
        className
    );

    return (
        <>
            {isOpen && (
                <Animated className="fixed inset-0 grid place-items-center z-50" type="modal">
                    <Animated
                        className="absolute inset-0 bg-surface-lowered/75 backdrop-blur-sm"
                        onClick={handleClickOutside}
                        children={null}
                    />

                    <Animated className={modalClass} ref={modalRef} type="modal">
                        {title && (
                            <div className="sticky top-0 p-4 border-b border-border flex justify-between items-center bg-surface/80 backdrop-blur-sm">
                                <h2 className="text-lg font-semibold">{title}</h2>
                                <button
                                    className="text-content-muted hover:text-content transition-colors"
                                    onClick={onClose}
                                >
                                    ✕
                                </button>
                            </div>
                        )}

                        <div className="p-4">{children}</div>
                    </Animated>
                </Animated>
            )}
        </>
    );
};

export default Modal;