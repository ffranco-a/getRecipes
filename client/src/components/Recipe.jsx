import React from 'react';
// import { Link } from 'react-router-dom'; // ← para más adelante
import style from './Recipe.module.css';

export default function Receta({ title, image, diets }) {
  return (
    <div className={style.recipeCardContainer} style={{backgroundImage: `url(${image})`}}>
      <div className={style.recipeCardInfo}>
        <h3>{title}</h3>
        <span>{diets}</span>
      </div>
    </div>
  );
}
