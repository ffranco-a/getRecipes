import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import style from './moduleCSS/SearchBar.module.css';
import { getRecipes, getRecipesByName, order, filter } from '../actions';
import { TiRefresh, TiZoom } from 'react-icons/ti';

function SearchBar({ getRecipes, getRecipesByName, order, filter }) {
  const [name, setName] = useState('');
  const [searched, setSearched] = useState('');
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    filter(diets);
  }, [filter, diets]);

  const handleRefresh = () => {
    getRecipes();
    setSearched('');
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleEnter = e => {
    if (e.code === 'Enter') {
      handleSearch();
    } else return;
  }

  const handleSearch = () => {
    getRecipesByName(name);
    setSearched(name);
    setName('');
  };

  const handleOrder = e => {
    order(e.target.value);
  };

  const handleFilter = e => {
    if (e.target.checked) {
      setDiets([...diets, e.target.id]);
    }
    if (!e.target.checked) {
      let newDiets = diets.filter(element => element !== e.target.id);
      setDiets(newDiets);
    }
  };

  return (
    <div className={style.searchBarContainer}>
      <div className={style.searchBar}>
        <TiRefresh
          onClick={handleRefresh}
          className={style.refresh}
          title="Refresh recipes list"
        />
        <input
          className={style.searchBarInput}
          type="text"
          value={name}
          placeholder={searched === '' ? "Search for recipes..." : searched}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <TiZoom onClick={handleSearch} className={style.searchButton} />
        <label>Order by:</label>
        <select type="options" onChange={handleOrder} className={style.order}>
          <option value="default">--Select--</option>
          <option value="title-ascendent">Title A-Z</option>
          <option value="title-descendent">Title Z-A</option>
          <option value="score-descendent">Best Score</option>
          <option value="score-ascendent">Score</option>
          <option value="health-descendent">Best Health Score</option>
          <option value="health-ascendent">Health Score</option>
        </select>
      </div>
      <div className={style.filterDiets}>
        Filter by diets:
        <label htmlFor="gluten">
          <input type="checkbox" id="gluten" onChange={handleFilter} />
          Gluten Free
        </label>
        <label htmlFor="dairy">
          <input type="checkbox" id="dairy" onChange={handleFilter} />
          Dairy Free
        </label>
        <label htmlFor="vegetarian">
          <input type="checkbox" id="vegetarian" onChange={handleFilter} />
          Vegetarian
        </label>
        <label htmlFor="vegan">
          <input type="checkbox" id="vegan" onChange={handleFilter} />
          Vegan
        </label>
        <label htmlFor="keto">
          <input type="checkbox" id="keto" onChange={handleFilter} />
          Ketogenic
        </label>
        <label htmlFor="pescatarian">
          <input type="checkbox" id="pescatarian" onChange={handleFilter} />
          Pescatarian
        </label>
        <label htmlFor="paleo">
          <input type="checkbox" id="paleo" onChange={handleFilter} />
          Paleolithic
        </label>
        <label htmlFor="primal">
          <input type="checkbox" id="primal" onChange={handleFilter} />
          Primal
        </label>
        <label htmlFor="whole">
          <input type="checkbox" id="whole" onChange={handleFilter} />
          Whole 30
        </label>
      </div>
    </div>
  );
}

export default connect(null, { getRecipes, getRecipesByName, order, filter })(
  SearchBar
);
