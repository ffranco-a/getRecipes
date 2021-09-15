import React from 'react';
import { connect } from 'react-redux';
import { getDiets } from '../actions';
import style from './moduleCSS/Diets.module.css';
import Error from './Error.jsx';

function Diets({ error, diets, getDiets }) {
  if (diets.length === 0) {
    getDiets();
  }

  if (error) {
    return <Error error={error} />
  }

  return (
    <div className={style.dietsContainer}>
      {diets.map(diet => (
        <div key={diet.id} className={style.diet}>
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
    error: state.error,
  };
};

export default connect(mapStateToProps, { getDiets })(Diets);
