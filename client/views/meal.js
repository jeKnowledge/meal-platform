Template.meal.name = function() {
 return Meals.findOne({ _id: this._id }).name;
};

Template.meal.selected = function() {
 return Session.equals('selectedMeal', this._id) ? 'selected' : '';
};

Template.meal.events({
 'click': function() {
   Session.set('selectedMeal', this._id);
  }
});
