Template.main.rendered = function() { };

Template.main.events({

});

Meteor.startup(function() {
  //Meteor.subscribe('meals');
});

Deps.autorun(function() {
  //Meteor.subscribe('meals');
});

Meteor.subscribe('meals');
