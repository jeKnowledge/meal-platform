Meteor.methods({
  newMeal: function(mealName) {
    Meals.insert({ name: mealName, userId: Meteor.user()._id, places: [], dates: []});
    return Meals.findOne({ name: mealName});
  },

  addMealDate: function(meal_id,addDate,addTime) {
    Meals.update(meal_id, { $addToSet:{dates: { date: addDate, hour: addTime}}});
  },

  addMealPlace: function(meal_id,addPlace,addVote) {
  	Meals.update(meal_id, { $addToSet: {places: { place: addPlace, votes: addVote}}});
  },

  addMealFriend: function() {
  } 

});
