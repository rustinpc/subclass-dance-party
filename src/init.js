$(document).ready(function(){
  window.dancers = [];

  $(".lineup").on("click", function(event){
    //Get the number of dancers
    var numberDancers = window.dancers.length;
    // Get the height of the window
    var windowHeight = $("body").height();
    // Determine the equal spacing
    var spacing = (windowHeight-100)/numberDancers;
    // For each dancer call lineup method with new left position as 50 and the top position to y + spacing
    var topPosition = 50;
    for (i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(topPosition, 50);
      topPosition += spacing;
    }
  });
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

