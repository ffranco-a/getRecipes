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
  const stepModel = {
    number: instructions.length + 1,
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

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className={style.createRecipe}>
      <label>Recipe title:*</label>
      <input type="text" name="title" onChange={handleChange} />
      <label>summary:*</label>
      <input type="text" name="summary" onChange={handleChange} />
      {/* Dynamic step by step instructions */}
      <label>Step by step:</label>
      <ol className={style.instructions}>
        {instructions.map(i => (
          <li key={i.number} className={style.step}>
            <input name={i.number} onChange={handleInstructions}></input>
          </li>
        ))}
        <input type="button" value="Add step" onClick={handleAddStep} />
        <input
          type="button"
          value="Remove last step"
          onClick={handleRemoveLastStep}
          style={instructions.length === 0 ? { visibility: 'hidden' } : null}
        />
      </ol>
      {/* Diet selection */}
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
      {/* Custom recipe image through URL () */}
      {/* <label>URL of custom image:</label>
      <input type="url" name="image" onChange={handleChange} /> */}
      <input type="submit" value="Upload" onClick={handleSubmit} />* fields are
      required.
    </form>
  );
}

export default CreateRecipe;
