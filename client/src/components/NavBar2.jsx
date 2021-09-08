import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Link to="/">Landing?</Link>
      <Link to="/home">Home</Link>
      <Link to="/home/create">Create</Link>
    </div>
  );
}

export default NavBar;
