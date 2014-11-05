$(document).ready(function(){

  window.dancers = [];

  $("body").on("mouseover", ".dancer",function(){
    debugger;
    $(this).animate({
      left: "+=300"
    }, 2000, function() {
    // Animation complete.
    });
  });

  $("body").on("click", ".dancer",function(){
    $(this).animate({
      opacity: 1
    }, 2000, function() {
    // Animation complete.
    });
    //$(this).pause = false;
    //$(this).step();
  });

  $(".lineup").on("click", function(event){
    //Get the number of dancers
    var numberDancers = window.dancers.length;
    // Get the width of the window
    var windowWidth = $("body").width();
    // Determine the equal spacing
    var spacing = (windowWidth-100)/numberDancers;
    // For each dancer call lineup method with new left position as 50 and the top position to y + spacing
    var leftPosition = 50;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].pause = true;
      window.dancers[i].setPosition(420, leftPosition, "lineup");
      leftPosition += spacing;
    }
  });

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      (($("body").height()-350) * Math.random())+350,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  var checkCollisions = function() {
    var leftDistance;
    var topDistance;
    var totalDistance;
    for (var i = 0; i < window.dancers.length - 1; i++) {
      for (var j = i+1; j<window.dancers.length; j++) {
        leftDistance = window.dancers[i].left - window.dancers[j].left;
        topDistance = window.dancers[i].top - window.dancers[j].top
        totalDistance = Math.sqrt(Math.pow(Math.abs(leftDistance),2) + Math.pow(Math.abs(topDistance),2));

        if(totalDistance < 20) {
          window.dancers[i].collideDancer();
          window.dancers[j].collideDancer();
        }

      }
    }
  };

  setInterval(function() {
    checkCollisions();
  },500);

});

