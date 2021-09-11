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
      {details.spoonacularScore && <div>score: {details.spoonacularScore}</div>}
      {details.healthScore && <div>health score: {details.healthScore}</div>}
      {details.diets && (
        <div>
          diets:
          {details.diets.map((diet, index) => {
            return <li key={index}>{diet}</li>;
          })}
        </div>
      )}
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
