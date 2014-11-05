var TinyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, 1, 1);
  this.$node.addClass("tinydancer");
};

TinyDancer.prototype = Object.create(Dancer.prototype);
TinyDancer.prototype.constructor = TinyDancer;

TinyDancer.prototype.step = function(timeBetweenSteps){
  if (!this.pause) {
    this.$node.toggle();
    this.scaleDancer();
    this.animateDancer();
    Dancer.prototype.step.call(this, timeBetweenSteps);
  }
};
