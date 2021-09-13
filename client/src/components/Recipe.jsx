import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './moduleCSS/Recipe.module.css';
import { removeFavorite } from '../actions';

function Recipe({ title, image, diets, id, score, healthScore, favorite, removeFavorite }) {
  const handleRemoveFav = () => {
    removeFavorite(id);
  };

  return (
    <div
      className={style.recipeCardContainer}
      style={{ backgroundImage: `url(${image})` }}
    >
      {favorite && (
        <button onClick={handleRemoveFav} title="Remove this recipe from favorites" className={style.removeFromFavs}>
          -
        </button>
      )}
      <Link to={`/recipe/${id}`} className={style.container}>
        <div className={style.recipeCardInfo}>
          <h3>{title}</h3>
          <div className={style.scores}>
            <span>score: {score}</span>
            <span>healthScore: {healthScore}</span>
          </div>
          {diets.length > 0 && 
            <div className={style.diets}>
              {diets.map((diet, index) => (
                <div key={index} className={style.diet}>
                  {diet}
                </div>
              ))}
            </div>
          }
        </div>
      </Link>
    </div>
  );
}

export default connect(null, { removeFavorite })(Recipe);
