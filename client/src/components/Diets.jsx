import React from 'react';
import { connect } from 'react-redux';
import { getDiets } from '../actions';

function Diets({ diets, getDiets }) {
  if (diets.length === 0) {
    getDiets();
  }

  return (
    <div>
      {diets.map(diet => (
        <div key={diet.id}>
          <h3>{diet.name}</h3>
          <span>{diet.description}</span>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    diets: state.diets,
  };
};

export default connect(mapStateToProps, { getDiets })(Diets);
