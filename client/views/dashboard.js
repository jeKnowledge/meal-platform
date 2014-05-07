Template.dashboard.selectedMealName = function() {
  var meal = Meals.findOne(Session.get('selectedMeal'));
  return meal && meal.name;
};

Template.dashboard.meals = function() {
  return Meals.find({ });
};

Template.dashboard.rendered = function() { }

Template.dashboard.events({
  'click #new-meal-btn': function() {
    var newMealName = $('#new-meal-name-input').val();

    Meteor.call('newMeal', newMealName, function(error, result) {
      if (error) {
        console.log(error);
      }

      Session.set('selectedMeal', result._id)
    });
  },

  'change #meal-select': function() {
    var selectedMealName = $('#meal-select').val();
    var selectedMeal = Meals.findOne({ name: selectedMealName });
    Session.set('selectedMeal', selectedMeal._id)
  }
});
