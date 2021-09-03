//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Diet, Recipe } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    // ↓ precargo las lista de dietas posibles de spoonacular.
    const dietVegetarian = Diet.create({
      name: 'Vegetarian',
      description:
        'No ingredients may contain meat or meat by-products, such as bones or gelatin.',
    });
    const dietVegan = Diet.create({
      name: 'Vegan',
      description:
        'No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.',
    });
    const dietGlutenFree = Diet.create({
      name: 'Gluten Free',
      description:
        'Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).',
    });
    const dietLactoVegetarian = Diet.create({
      name: 'Lacto-Vegetarian',
      description:
      'All ingredients must be vegetarian and none of the ingredients can be or contain egg.',
    });
    const dietOvoVegetarian = Diet.create({
      name: 'Ovo-Vegetarian',
      description:
      'All ingredients must be vegetarian and none of the ingredients can be or contain dairy.',
    });
    const dietKetogenic = Diet.create({
      name: 'Ketogenic',
      description:
        'The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not.',
    });
    const dietPescetarian = Diet.create({
      name: 'Pescetarian',
      description:
        'Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.',
    });
    const dietPaleo = Diet.create({
      name: 'Paleo',
      description:
        'Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.',
    });
    const dietPrimal = Diet.create({
      name: 'Primal',
      description:
        'Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.',
    });
    const dietWhole30 = Diet.create({
      name: 'Whole30',
      description:
        'Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.',
    });

    // ↓ precargo algunas recetas de prueba para ver si funciona (EDIT: sí funciona uwu )
    const recipe1 = await Recipe.create({
      title: 'Budín de naranja',
      summary: 'Esponjoso bizcochuelo dulce para la merienda o el desayuno',
      spoonacularScore: 4,
      healthScore: 2,
      analyzedInstructions: [],
    });
    recipe1.addDiet(1);

    const recipe2 = await Recipe.create({
      title: 'Tarta Cabsha',
      summary:
        'Tarta dulce con relleno de dulce de leche y cobertura de chocolate',
      spoonacularScore: 7,
      healthScore: 1,
      analyzedInstructions: [],
    });
    recipe2.addDiet(1);

    const recipe3 = await Recipe.create({
      title: 'Pastas primavera',
      summary: 'Fideos preparados con verduras y crema',
      spoonacularScore: 6,
      healthScore: 6,
      analyzedInstructions: [],
    });
    recipe3.addDiet(1);

    const recipe4 = Recipe.create({
      title: 'Empanadas de osobuco',
      summary: 'Empanadas argentinas rellenas de carne',
      spoonacularScore: 5,
      healthScore: 4,
      analyzedInstructions: [],
    });

    const recipe5 = await Recipe.create({
      title: 'Pan de carne',
      summary: 'Carne molida cocinada en molde',
      spoonacularScore: 4,
      healthScore: 3,
      analyzedInstructions: [],
    });
    recipe5.addDiet(3);

    Promise.all([
      dietGlutenFree,
      dietKetogenic,
      dietVegetarian,
      dietLactoVegetarian,
      dietOvoVegetarian,
      dietVegan,
      dietPescetarian,
      dietPaleo,
      dietPrimal,
      dietWhole30,
      recipe1,
      recipe2,
      recipe3,
      recipe4,
      recipe5,
    ]).then(r => console.log('Dietas y recetas cargadas!'));
  });
});
