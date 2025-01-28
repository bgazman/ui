import React, { useState } from 'react';
import Button from '@components/button';

interface FormProps {
    onSubmit: (data: Record<string, string>) => void;
    className?: string;
    style?: React.CSSProperties;
}

const Form: React.FC<FormProps> = ({ onSubmit, className = '', style }) => {
    const [formData, setFormData] = useState<Record<string, string>>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form
            className={`space-y-6 max-w-lg mx-auto ${className}`}
            style={style}
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 font-semibold text-gray-700">
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 font-semibold text-gray-700">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 font-semibold text-gray-700">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <Button type="submit" label="Submit" />
        </form>
    );
};

export default Form;
