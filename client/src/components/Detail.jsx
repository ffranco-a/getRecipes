import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipeById, addFavorite } from '../actions';
import style from './moduleCSS/Details.module.css';

function Detail({ details, getRecipeById, match, addFavorite }) {
  useEffect(() => {
    getRecipeById(match.params.id);
  }, [getRecipeById, match.params.id]);

  const handleAddFavorite = () => {
    addFavorite(details);
  }

  return (
    <div
      className={style.detailsContainer}
      style={{ backgroundImage: `url(${details.image})` }}
    >
      <div className={style.detailsInfo}>
        <h3>{details.title} <button onClick={handleAddFavorite}>Add to Favs</button></h3>
        <div dangerouslySetInnerHTML={{ __html: details.summary }} />
        {details.spoonacularScore && (
          <div>Score: {details.spoonacularScore}</div>
        )}
        {details.healthScore && <div>Health score: {details.healthScore}</div>}

        {/* Diets only shown if found any */}
        {details.diets && (
          <div>
            Diets:
            {details.diets.map((diet, index) => {
              return <li key={index}>{diet}</li>;
            })}
          </div>
        )}

        {/* Ingredients only shown if found any */}
        {details.ingredients && (
          <div>
            Ingredients:
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
          <div>
            Instructions:
            {details.analyzedInstructions.map(step => {
              return (
                <div key={step.number}>
                  {step.number}: {step.step}
                </div>
              );
            })}
          </div>
        )}
        {/* <img src={details.image} alt="" /> */}
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
