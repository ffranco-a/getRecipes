import React from 'react';
import style from './NavBar.module.css';

export default function NavBar() {
  return <div className={style.NavBar}>
    <input className={style.searchBar} type="text" placeholder="Search for recipes..." ></input>
    <button onClick="" className={style.searchButton}>buscar</button>
  </div>;
}
