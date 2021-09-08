import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import style from './moduleCSS/Pagination.module.css';
import Recipe from './Recipe.jsx';
import { getRecipes } from '../actions';

function Pagination({ recipes, getRecipes }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (recipes.length === 0) {
      getRecipes();
    }
  }, [recipes.length, getRecipes]);

  useEffect(() => {
    setPage(1);
  }, [recipes, setPage]);

  const firstRecipe = (page - 1) * 9;
  const lastRecipe = page * 9;
  const currentNineRecipes = recipes.slice(firstRecipe, lastRecipe);

  const pages = [];
  for (var p = 1; p <= Math.ceil(recipes.length / 9); p++) {
    pages.push(p);
  }

  const handlePages = e => {
    setPage(parseInt(e.target.id));
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page !== pages[pages.length - 1]) {
      setPage(page + 1);
    }
  };

  const pagesList = pages.map(number => {
    return (
      <li
        key={number}
        id={number}
        onClick={handlePages}
        className={parseInt(page) === number ? style.active : null}
      >
        {number}
      </li>
    );
  });

  return (
    <div>
      <ul className={style.pagesList}>
        <li onClick={handlePrev}>←</li>
        {pagesList}
        <li onClick={handleNext}>→</li>
      </ul>
      <div className={style.recipesContainer}>
        {currentNineRecipes.map(recipe => {
          return (
            <Recipe
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              diets={recipe.diets}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getRecipes })(Pagination);
