import React, { useState } from 'react';
import style from './moduleCSS/CreateRecipe.module.css';
import { getRecipes } from '../actions';
import { connect } from 'react-redux';

const axios = require('axios');

function CreateRecipe({ getRecipes }) {
  const [recipe, setRecipe] = useState({
    title: '',
    summary: '',
    image: '',
  });

  const [errors, setErrors] = useState({});

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

  const handleDiets = e => {
    setDiets({
      ...diets,
      [e.target.id]: e.target.checked,
    });
  };

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

  const formRecipe = (recipe, instructions, diets) => {
    let newRecipe = { ...recipe };
    if (newRecipe.image === '') {
      newRecipe.image =
        'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80';
    }
    return {
      ...newRecipe,
      ...diets,
      analyzedInstructions: instructions,
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (recipe.title === '' || recipe.summary === '') {  // MODIFY!
      alert('Recipe must have a title and a summary!');
      return;
    }
    let newRecipe = formRecipe(recipe, instructions, diets);
    axios.post('http://localhost:3001/recipe', newRecipe).then(() => {
      getRecipes();
    });
  };

  return (
    <form className={style.createRecipe}>
      <label>Recipe title: {errors.title}</label>
      <input type="text" name="title" onChange={handleChange} required />
      <span>summary: {errors.summary}</span>
      <textarea type="text" name="summary" onChange={handleChange} required />

      {/* ///////////////////////////////// */}
      {/* Dynamic step by step instructions */}
      {/* ///////////////////////////////// */}
      <span>
        Step by step: 
        <button type="button" onClick={handleAddStep}>
          add
        </button>
        <button
          type="button"
          onClick={handleRemoveLastStep}
          style={instructions.length === 0 ? { visibility: 'hidden' } : null}
        >
          remove
        </button>
      </span>
      <ol className={style.instructions}>
        {instructions.map(i => (
          <li key={i.number} className={style.step}>
            <input name={i.number} onChange={handleInstructions}></input>
          </li>
        ))}
      </ol>

      {/* ////////////// */}
      {/* Diet selection */}
      {/* ////////////// */}
      <label>Select any diets your recipe is a part of:</label>
      <div className={style.diets}>
        <input
          type="checkbox"
          name="diets"
          id="vegetarian"
          onChange={handleDiets}
        />
        <label>Vegetarian</label> <br />
        <input type="checkbox" name="diets" id="vegan" onChange={handleDiets} />
        <label>Vegan</label> <br />
        <input
          type="checkbox"
          name="diets"
          id="glutenFree"
          onChange={handleDiets}
        />
        <label>Gluten Free</label>
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
