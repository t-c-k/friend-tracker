import React, { useState, useEffect } from 'react';
import Hello from './Hello.jsx';
import Friends from './Friends.jsx'
import Goodbye from './Goodbye.jsx';

import { Meteor } from 'meteor/meteor';

import 'bootstrap/dist/css/bootstrap.min.css';

const Form = (props) => {

  const { mealName, onChange, onAddMealClick } = props;

  return (
    <div>
      <input onChange={onChange} value={mealName}/>
      <button onClick={onAddMealClick}>
        Add Meal
      </button>
    </div>
  )
}

const App = () => {
  const [state, setState] = useState({
    meals: [],
    mealName: ''
  });

  console.log(state);


  useEffect(() => {
    Meteor.call('Meal.find', {}, (error, meals) => {
      console.log(meals)
      if (!error) {
        setState(s => ({ ...s, meals }));
      }
    });
  }, []);



  const handleAddMealClick = () => {
    Meteor.call('Meal.insert', { name: state.mealName })
    setState({ mealName: '' })
  };

  const handleChange = event => {
    setState({ mealName: event.currentTarget.value });
  };


  return (
    <div className="container bg-white">
      <div className="row">
        <div className="col">
          <h4>Meals</h4>

          <ul>
            {state.meals.map(meal => {
              return (
                <li key={meal._id._str}>
                  {meal.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col">
          <h4>New Meal</h4>

          <Form mealName={state.mealName} onChange={handleChange} onAddMealClick={handleAddMealClick} />
        </div>
      </div>

      <div>

      </div>
    </div>
  );
};

export default App;
