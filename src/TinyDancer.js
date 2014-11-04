var TinyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("tinydancer");
};

TinyDancer.prototype = Object.create(Dancer.prototype);
TinyDancer.prototype.constructor = TinyDancer;

TinyDancer.prototype.step = function(timeBetweenSteps){
  this.$node.toggle();
  Dancer.prototype.step.call(this, timeBetweenSteps);

};
