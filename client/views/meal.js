Template.meal.name = function() {
  return Meals.findOne({ _id: this._id }).name;
};

Template.meal.date = function() {
  return Meals.findOne({_id: this._id}).date;
};

Template.meal.hour = function() {
  return Meals.findOne({_id: this._id}).hour;
};

Template.meal.selected = function() {
  return Session.equals('selectedMeal', this._id) ? 'selected' : '';
};

Template.meal.events({
  'click': function() {
    console.log('hi');

    Session.set('selectedMeal', this._id);
  }
});
