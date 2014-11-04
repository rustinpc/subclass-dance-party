var LazyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps*2);
  this.$node.addClass("lazydancer");
};

LazyDancer.prototype = Object.create(Dancer.prototype);
LazyDancer.prototype.constructor = LazyDancer;

LazyDancer.prototype.step = function(timeBetweenSteps){
  this.$node.toggle();
  Dancer.prototype.step.call(this, timeBetweenSteps);

};
