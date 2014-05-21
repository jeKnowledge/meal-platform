Meteor.methods({
  newMeal: function(mealName) {
    Meals.insert({ name: mealName, userId: Meteor.user()._id, places : []});
    return Meals.findOne({ name: mealName});
  },

  AddMealDate: function() {
  },

  AddMealPlace: function(meal_id,addPlace) {
  	Meals.update(meal_id, { $addToSet:{places: addPlace}});
  	console.log("JA ENTROU CRL");
  },

  AddMealFriend: function() {
  } 

});
