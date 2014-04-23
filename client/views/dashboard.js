var whichPageDeps = new Deps.Dependency;
var showNewMeal = false;

Template.dashboard.showNewMeal = function() {
  whichPageDeps.depend();

  return showNewMeal;
};

Template.dashboard.events({
  'click #new-meal-button': function() {
    whichPageDeps.changed();
    
    showNewMeal = !showNewMeal;
  }
});
