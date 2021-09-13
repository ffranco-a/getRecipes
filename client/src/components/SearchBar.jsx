import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import style from './moduleCSS/SearchBar.module.css';
import { getRecipes, getRecipesByName, order, filter } from '../actions';

function SearchBar({ getRecipes, getRecipesByName, order, filter }) {
  const [name, setName] = useState('');
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    filter(diets);
  }, [filter, diets]);

  const handleRefresh = () => {
    getRecipes();
  };

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
        <button onClick={handleRefresh} className={style.refresh} title="Refresh recipes list">
          refresh
        </button>
        <input
          className={style.searchBarInput}
          type="text"
          placeholder="Search for recipes..."
          onChange={handleChange}
        />
        <button onClick={handleSearch} className={style.searchButton}>
          search
        </button>
        <label>Order by:</label>
        <select type="options" onChange={handleOrder}>
          <option>--Select--</option>
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
        <label for="gluten">
          <input type="checkbox" id="gluten" onChange={handleFilter} />
          Gluten Free
        </label>
        <label for="vegetarian">
          <input type="checkbox" id="vegetarian" onChange={handleFilter} />
          Vegetarian
        </label>
        <label for="vegan">
          <input type="checkbox" id="vegan" onChange={handleFilter} />
          Vegan
        </label>
        <label for="ketogenic">
          <input type="checkbox" id="ketogenic" onChange={handleFilter} />
          Ketogenic
        </label>
        <label for="pescetarian">
          <input type="checkbox" id="pescetarian" onChange={handleFilter} />
          Pescetarian
        </label>
        <label for="paleo">
          <input type="checkbox" id="paleo" onChange={handleFilter} />
          Paleo
        </label>
        <label for="primal">
          <input type="checkbox" id="primal" onChange={handleFilter} />
          Primal
        </label>
        <label for="whole30">
          <input type="checkbox" id="whole30" onChange={handleFilter} />
          Whole30
        </label>
      </div>
    </div>
  );
}

export default connect(null, { getRecipes, getRecipesByName, order, filter })(
  SearchBar
);
