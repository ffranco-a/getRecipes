import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipeById, addFavorite } from '../actions';
import style from './moduleCSS/Details.module.css';
import { TiHeartOutline, TiArrowBackOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import Error from './Error.jsx';

function Detail({ error, details, getRecipeById, match, addFavorite }) {
  useEffect(() => {
    getRecipeById(match.params.id);
  }, [getRecipeById, match.params.id]);

  const handleAddFavorite = () => {
    addFavorite(details);
    alert('Recipe succesfully added to Favorites!');
  };

  if (error) {
    return <Error error={error} />
  }

  if (!details.title) {
    return <div className={style.loading}> Loading details.... if this process takes too long, try to <Link to="/">go back</Link> </div>;
  }

  return (
    <div>
      <div
        className={style.detailsBackground}
        style={{ backgroundImage: `url(${details.image})` }}
      />
      <div className={style.detailsInfo}>
        <Link to='/home' className={style.goBack}><TiArrowBackOutline title="Go back" /></Link>
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
            <div className={style.summary}>{details.summary}</div>
          </div>

          <div className={style.detailsGrid2}>
            <img src={details.image} alt="" />

            {/* Diets only shown if found any */}
            {details.diets && details.diets.length > 0 && (
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
                  {details.spoonacularScore} %
                </div>
              )}
              {details.healthScore !== 0 && (
                <div>
                  <b>Health score:</b>
                  <br />
                  {details.healthScore} %
                </div>
              )}
            </div>
          </div>

          {/* Ingredients only shown if found any */}
          {details.ingredients && details.ingredients.length > 0 && (
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
          {details.analyzedInstructions && details.analyzedInstructions.length > 0 && (
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
    error: state.error,
  };
};

export default connect(mapStateToProps, { getRecipeById, addFavorite })(Detail);
