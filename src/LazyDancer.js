var LazyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("lazydancer");
  this.height = 211;
  this.width = 150;
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
// LazyDancer.prototype.lineup = function(left, top) {

// };
