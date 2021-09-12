import React, { useState } from 'react';
import style from './moduleCSS/CreateRecipe.module.css';
import { getRecipes } from '../actions';
import { connect } from 'react-redux';

const axios = require('axios');

function CreateRecipe({ getRecipes }) {
  const [errors, setErrors] = useState({});
  const [recipe, setRecipe] = useState({
    title: '',
    summary: '',
    spoonacularScore: 0,
    healthScore: 0,
    image: '',
  });
  const [diets, setDiets] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
  });
  const [instructions, setInstructions] = useState([]);
  const stepModel = {
    number: instructions.length + 1,
    step: '',
  };
  const [ingredients, setIngredients] = useState([]);
  const ingredientModel = {
    name: '',
    amount: '',
    unitLong: '',
  };

  /////////////////////////////////////////////////////////////
  // error validation (recipes must have title and summaries)
  const validate = input => {
    let errors = {};
    if (!input.title) {
      errors.title = '(your recipe must have a title!)';
    }
    if (!input.summary) {
      errors.summary = '(your recipe must have a summary!)';
    }
    return errors;
  };

  ////////////////////////////////////////////
  //  title and summary set and validation  //
  const handleChange = e => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...recipe,
        [e.target.name]: e.target.value,
      })
    );
  };

  /////////////////////////////////
  //  three INGREDIENT handlers  //
  const handleAddIngredient = () => {
    let id;
    ingredients.length === 0
      ? (id = 0)
      : (id = ingredients[ingredients.length - 1].id + 1);
    setIngredients([...ingredients, { ...ingredientModel, id }]);
  };

  const handleRemoveIngredient = e => {
    let newIngredients = [...ingredients];
    newIngredients = newIngredients.filter(
      ingredient => ingredients.indexOf(ingredient) !== parseInt(e.target.id)
    );
    setIngredients(newIngredients);
  };

  const handleIngredients = e => {
    let newIngredients = [...ingredients];
    newIngredients[e.target.id][e.target.name] = e.target.value;
    setIngredients(newIngredients);
  };

  ///////////////////////////////////
  //  three INSTRUCTIONS handlers  //
  const handleAddStep = () => {
    setInstructions([...instructions, { ...stepModel }]);
  };

  const handleRemoveLastStep = () => {
    const deleteLastStep = instructions.slice(0, instructions.length - 1);
    setInstructions(deleteLastStep);
  };

  const handleInstructions = e => {
    const newInstructions = [...instructions];
    instructions[e.target.name - 1].step = e.target.value;
    setInstructions(newInstructions);
  };

  ////////////////////
  //  diet handler  //
  const handleDiets = e => {
    setDiets({
      ...diets,
      [e.target.id]: e.target.checked,
    });
  };

  ////////////////////
  //  before posting, I need to unify the 4 states: recipe, ingredients, instructions and diets. Final checks (custom image? ingredients quantities?)
  const formRecipe = (recipe, instructions, diets) => {
    let newRecipe = { ...recipe };
    if (newRecipe.image === '') {
      newRecipe.image =
        'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80';
    }
    let newIngredients = ingredients
      .filter(ingredient => ingredient.name !== '')
      .map(ingredient => {
        return {
          name: ingredient.name,
          measures: {
            amount: ingredient.amount === 0 ? null : ingredient.amount,
            unitLong: ingredient.unitLong,
          },
        };
      });
    return {
      ...newRecipe,
      diets: { ...diets },
      ingredients: [...newIngredients],
      analyzedInstructions: instructions,
    };
  };

  ///////////////////////////
  //  post recipe handler  //
  const handleSubmit = e => {
    e.preventDefault();
    if (recipe.title === '' || recipe.summary === '') {
      // MODIFY!
      alert('Recipe must have a title and a summary!');
      return;
    }
    let newRecipe = formRecipe(recipe, instructions, diets);
    axios.post('http://localhost:3001/recipe', newRecipe).then(() => {
      getRecipes();
    });
  };

  //////////////////////////////
  ////  FINALLY: RENDERING  ////
  ////
  return (
    <form className={style.createRecipe}>
      <label>Recipe title: {errors.title}</label>
      <input type="text" name="title" onChange={handleChange} />
      <span>summary: {errors.summary}</span>
      <textarea type="text" name="summary" placeholder="describe your recipe!" onChange={handleChange} />
      <div>
        <label>Score:</label>
        <input
          type="number"
          name="spoonacularScore"
          placeholder="from 0 to 100"
          onChange={handleChange}
        />
        <label>Health score: </label>
        <input
          type="number"
          name="healthScore"
          placeholder="from 0 to 100"
          onChange={handleChange}
        />
      </div>

      {/* //////////////////////// */}
      {/* Dynamic ingredient input */}
      {/* //////////////////////// */}
      <span>Ingredients:</span>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <input
              type="text"
              name="name"
              placeholder="Ingredient name"
              value={ingredient.name}
              id={index}
              onChange={handleIngredients}
            ></input>
            <input
              type="number"
              name="amount"
              placeholder="quantity"
              value={ingredient.amount}
              id={index}
              onChange={handleIngredients}
            ></input>
            <input
              type="text"
              name="unitLong"
              placeholder="units (e.g. grams, cups, tbsp)"
              value={ingredient.unitLong}
              id={index}
              onChange={handleIngredients}
            ></input>
            <button type="button" id={index} onClick={handleRemoveIngredient}>
              -
            </button>
          </li>
        ))}
        <button type="button" onClick={handleAddIngredient}>
          Add ingredient
        </button>
      </ul>

      {/* ///////////////////////////////// */}
      {/* Dynamic step by step instructions */}
      {/* ///////////////////////////////// */}
      <span>
        Step by step:
      </span>
      <ol className={style.instructions}>
        {instructions.map(i => (
          <li key={i.number} className={style.step}>
            <input name={i.number} onChange={handleInstructions}></input>
          </li>
        ))}
        <button type="button" onClick={handleAddStep}>
          Add step
        </button>
        <button
          type="button"
          onClick={handleRemoveLastStep}
          style={instructions.length === 0 ? { visibility: 'hidden' } : null}
        >
          Remove last
        </button>
      </ol>

      {/* ////////////// */}
      {/* Diet selection */}
      {/* ////////////// */}
      <label>Select any diets your recipe is a part of:</label>
      <div className={style.diets}>
        <label for="glutenFree">
          <input type="checkbox" id="glutenFree" onChange={handleDiets} />
          Gluten Free
        </label>
        <label for="vegetarian">
          <input type="checkbox" id="vegetarian" onChange={handleDiets} />
          Vegetarian
        </label>
        <label for="vegan">
          <input type="checkbox" id="vegan" onChange={handleDiets} />
          Vegan
        </label>
        <label for="ketogenic">
          <input type="checkbox" id="ketogenic" onChange={handleDiets} />
          Ketogenic
        </label>
        <label for="pescetarian">
          <input type="checkbox" id="pescetarian" onChange={handleDiets} />
          Pescetarian
        </label>
        <label for="paleo">
          <input type="checkbox" id="paleo" onChange={handleDiets} />
          Paleo
        </label>
        <label for="primal">
          <input type="checkbox" id="primal" onChange={handleDiets} />
          Primal
        </label>
        <label for="whole30">
          <input type="checkbox" id="whole30" onChange={handleDiets} />
          Whole30
        </label>
      </div>

      {/* ////////////////////////////////// */}
      {/* Custom recipe image through URL () */}
      {/* ////////////////////////////////// */}
      <label>URL of custom image:</label>
      <input type="url" name="image" onChange={handleChange} />

      <input type="submit" value="Create!" onClick={handleSubmit} />
    </form>
  );
}

export default connect(null, { getRecipes })(CreateRecipe);
