const axios = require('axios');

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE_BY_ID = 'GET_RECIPES_BY_ID';

export function getRecipes() {
  return function (dispatch) {
    axios
      .get('http://localhost:3001/recipes')
      .then(response =>
        dispatch({ type: GET_RECIPES, payload: response.data })
      )
      .catch(e => (console.log(e)));
  };
}

export function getRecipesByName(name) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/recipes?name=${name}`)
      .then(response =>
        dispatch({ type: GET_RECIPES, payload: response.data })
      )
      .catch(e => (console.log(e)));
  };
}

export function getRecipeById(id) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/recipes/${id}`)
      .then(response => { // eliminarrrrrrr
        console.log(response);
        return response;
      })
      .then(response =>
        dispatch({ type: GET_RECIPE_BY_ID, payload: response.data })
      )
      .catch(e => (console.log(e)));
  };
}
