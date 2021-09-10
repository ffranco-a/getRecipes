import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';
import Pagination from './Pagination.jsx';
import SearchBar from './SearchBar.jsx';

function Home({ recipes, getRecipes }) {
  useEffect(() => {
    if (recipes.length === 0) {
      getRecipes();
    }
  }, [recipes.length, getRecipes]);

  return (
    <div>
      <SearchBar />
      <Pagination />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getRecipes })(Home);
