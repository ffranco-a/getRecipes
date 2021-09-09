import React from 'react';
import { Link } from 'react-router-dom';
import style from './moduleCSS/NavBar.module.css';

function NavBar() {
  return (
    <div className={style.navBar}>
      <Link to="/">Landing?</Link>
      <Link to="/home">Home</Link>
      <Link to="/home/create">Create</Link>
      <Link to="/home/diets">Diets</Link>
    </div>
  );
}

export default NavBar;
