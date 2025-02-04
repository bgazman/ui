import React, { useState } from 'react';
import {InputField} from '@components/input-field.tsx';

const InputFieldExample: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <h2>Input Field Example</h2>
            <InputField
                id="example-input"
                name="example"
                type="text"
                placeholder="Enter some text"
                value={inputValue}
                onChange={handleChange}
                required
                theme="light"
            />
            <p>Current value: {inputValue}</p>
        </div>
    );
};

export default InputFieldExample;