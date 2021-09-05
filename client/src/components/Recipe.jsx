import React from 'react';
import { Link } from 'react-router-dom';
import style from './Recipe.module.css';

export default function Receta({ title, image, diets, id }) {
  return (
    <Link to={`/recipe/${id}`}>
      <div
        className={style.recipeCardContainer}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={style.recipeCardInfo}>
          <h3>{title}</h3>
          <span>{diets}</span>
        </div>
      </div>
    </Link>
  );
}
