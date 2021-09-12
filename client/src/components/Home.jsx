import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';
import Pagination from './Pagination.jsx';
import SearchBar from './SearchBar.jsx';
import style from './moduleCSS/Home.module.css';

function Home({ allRecipes, recipes, getRecipes }) {
  useEffect(() => {
    if (allRecipes.length === 0) {
      getRecipes();
    }
  }, [allRecipes.length, getRecipes]);

  return (
    <div className={style.home}>
      <SearchBar />
      <Pagination recipes={recipes} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    allRecipes: state.allRecipes,
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getRecipes })(Home);
