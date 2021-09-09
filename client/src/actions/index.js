const axios = require('axios');

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE_BY_ID = 'GET_RECIPES_BY_ID';
export const GET_TYPES = 'GET_TYPES';

const LINK = 'http://localhost:3001';

export function getRecipes() {
  return function (dispatch) {
    axios
      .get(LINK + '/recipes')
      .then(response => dispatch({ type: GET_RECIPES, payload: response.data }))
      .catch(e => console.log(e));
  };
}

export function getRecipesByName(name) {
  return function (dispatch) {
    axios
      .get(LINK + `/recipes?name=${name}`)
      .then(response => dispatch({ type: GET_RECIPES, payload: response.data }))
      .catch(e => console.log(e));
  };
}

export function getRecipeById(id) {
  return function (dispatch) {
    axios
      .get(LINK + `/recipes/${id}`)
      .then(response =>
        dispatch({ type: GET_RECIPE_BY_ID, payload: response.data })
      )
      .catch(e => console.log(e));
  };
}

export function getDiets() {
  return function (dispatch) {
    axios
      .get(LINK + '/types')
      .then(response => dispatch({ type: GET_TYPES, payload: response.data }));
  };
}
