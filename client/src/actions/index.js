const axios = require('axios');

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE_BY_ID = 'GET_RECIPES_BY_ID';

export function getRecipes() {
  return function (dispatch) {
    axios
      .get('http://localhost:3001/recipes')
      .then(response =>
        dispatch({ type: GET_RECIPES, payload: response.data })
      );
  };
}

export function getRecipesByName(name) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/recipes?name=${name}`)
      .then(response =>
        dispatch({ type: GET_RECIPES, payload: response.data })
      );
  };
}

export function getRecipeById(id) {
  return function (dispatch) {
    //...
  };
}
