var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, 1, 1);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  if (!this.pause) {
    this.$node.toggle();
    this.scaleDancer();
    this.animateDancer();
    Dancer.prototype.step.call(this, this.timeBetweenSteps);
  }
};
