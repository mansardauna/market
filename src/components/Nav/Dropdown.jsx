import React, { useState } from 'react';

const DropdownMenu = () => {
  const options = ['Popular Today', 'Option 2', 'Option 3', 'Option 4'];

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='mb-2 hidden md:block'>

      <select id="dropdown" value={selectedOption} onChange={handleOptionChange} className='drop bg-transparent text-white w-36 text-sm px-2 outline-none border-gray-300 border rounded-md cursor-pointer py-2'>

        {options.map((option) => (
          <option key={option} value={option} className='bg-zinc-800 text-white'>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
