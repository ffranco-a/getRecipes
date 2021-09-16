import {
  GET_RECIPES,
  GET_RECIPE_BY_ID,
  GET_TYPES,
  ORDER,
  FILTER,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ERROR,
} from '../actions/index.js';

const rootReducer = {

  /*
  allRecipes: [
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
  */

  allRecipes: [],
  recipes: [],
  details: {},
  diets: [],
  favorites: [],
  error: '',
  // loading: false,
};

const reducer = (state = rootReducer, action) => {
  switch (action.type) {

    case ERROR: {
      return {
        ...state,
        error: action.payload,
      }
    }

    case GET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
        allRecipes: [...action.payload],
        error: '',
      };

    case GET_RECIPE_BY_ID:
      return {
        ...state,
        details: { ...action.payload },
        error: '',
      };

    case GET_TYPES:
      return {
        ...state,
        diets: [...action.payload],
        error: '',
      };

    case ORDER:
      if (action.payload === "default") {
        return {
          ...state,
          recipes: [ ...state.allRecipes ],
        }
      };
      let ordered = state.recipes;
      ordered.sort((a, b) => {
        let A, B;
        if (action.payload.includes('title')) {
          A = a.title.toLowerCase();
          B = b.title.toLowerCase();
        }
        if (action.payload.includes('score')) {
          A = a.spoonacularScore;
          B = b.spoonacularScore;
        }
        if (action.payload.includes('health')) {
          A = a.healthScore;
          B = b.healthScore;
        }
        if (action.payload.includes('ascendent')) {
          if (A < B) return -1;
          if (A > B) return 1;
        }
        if (action.payload.includes('descendent')) {
          if (A < B) return 1;
          if (A > B) return -1;
        }
        return 0;
      });
      return {
        ...state,
        recipes: [...ordered],
        error: '',
      };

    case FILTER:
      if (action.payload.length === 0) {
        return {
          ...state,
          recipes: [...state.allRecipes],
          error: '',
        };
      }
      let filtered = [...state.allRecipes];
      for (let i = 0; i < action.payload.length; i++) {
        filtered = filtered.filter(recipe =>
          recipe.diets.join('').toLowerCase().includes(action.payload[i])
        );
      }
      return {
        ...state,
        recipes: [...filtered],
        error: '',
      };

    case ADD_FAVORITE:
      if (state.favorites.some(r => r.id === action.payload.id)) {
        return {
          ...state,
          error: '',
        };
      }
      let newFavorite = {
        ...action.payload,
        favorite: true,
      };
      return {
        ...state,
        favorites: [...state.favorites, { ...newFavorite }],
        error: '',
      };

    case REMOVE_FAVORITE:
      let filterFavs = state.favorites.filter(
        recipe => recipe.id !== action.payload
      );
      return {
        ...state,
        favorites: [...filterFavs],
        error: '',
      };

    default:
      return { ...state };
  }
};

export default reducer;
