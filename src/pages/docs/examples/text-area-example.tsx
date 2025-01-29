import React, { useState } from 'react';
import TextArea from '@components/input/text-area';

const TextAreaExample: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <div className="text-area-example">
            <TextArea
                id="example-text-area"
                name="example-text-area"
                placeholder="Enter some text..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                className="custom-text-area"
                theme="light"
            />
        </div>
    );
};

export default TextAreaExample;