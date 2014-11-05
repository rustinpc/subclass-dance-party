// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, width, height){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.pause = false;
  this.width = width;
  this.height = height;
  this.originalHeight = height;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left, "initialize");
  this.step(timeBetweenSteps, top, left);

  // $(".dancer").mouseover(function(){
  //   this.pause = true;
  // });

  // $(".dancer").mouseout(function(){
  //   this.pause = false;
  //   this.step();
  // });


  // For the dancer object
  // Set a event handler when it's created, to do the following
  // Onmouseover for all dancers, set pause = true;
  // Onmouseout set pause = false and call step;


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
    this.collideDancers();

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

  var newHeight = this.originalHeight * (1-(((735-this.top)/12.8)*.01));
  var newWidth = newHeight * this.width/this.height;

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

Dancer.prototype.collideDancer = function() {
  // call this function on a set interval
  // compare each dancers position to every other dancers position
  // if the positions fall within a certain range, make the dancers dissapear
  console.log(this.$node);
  this.$node.animate({
    opacity: 0
  }, 500, function() {
    // Animation complete.
  });
};



// Rename class appropriatly
// Create the node variable
// Create the step method
// Create the setposition method on the prototype
// Define the $node property correctly
