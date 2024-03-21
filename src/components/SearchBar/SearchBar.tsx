import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SearchBar.css';
import { Button } from '../Button/Button';

interface SearchBarProps {
  onSearch: (query: string) => void; // Define the type of onSearch prop
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://lldev.thespacedevs.com/2.2.0/launch/?mode=list&search=${value}`
        );

        setSuggestions(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [value]);

  const handleSearch = () => {
    onSearch(value); // Trigger the search action with the current value
  };

  return (
    <div className="searchbox">
      <input
        type="text"
        className="textbox"
        placeholder="Search data..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleSearch} className="buttonSearchbar">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
