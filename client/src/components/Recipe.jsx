import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './moduleCSS/Recipe.module.css';
import { removeFavorite } from '../actions';

function Recipe({ title, image, diets, id, favorite, removeFavorite }) {
  const handleRemoveFav = () => {
    removeFavorite(id);
  };

  return (
    <div
      className={style.recipeCardContainer}
      style={{ backgroundImage: `url(${image})` }}
    >
      {favorite && <button onClick={handleRemoveFav} className={style.removeFromFavs} >Remove from fav</button>}
      <Link to={`/recipe/${id}`} className={style.container}>
        <div className={style.recipeCardInfo}>
          <h3>{title}</h3>
          <div className={style.diets}>
            {diets.map((diet, index) => (
              <div key={index}>{diet}</div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default connect(null, { removeFavorite })(Recipe);
