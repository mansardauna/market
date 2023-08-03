import React, { useState, useEffect, useRef } from 'react';

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);


  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      // Click occurred outside the search component
      setSearchTerm(''); // Reset the search term
      setSearchResults([]); // Clear the search results
    }
  };



  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);



    // Filter the data based on the search term    // Check if data is an array before using the filter method
    if (Array.isArray(data)) {
      // Filter the data based on the search term
      const filteredData = data.filter(
        (item) => item.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredData);
    }
  };

  return (
    <div ref={searchRef} className="" >
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Enter your search term...
        "
        className='text-black'
      />

      {searchResults.length > 0 && ( // Conditional rendering of the <ul> element
        <div className="search-results">
          <ul>
            {searchResults.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default Search;
