import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipeById } from '../actions';

function Detail({ details, getRecipeById, match }) {
  useEffect(() => {
    getRecipeById(match.params.id);
  }, [getRecipeById, match.params.id]);

  return (
    <div>
      <h3>{details.title}</h3>
      <div dangerouslySetInnerHTML={{__html: details.summary}} />
      <div>score: {details.spoonacularScore}</div>
      <div>health score: {details.healthScore}</div>
      <div>diets: 
        {details.diets.map((diet, index) => {
          return (<li key={index}>
            {diet}
          </li>)
        })}
      </div>
      <img src={details.image} alt='' />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    details: state.details,
  };
};

export default connect(mapStateToProps, { getRecipeById })(Detail);
