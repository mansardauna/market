import React, { useState } from 'react';
import '../index.css'

const DropdownMenu = () => {
  const options = ['Popular Today', 'Option 2', 'Option 3', 'Option 4'];

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>

      <select id="dropdown" value={selectedOption} onChange={handleOptionChange} className='drop'>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
