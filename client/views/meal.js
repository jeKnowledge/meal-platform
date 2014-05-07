Template.meal.name = function() {
  var meal = Meals.findOne({ _id: this._id });
  return meal.userId;
};
