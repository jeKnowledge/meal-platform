Meteor.methods({
  newMeal: function(mealName) {
    Meals.insert({ name: mealName, userId: Meteor.user()._id });
    return Meals.findOne({ name: mealName });
  }
});
