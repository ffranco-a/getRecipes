import React, { useState } from 'react';
import style from './moduleCSS/CreateRecipe.module.css';
import { getRecipes } from '../actions';
import { connect } from 'react-redux';
import { TiDelete } from 'react-icons/ti';

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
        'https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80';
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
      alert('Recipe must have a title and a summary!');
      return;
    }
    let newRecipe = formRecipe(recipe, instructions, diets);
    axios.post('http://localhost:3001/recipe', newRecipe).then(() => {
      alert('Recipe created succesfully!');
      getRecipes();
    });
  };

  //////////////////////////////
  ////  FINALLY: RENDERING  ////
  ////
  return (
    <form className={style.createRecipe}>
      <label className={style.inputName}>Recipe title: {errors.title}</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        className={style.title}
      />
      <span className={style.inputName}>summary: {errors.summary}</span>
      <textarea
        className={style.summary}
        type="text"
        name="summary"
        placeholder="describe your recipe!"
        onChange={handleChange}
      />
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

      <div className={style.dynamicInputs}>
        <div>
          {/* //////////////////////// */}
          {/* Dynamic ingredient input */}
          {/* //////////////////////// */}
          <span>Ingredients:</span>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index} className={style.ingredient}>
                <input
                  type="text"
                  name="name"
                  placeholder="Ingredient name"
                  value={ingredient.name}
                  id={index}
                  onChange={handleIngredients}
                  className={style.ingredientName}
                ></input>
                <input
                  type="number"
                  name="amount"
                  placeholder="quantity"
                  value={ingredient.amount}
                  id={index}
                  onChange={handleIngredients}
                  className={style.ingredientAmount}
                ></input>
                <input
                  type="text"
                  name="unitLong"
                  placeholder="units (e.g. grams)"
                  value={ingredient.unitLong}
                  id={index}
                  onChange={handleIngredients}
                  className={style.ingredientUnit}
                ></input>
                <TiDelete
                  className={style.deleteButton}
                  id={index}
                  onClick={handleRemoveIngredient}
                  title="Remove this ingredient"
                />
              </li>
            ))}
            <button type="button" onClick={handleAddIngredient}>
              Add ingredient
            </button>
          </ul>
        </div>

        <div>
          {/* ///////////////////////////////// */}
          {/* Dynamic step by step instructions */}
          {/* ///////////////////////////////// */}
          <span>Step by step:</span>
          <ol className={style.instructions}>
            {instructions.map(i => (
              <li key={i.number} className={style.step}>
                <input name={i.number} onChange={handleInstructions}></input>
                {i.number === instructions.length && (
                  <TiDelete
                    className={style.deleteButton}
                    onClick={handleRemoveLastStep}
                    title="remove last step"
                  />
                )}
              </li>
            ))}
            <button type="button" onClick={handleAddStep}>
              Add step
            </button>
          </ol>
        </div>
      </div>

      {/* ////////////// */}
      {/* Diet selection */}
      {/* ////////////// */}
      <br />
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
        <label for="pescatarian">
          <input type="checkbox" id="pescatarian" onChange={handleDiets} />
          Pescatarian
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
      <br />
      <label className={style.inputName}>URL of custom image:</label>
      <input
        className={style.url}
        type="url"
        name="image"
        onChange={handleChange}
      />

      <input type="submit" value="Create!" onClick={handleSubmit} />
    </form>
  );
}

export default connect(null, { getRecipes })(CreateRecipe);
