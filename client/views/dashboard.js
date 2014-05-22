Template.dashboard.selectedMealName = function() {
  var meal = Meals.findOne(Session.get('selectedMeal'));
  return meal && meal.name;
};

Template.dashboard.meals = function() {
  return Meals.find({ });
};

Template.dashboard.rendered = function() {
  var allMeals = Meals.find({ }).fetch();
  if (allMeals.lentgh > 0) {
    Session.set('selectedMeal', allMeals[0]._id)
  }
};

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

  'click #add-meal-date-btn': function() {
    var addDate =$('#add-meal-date-parameter-input').val();
    var addTime =$('#add-meal-time-input').val();
    var selectedMealName = $('#meal-select').val();
    var selectedMeal = Meals.findOne({ name: selectedMealName });

    Meteor.call('addMealDate',selectedMeal._id, addDate, addTime, function(error) {
     if (error) {
      console.log(error);
     }
    });
  },

  'click #add-meal-friend-btn': function() {


  },

  'click #add-meal-place-btn': function() {
    var addPlace =$('#add-meal-place-input').val(); 
    var selectedMealName =$('#meal-select').val();
    var selectedMeal = Meals.findOne({ name: selectedMealName });

    Meteor.call('addMealPlace',selectedMeal._id, addPlace, 1, function(error) {
     if (error) {
      console.log(error);
     }
    });
  },

  'change #meal-select': function() {
    var selectedMealName = $('#meal-select').val();
    var selectedMeal = Meals.findOne({ name: selectedMealName });
    Session.set('selectedMeal', selectedMeal._id)
  }
});
