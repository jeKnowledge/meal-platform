Meteor.methods({
  newMeal: function(mealName) {
    Meals.insert({ name: mealName, userId: Meteor.user()._id });
  }
});
