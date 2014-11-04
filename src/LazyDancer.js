var LazyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("lazydancer");
};

LazyDancer.prototype = Object.create(Dancer.prototype);
LazyDancer.prototype.constructor = LazyDancer;

LazyDancer.prototype.step = function(timeBetweenSteps, top, left){

  timeBetweenSteps = (timeBetweenSteps/2)+500;

  left += (Math.floor(Math.random() * 101) - 50);
  if(left < 100) {
    left += (Math.random()*50);
  } else if(left > $("body").width()-100) {
    left -= (Math.random()*50);
  }

  top += (Math.floor(Math.random() * 101) - 50);
  if(top < 425) {
     top += (Math.random()*50);
  } else if(top > $("body").height()-50) {
     top -= (Math.random()*50);
  }


  console.log(left);

  this.$node.animate({
    left: left,
    top: top,
  }, timeBetweenSteps, function() {
    // Animation complete.
  });



  Dancer.prototype.step.call(this, timeBetweenSteps, top, left);
};
// LazyDancer.prototype.lineup = function(left, top) {

// };
