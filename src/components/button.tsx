interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'icon';
    label?: string; // Add the label prop
}

const Button: React.FC<ButtonProps> = ({
    type = 'button',
    children,
    onClick,
    className = '',
    style,
    disabled = false,
    size = 'md',
    variant = 'default',
    label, // Destructure the label prop
}) => {
    const sizeClasses = {
        sm: 'p-1',
        md: variant === 'icon' ? 'p-2' : 'px-4 py-2',
        lg: variant === 'icon' ? 'p-3' : 'px-6 py-3'
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${sizeClasses[size]} bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
            style={style}
        >
            {label || children} {/* Use the label prop if provided, otherwise use children */}
        </button>
    );
};

export default Button;