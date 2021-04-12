import React, { useState } from 'react';

import styles from './SearchBar.module.scss';

const SearchBar = ({ searchMovie }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchInput) searchMovie(searchInput);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.search__bar}>
      <div className={styles['search__bar--main']}>
        <img src="/images/search.png" alt="search-icon" width="16px" height="16px" />
        <input type="text" placeholder="Name of a movie" onChange={(e) => setSearchInput(e.target.value)} />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
