const axios = require('axios').default;
const { API_KEY } = process.env;

////////////////////////////////
// BÚSQUEDA GENERAL en la API
//
const apiGeneralSearch = () =>
  axios
    .get(
      // `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
      'https://api.spoonacular.com/recipes/complexSearch', // ← esta forma y la de arriba ↑ son equivalentes, por cómo se maneja axios
      {
        params: {
          apiKey: API_KEY,
          addRecipeInformation: true,
          number: 100,
        },
      }
    )
    .then(response => {
      let recipes = [];
      for (var recipe of response.data.results) {  // ← un bucle `for...in` no me devolvía nada, leí la documentación y aparentemente era porque el objeto que axios me devuelve no tenía keys, sino directamente objetos en sí como los valores. Leí que el `for...of` era una alternativa, y me funciona perfecto por suerte ♥
        recipes = [
          ...recipes,
          {
            id: recipe.id,
            title: recipe.title,
            summary: recipe.summary,
            spoonacularScore: recipe.spoonacularScore,
            healthScore: recipe.healthScore,
            analyzedInstructions: recipe.analyzedInstructions,
            diets: recipe.diets,
            image: recipe.image,
          },
        ];
      }
      return recipes;
      // return response.data; // results
    })
    .catch(error => {
      throw new Error('Ocurrió un error en apiGeneralSearch');
    });

///////////////////////////////////
// BÚSQUEDA POR NOMBRE en la API
//
const apiSearchByName = name =>
  axios
    .get('https://api.spoonacular.com/recipes/complexSearch', {
      params: {
        apiKey: API_KEY,
        addRecipeInformation: true,
        number: 100,
        query: name,
      },
    })
    .then(response => {
      let recipes = [];
      for (var recipe of response.data.results) {
        recipes = [
          ...recipes,
          {
            id: recipe.id,
            title: recipe.title,
            summary: recipe.summary,
            spoonacularScore: recipe.spoonacularScore,
            healthScore: recipe.healthScore,
            analyzedInstructions: recipe.analyzedInstructions,
            diets: recipe.diets,
            image: recipe.image,
          },
        ];
      }
      return recipes;
    })
    .catch(() => {
      throw new Error('Ocurrió un error en apiSearchByName');
    });;

///////////////////////////////
// BÚSQUEDA POR ID en la API
//
const apiSearchById = id =>
  axios
    .get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    )
    .then(response => {
      return {
        id: response.data.id,
        title: response.data.title,
        summary: response.data.summary,
        spoonacularScore: response.data.spoonacularScore,
        healthScore: response.data.healthScore,
        analyzedInstructions: response.data.analyzedInstructions[0].steps,
        diets: response.data.diets,
        image: response.data.image,
      };
    })
    .catch(() => {
      throw new Error('Ocurrió un error en apiSearchById');
    });

/////////////////////
module.exports = {
  apiGeneralSearch,
  apiSearchByName,
  apiSearchById,
};
