import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipeById, addFavorite } from '../actions';
import style from './moduleCSS/Details.module.css';
import { TiHeartOutline } from 'react-icons/ti';

function Detail({ details, getRecipeById, match, addFavorite }) {
  useEffect(() => {
    getRecipeById(match.params.id);
  }, [getRecipeById, match.params.id]);

  const handleAddFavorite = () => {
    addFavorite(details);
    alert('Recipe succesfully added to Favorites!');
  };

  return (
    <div>
      <div
        className={style.detailsBackground}
        style={{ backgroundImage: `url(${details.image})` }}
      />
      <div className={style.detailsInfo}>
        <div className={style.detailsGrid}>
          <div className={style.detailsGrid1}>
            <div>
              <h2>
                {details.title}
                <TiHeartOutline
                  className={style.addFav}
                  onClick={handleAddFavorite}
                  title="Add this recipe to favorites"
                />
              </h2>
            </div>
            <div className={style.summary}>
              {details.summary}
            </div>
          </div>

          <div className={style.detailsGrid2}>
            <img src={details.image} alt="" />

            {/* Diets only shown if found any */}
            {details.diets !== [] && (
              <div className={style.diets}>
                <b>Diets:</b>
                {details.diets.map((diet, index) => {
                  return <li key={index}>{diet}</li>;
                })}
              </div>
            )}
            <div className={style.scores}>
              {details.spoonacularScore !== 0 && (
                <div>
                  <b>Score:</b>
                  <br />
                  {details.spoonacularScore}
                </div>
              )}
              {details.healthScore !== 0 && (
                <div>
                  <b>Health score:</b>
                  <br />
                  {details.healthScore}
                </div>
              )}
            </div>
          </div>

          {/* Ingredients only shown if found any */}
          {details.ingredients && (
            <div className={style.detailsGrid3}>
              <b>Ingredients:</b>
              {details.ingredients.map((ingredient, index) => {
                return (
                  <li key={index}>
                    {ingredient.name}, {ingredient.measures.amount}{' '}
                    {ingredient.measures.unitLong}
                  </li>
                );
              })}
            </div>
          )}

          {/* Instructions only shown if found any */}
          {details.analyzedInstructions && (
            <ol className={style.detailsGrid4}>
              <b>Instructions step by step:</b>
              {details.analyzedInstructions.map(step => {
                return <li key={step.number}>{step.step}</li>;
              })}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    details: state.details,
  };
};

export default connect(mapStateToProps, { getRecipeById, addFavorite })(Detail);
