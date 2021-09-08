import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './moduleCSS/Recipes.module.css';
import Recipe from './Recipe.jsx';
import { getRecipes } from '../actions';

class Recipes extends Component {

  componentDidMount() {
    if (this.props.recipes.length === 0) {
      this.props.getRecipes();
    }
  }

  render() {
    return (
      <div className={style.recipesContainer}>
        {this.props.recipes.map(recipe => {
          return (
            <Recipe
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              diets={recipe.diets}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getRecipes })(Recipes);
