Meteor.methods({
  newMeal: function(mealName,mealDate,mealHour) {
    Meals.insert({ name: mealName, userId: Meteor.user()._id, date: mealDate, hour: mealHour});
    return Meals.findOne({ name: mealName, date:mealDate, hour:mealHour});
  }
});
