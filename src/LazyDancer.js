var LazyDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps, 150, 211);
  this.$node.addClass("lazydancer aladdin");
  this.timeBetweenSteps = (timeBetweenSteps/2)+500;

};

LazyDancer.prototype = Object.create(Dancer.prototype);
LazyDancer.prototype.constructor = LazyDancer;

LazyDancer.prototype.step = function(){

  if (!this.pause) {
    this.calculateMovement();
    this.scaleDancer();
    this.animateDancer();
    Dancer.prototype.step.call(this);
  }

};
