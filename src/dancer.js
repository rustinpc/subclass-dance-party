// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step(timeBetweenSteps, top, left);


};

Dancer.prototype.step = function(timeBetweenSteps, top, left){

  setTimeout(this.step.bind(this,timeBetweenSteps, top, left), timeBetweenSteps);

};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};



// Rename class appropriatly
// Create the node variable
// Create the step method
// Create the setposition method on the prototype
// Define the $node property correctly
