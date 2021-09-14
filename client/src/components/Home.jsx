import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';
import Pagination from './Pagination.jsx';
import SearchBar from './SearchBar.jsx';
import style from './moduleCSS/Home.module.css';
import Error from './Error.jsx';

function Home({ allRecipes, recipes, error, getRecipes }) {
  useEffect(() => {
    if (allRecipes.length === 0) {
      getRecipes();
    }
  }, [allRecipes.length, getRecipes]);

  if (error) {
    return <Error error={error} />
  }

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
    error: state.error,
  };
};

export default connect(mapStateToProps, { getRecipes })(Home);
