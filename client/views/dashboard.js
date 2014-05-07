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
    });
  }
});
