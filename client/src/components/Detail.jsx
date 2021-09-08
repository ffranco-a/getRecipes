import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipeById } from '../actions';

function Detail({ details, getRecipeById, match}) {
  useEffect(() => {
    getRecipeById(match.params.id); // no está funcionando
  }, [getRecipeById, match.params.id]);

  return <h3>Details of {details.title}</h3>;
}

const mapStateToProps = state => {
  return {
    details: state.details,
  };
};

export default connect(mapStateToProps, { getRecipeById })(Detail);
