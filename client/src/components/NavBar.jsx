import React, { useState } from 'react';
import { connect } from 'react-redux';
import style from './moduleCSS/NavBar.module.css';
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
    <div className={style.NavBar}>
      <input
        className={style.searchBar}
        type="text"
        placeholder="Search for recipes..."
        onChange={handleChange}
      />
      <button onClick={handleSearch} className={style.searchButton}>
        buscar
      </button>
    </div>
  );
}

export default connect(null, { getRecipesByName })(NavBar);
