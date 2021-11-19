import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './moduleCSS/Recipe.module.css';
import { removeFavorite } from '../actions';
import { TiDelete } from 'react-icons/ti';
import { GiHealthNormal } from "react-icons/gi";
import { RiThumbUpFill } from "react-icons/ri";

function Recipe({
  title,
  image,
  diets,
  id,
  score,
  healthScore,
  favorite,
  removeFavorite,
}) {
  const handleRemoveFav = () => {
    removeFavorite(id);
  };

  return (
    <div
      className={style.recipeCardContainer}
      style={{ backgroundImage: `url(${image})` }}
    >
      {favorite && (
        <TiDelete
          onClick={handleRemoveFav}
          className={style.removeFromFavs}
          title="Remove this recipe from favorites"
        />
      )}
      <Link to={`/recipe/${id}`} className={style.container}>
        <div className={style.recipeCardInfo}>
          <h3>{title}</h3>
          <div className={style.scores}>
            {score !== 0 && <span title={`Users rating score: ${score}/100`}><RiThumbUpFill className={style.scoreIcon} /> {score}%</span>}
            {healthScore !== 0 && <span title={`Health Score: ${healthScore}/100`}><GiHealthNormal className={style.scoreIcon} /> {healthScore}%</span>}
          </div>
          {diets.length > 0 && (
            <div className={style.diets}>
              {diets.map((diet, index) => (
                <div key={index} className={style.diet}>
                  {diet}
                </div>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default connect(null, { removeFavorite })(Recipe);
