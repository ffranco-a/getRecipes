import React, { useState } from 'react';
import style from './moduleCSS/CreateRecipe.module.css';

function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    title: '',
    summary: '',
    image:
      'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
  });
  const [diets, setDiets] = useState({
    vegetarian: false,
    vegan: false,
    'gluten free': false,
  });

  const [instructions, setInstructions] = useState([]);
  let stepNumber = 1;
  const stepModel = {
    number: stepNumber,
    step: '',
  };

  const handleChange = e => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleDiets = e => {
    setDiets({
      ...diets,
      [e.target.id]: e.target.checked,
    });
  };

  const handleInstructions = e => {
    setInstructions(instructions.push(stepModel))
    stepNumber++;
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className={style.createRecipe}>
      <label>Recipe title:</label>
      <input type="text" name="title" onChange={handleChange} />
      <label>Summary:</label>
      <input type="text" name="summary" onChange={handleChange} />
      <label>Instructions:</label>
      {instructions.map(i => {
        <div key={i.number}>
          <label>{i.stepNumber}</label>
          <input></input>
        </div>
      })}
      <input type="button" value="Add step" onClick={handleInstructions} />
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
          id="gluten free"
          onChange={handleDiets}
        />
        <label>Gluten Free</label>
      </div>

      {/* <label>URL of custom image:</label>
      <input type="url" name="image" onChange={handleChange} /> */}
      <input type="submit" value="Upload" onClick={handleSubmit} />
    </form>
  );
}

export default CreateRecipe;
