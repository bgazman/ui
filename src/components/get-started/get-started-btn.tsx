import React, { useState } from 'react';
import './get-started.css';

interface GetStartedButtonProps {
    href: string;
    label: string;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ href, label }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="get-started-container">
            <input
                type="text"
                className="get-started-input"
                placeholder="Enter your email"
                value={inputValue}
                onChange={handleInputChange}
            />
            <a href={href} className="get-started-btn">
                {label}
            </a>
        </div>
    );
};

export default GetStartedButton;