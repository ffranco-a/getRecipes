import React, { useState } from 'react';
import { connect } from 'react-redux';
import style from './moduleCSS/SearchBar.module.css';
import { getRecipesByName, order } from '../actions';

function SearchBar({ getRecipesByName, order }) {
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSearch = () => {
    getRecipesByName(name);
    setName('');
  };

  const handleOrder = e => {
    order(e.target.value);
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
      <select type="options" onChange={handleOrder}>
        <option>Order by</option>
        <option value="title-ascendent">Title A-Z</option>
        <option value="title-descendent">Title Z-A</option>
        <option value="score-descendent">Best Score</option>
        <option value="score-ascendent">Score</option>
        <option value="health-descendent">Best Health Score</option>
        <option value="health-ascendent">Health Score</option>
      </select>
    </div>
  );
}

export default connect(null, { getRecipesByName, order })(SearchBar);
