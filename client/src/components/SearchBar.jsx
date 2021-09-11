import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import style from './moduleCSS/SearchBar.module.css';
import { getRecipesByName, order, filter } from '../actions';

function SearchBar({ getRecipesByName, order, filter }) {
  const [name, setName] = useState('');
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    filter(diets);
  }, [filter, diets]);

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
      <div>
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

export default connect(null, { getRecipesByName, order, filter })(SearchBar);
