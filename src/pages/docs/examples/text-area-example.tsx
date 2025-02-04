import React, { useState } from 'react';
import TextArea from '@components/text-area.tsx';

const TextAreaExample: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <div className="text-area-example">
            <TextArea
                label="Default"
                placeholder="Enter some text..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="custom-text-area"
                variant="default"
            />
            <TextArea
                label="Error"
                placeholder="Enter some text..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="custom-text-area"
                variant="error"
            />
            <TextArea
                label="Success"
                placeholder="Enter some text..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="custom-text-area"
                variant="success"
            />
            <TextArea
                label="Disabled"
                placeholder="Enter some text..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="custom-text-area"
                variant="disabled"
                disabled
            />
        </div>
    );
};

export default TextAreaExample;