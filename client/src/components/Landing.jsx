import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipes, getDiets } from '../actions';
import style from './moduleCSS/Landing.module.css';

function Landing({ recipes, diets, getRecipes, getDiets }) {
  useEffect(() => {
    if (recipes.length === 0) {
      getRecipes();
    }
  }, [recipes, getRecipes]);

  useEffect(() => {
    if (diets.length === 0) {
      getDiets();
    }
  }, [diets, getDiets]);

  return (
    <div>
      <div className={style.landingBackground} />
      <Link to="/home">
        <div className={style.landing}>getRecipes() {'>'}</div>
      </Link>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    diets: state.diets,
  };
};

export default connect(mapStateToProps, { getRecipes, getDiets })(Landing);
