import React, { useState } from 'react';

interface SelectMenuProps {
    options: { value: string; label: string }[];
    className?: string;
    style?: React.CSSProperties;
}

const SelectMenu: React.FC<SelectMenuProps> = ({ options, className = '', style }) => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className={`space-y-[var(--spacing-md)] ${className}`} style={style}>
            <label htmlFor="select-menu" className="block text-[var(--text-primary)]">
                Choose an option:
            </label>
            <select
                id="select-menu"
                value={selectedOption}
                onChange={handleChange}
                className="
          bg-[var(--input-bg-color)]
          text-[var(--text-primary)]
          border border-[var(--border-color)]
          rounded-[var(--border-radius-md)]
          p-[var(--spacing-sm)]
        "
            >
                <option value="">--Please choose an option--</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <p className="text-[var(--text-secondary)]">Selected option: {selectedOption}</p>
        </div>
    );
};

export default SelectMenu;
