import React from 'react';
import style from './moduleCSS/Error.module.css';
import { getRecipes } from '../actions';
import { connect } from 'react-redux';

function Error({ error, getRecipes }) {
  const handleRefresh = () => {
    getRecipes();
  };

  return (
    <div className={style.error}>
      {`oops! seems like there has been an error: ${error}`}
      <br />
      <button onClick={handleRefresh} title="Refresh recipes">
        Refresh
      </button>
    </div>
  );
}

export default connect(null, { getRecipes })(Error);
