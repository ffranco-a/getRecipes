import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';


class Landing extends Component {

  componentDidMount() {
    if (this.props.recipes.length === 0) {
      this.props.getRecipes();
    }
  }


  render() {
    return (
      <div>
        <Link to="/home">Entrar</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getRecipes })(Landing);
