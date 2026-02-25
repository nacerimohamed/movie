import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import styles from './SearchBar.module.css';
export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((value) => onSearch(value), 500),
    [onSearch]
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search">
      <input
        type="text"
        placeholder="Search movies or series..."
        value={query}
        onChange={handleChange}
      />
    </form>
  );
}