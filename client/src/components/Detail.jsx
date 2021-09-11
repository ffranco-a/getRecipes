import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipeById } from '../actions';

function Detail({ details, getRecipeById, match }) {
  useEffect(() => {
    getRecipeById(match.params.id);
  }, [getRecipeById, match.params.id]);

  // if (!details) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <h3>{details.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: details.summary }} />
      {details.spoonacularScore && <div>Score: {details.spoonacularScore}</div>}
      {details.healthScore && <div>Health score: {details.healthScore}</div>}

      {/* Diets only shown if found any */}
      {details.diets && (
        <div>
          diets:
          {details.diets.map((diet, index) => {
            return <li key={index}>{diet}</li>;
          })}
        </div>
      )}

      {/* Ingredients only shown if found any */}
      {details.ingredients && (
        <div>
          ingredients:
          {details.ingredients.map(ingredient => {
            return (
              <div>
                {ingredient.name}, {ingredient.measures.amount}{' '}
                {ingredient.measures.unitLong}
              </div>
            );
          })}
        </div>
      )}

      {/* Instructions only shown if found any */}
      {details.analyzedInstructions && (
        <div>
          instructions:
          {details.analyzedInstructions.map(step => {
            return (
              <div key={step.number}>
                {step.number}: {step.step}
              </div>
            );
          })}
        </div>
      )}
      <img src={details.image} alt="" />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    details: state.details,
  };
};

export default connect(mapStateToProps, { getRecipeById })(Detail);
