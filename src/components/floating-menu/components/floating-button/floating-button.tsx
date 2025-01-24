
type Position = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

interface FloatingButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    ariaLabel?: string;
    tooltip?: string;
    position?: Position;
    className?: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
                                                           children,
                                                           onClick,
                                                           ariaLabel,
                                                           tooltip,
                                                           position = 'bottom-right',
                                                           className = '',
                                                       }) => {
    return (
        <div
            className={`floating-button-container ${position}`}
            title={tooltip}
        >
            <button
                onClick={onClick}
                aria-label={ariaLabel}
                className={`floating-button ${className}`}
            >
                {children}
            </button>
        </div>
    );
};

export default FloatingButton;