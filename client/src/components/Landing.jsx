import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';

function Landing({ recipes, getRecipes }) {
  
  useEffect(() => {
    if (recipes.length === 0) {
      getRecipes();
    }
  }, [recipes, getRecipes]);

  return (
    <div>
      <Link to="/home">Entrar</Link>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getRecipes })(Landing);
