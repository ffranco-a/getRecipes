import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './moduleCSS/NavBar.module.css';
import { getRecipesByName } from '../actions';

class NavBar extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.getRecipesByName(this.state.name);
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <div className={style.NavBar}>
        <input
          className={style.searchBar}
          type="text"
          placeholder="Search for recipes..."
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch} className={style.searchButton}>
          buscar
        </button>
      </div>
    );
  }
}

export default connect(null, { getRecipesByName })(NavBar);
