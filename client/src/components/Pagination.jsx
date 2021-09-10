import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe.jsx';
import style from './moduleCSS/Pagination.module.css';

function Pagination({ recipes }) {
  const [page, setPage] = useState(1);

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

  // mis tres handlers para controlar la página actual
  const handlePage = e => {
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

  return (
    <div>

      {/* ↓ nueve recetas */}
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

      {/* ↓ selector para el paginado */}
      <ul className={style.pagesList}>
        <li onClick={handlePrev}>←</li>
        {pages.map(num => {
          return (
            <li
              key={num}
              id={num}
              onClick={handlePage}
              className={parseInt(page) === num ? style.active : null}
            >
              {num}
            </li>
          );
        })}
        <li onClick={handleNext}>→</li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps)(Pagination);
