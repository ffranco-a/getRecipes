import React, { useState } from 'react';
import { connect } from 'react-redux';
import style from './moduleCSS/SearchBar.module.css';
import { getRecipesByName } from '../actions';

function NavBar({ getRecipesByName }) {
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();
    getRecipesByName(name);
    setName('');
  };

  return (
    <div className={style.searchBarContainer}>
      <input
        className={style.searchBar}
        type="text"
        placeholder="Search for recipes..."
        onChange={handleChange}
      />
      <button onClick={handleSearch} className={style.searchButton}>
        search
      </button>
    </div>
  );
}

export default connect(null, { getRecipesByName })(NavBar);
