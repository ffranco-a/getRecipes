import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './moduleCSS/NavBar.module.css';

function NavBar() {
  return (
    <div className={style.navBar}>
      <Link to="/" activeClassName={style.active}>Welcome</Link>
      <NavLink to="/home" activeClassName={style.active}>Home</NavLink>
      <NavLink to="/create" activeClassName={style.active}>Create</NavLink>
      <NavLink to="/diets" activeClassName={style.active}>Diets</NavLink>
    </div>
  );
}

export default NavBar;
