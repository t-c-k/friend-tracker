import { Meteor } from 'meteor/meteor';

import Meals from './meals';

Meteor.methods({
  'Meal.insert'(args) {
    const meal = Meals.insert(args);

    return meal;
  },

  'Meal.find'(args) {
    const meals = Meals.find({}).fetch();

    return meals;
  }
});
