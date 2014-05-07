Meteor.methods({
  newMeal: function(mealName,mealDate) {
    Meals.insert({ name: mealName, userId: Meteor.user()._id , date: mealDate});
    return Meals.findOne({ name: mealName, date:mealDate});
  }
});
