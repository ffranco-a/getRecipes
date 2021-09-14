import React from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';
import Pagination from './Pagination.jsx';
import style from './moduleCSS/Favorites.module.css';
import { Link } from 'react-router-dom';

function Favorites({ favorites }) {
  return (
    <div className={style.favsContainer}>
      <div className={style.favorites}>
        <h2>Your favorite recipes</h2>
      </div>
      {favorites.length === 0 ? (
        <div className={style.favorites}>
          <h3>
            Currently you have no favorite recipes! <Link to="/home">go explore and find some!</Link>
          </h3>
        </div>
      ) : (
        <Pagination recipes={favorites} />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps, { getRecipes })(Favorites);
