// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.pause = false;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left, "initialize");
  this.step(timeBetweenSteps, top, left);


};

Dancer.prototype.step = function(){

  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};

Dancer.prototype.setPosition = function(top, left, action){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  if (action === "lineup") {
    this.top = top;
    this.left = left;
    this.scaleDancer();
    this.animateDancer();
    setTimeout(function() { this.pause = false; this.step(); }.bind(this),2000);

  }
  if (action === "initialize") {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
};

Dancer.prototype.calculateMovement = function() {
  var left = this.left;
  var top = this.top;

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

  this.left = left;
  this.top = top;
};

Dancer.prototype.scaleDancer = function() {
  var newHeight = 211 * (1-(((735-this.top)/12.8)*.01));
  var newWidth = newHeight * 0.71;

  this.height = newHeight;
  this.width = newWidth;
};
Dancer.prototype.animateDancer = function() {
  this.$node.animate({
    left: this.left,
    top: this.top,
    height: this.height,
    width: this.width,
  }, this.timeBetweenSteps, function() {
    // Animation complete.
  });
};



// Rename class appropriatly
// Create the node variable
// Create the step method
// Create the setposition method on the prototype
// Define the $node property correctly
