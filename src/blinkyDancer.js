var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps){
  this.$node.toggle();
  Dancer.prototype.step.call(this, timeBetweenSteps);

};


// Call Dancer
// Define prototype and constructor
// Move step to be a method
// Refactor the step function code somehow
