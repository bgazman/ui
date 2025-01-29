import React from 'react';
import Button from '@components/button/button.tsx';

interface SubmitButtonProps {
    label: string;
    className?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, className = '' }) => (
    <Button type="submit" className={className}>
        {label}
    </Button>
);

export default SubmitButton;