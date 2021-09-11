import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';
import Pagination from './Pagination.jsx';
import SearchBar from './SearchBar.jsx';

function Home({ allRecipes, getRecipes }) {
  useEffect(() => {
    if (allRecipes.length === 0) {
      getRecipes();
    }
  }, [allRecipes.length, getRecipes]);

  return (
    <div>
      <SearchBar />
      <Pagination />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    allRecipes: state.allRecipes,
  };
};

export default connect(mapStateToProps, { getRecipes })(Home);
