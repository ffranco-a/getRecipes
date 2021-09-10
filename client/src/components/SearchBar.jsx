import React, { useState } from 'react';
import { connect } from 'react-redux';
import style from './moduleCSS/SearchBar.module.css';
import { getRecipesByName, order } from '../actions';

function SearchBar({ getRecipesByName, order }) {
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();
    getRecipesByName(name);
    // setName('');
  };

  const handleOrder = e => {
    console.log(e.target.value);
    order(e.target.value);
    // if (e.target.value.includes('alphabetic')) {
    //   orderByName(e.target.value);
    // }
    // if (e.target.value.includes('score')) {
    //   orderByScore(e.target.value);
    // }
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
        <option value="default">Order by</option>
        <option value="title-ascendent">Title A-Z</option>
        <option value="title-descendent">Title Z-A</option>
        <option value="score-ascendent">Score</option>
        <option value="score-descendent">Score desc</option>
      </select>
    </div>
  );
}

export default connect(null, { getRecipesByName, order })(SearchBar);
