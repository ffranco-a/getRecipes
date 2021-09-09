import React from 'react';
import { Link } from 'react-router-dom';
import style from './moduleCSS/Recipe.module.css';

export default function Receta({ title, image, diets, id }) {
  return (
    <div
      className={style.recipeCardContainer}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Link to={`/home/recipe/${id}`} className={style.container}>
        <div className={style.recipeCardInfo}>
          <h3>{title}</h3>
          <div className={style.diets}>{diets.map((diet, index) => (
            <div key={index}>
              {diet}
            </div>
          ))}</div>
        </div>
      </Link>
    </div>
  );
}
