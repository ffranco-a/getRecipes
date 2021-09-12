import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';
import style from './moduleCSS/Landing.module.css'

function Landing({ recipes, getRecipes }) {
  
  useEffect(() => {
    if (recipes.length === 0) {
      getRecipes();
    }
  }, [recipes, getRecipes]);

  return (
    <div className={style.landing}>
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
