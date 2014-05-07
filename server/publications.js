Meteor.publish('meals', function() {
  return Meals.find({ userId: this.userId });
});
