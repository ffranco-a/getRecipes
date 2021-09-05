// reducer

import { GET_RECIPES, GET_RECIPE_BY_ID } from '../actions/index.js';

const reducer = {
  recipes: [
    {
      id: 'f6e5a7d1-a786-4bb9-8160-dfc29f58c60c',
      title: 'Budín de naranja',
      summary: 'Esponjoso bizcochuelo dulce para la merienda o el desayuno',
      spoonacularScore: 4,
      healthScore: 2,
      analyzedInstructions: [],
      createdAt: '2021-09-03T16:22:08.135Z',
      updatedAt: '2021-09-03T16:22:08.135Z',
      diets: ['vegetarian'],
    },
    {
      id: 'ac7bc050-cd69-4be6-bac8-10911778cf82',
      title: 'Tarta Cabsha',
      summary:
        'Tarta dulce con relleno de dulce de leche y cobertura de chocolate',
      spoonacularScore: 7,
      healthScore: 1,
      analyzedInstructions: [],
      createdAt: '2021-09-03T16:22:08.205Z',
      updatedAt: '2021-09-03T16:22:08.205Z',
      diets: ['vegetarian'],
    },
    {
      id: 'ffaaa48d-7856-461b-add3-cf5d50103cdf',
      title: 'Pastas primavera',
      summary: 'Fideos preparados con verduras y crema',
      spoonacularScore: 6,
      healthScore: 6,
      analyzedInstructions: [],
      createdAt: '2021-09-03T16:22:08.220Z',
      updatedAt: '2021-09-03T16:22:08.220Z',
      diets: ['vegetarian'],
    },
    {
      id: '62757c51-4427-48df-8a82-14374a214d0a',
      title: 'Pan de carne',
      summary: 'Carne molida cocinada en molde',
      spoonacularScore: 4,
      healthScore: 3,
      analyzedInstructions: [],
      createdAt: '2021-09-03T16:22:08.226Z',
      updatedAt: '2021-09-03T16:22:08.226Z',
      diets: ['gluten free'],
    },
    {
      id: '589ffdba-7d45-4c61-ba3d-1f980239e7e5',
      title: 'Albóngigas con salsa',
      summary: 'Bolas de carne cocinadas en salsa de tomate',
      spoonacularScore: 8,
      healthScore: 3,
      analyzedInstructions: ['Picar la carne', 'rehogar la cebolla', '...etc'],
      createdAt: '2021-09-03T16:22:15.671Z',
      updatedAt: '2021-09-03T16:22:15.671Z',
      diets: ['gluten free'],
    },
    {
      id: '4284bdff-8e97-473c-a0bd-75f2038cf299',
      title: 'Budín de Pan',
      summary: 'Postre hecho a base de sobras de pan duro',
      spoonacularScore: 6,
      healthScore: 2,
      analyzedInstructions: [
        'Remojar durante 20 min. 400gr. de pan en un litro de leche',
        'agregar huevos y saborizantes (¡naranja y esencia de vainilla quedan muy bien!)',
        'pasar a una budinera enmantecada y enharinada y cocinar con horno medio durante 40 minutos.',
      ],
      createdAt: '2021-09-03T16:22:16.867Z',
      updatedAt: '2021-09-03T16:22:16.867Z',
      diets: ['vegetarian'],
    },
    {
      id: 'be4c9b87-8ddf-4c76-ad28-a8b9a8c551a1',
      title: 'Empanadas de osobuco',
      summary: 'Empanadas argentinas rellenas de carne',
      spoonacularScore: 5,
      healthScore: 4,
      analyzedInstructions: [],
      createdAt: '2021-09-03T16:22:08.226Z',
      updatedAt: '2021-09-03T16:22:08.226Z',
      diets: [],
    },
  ],
  // favorites: [],
  // detalle?: {},
};

export default (state = reducer, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload], // REVISAR ! ! !
      };
    case GET_RECIPE_BY_ID:
      return; // REVISAR ! ! !
    default:
      return { ...state };
  }
};
