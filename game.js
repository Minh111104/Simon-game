var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// Detect when a key is pressed
$(document).keypress(function() {
  if (!started) {
    // When the game has started, change h1 to say "Level 0"
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


// Detect clicked buttons that have the same class
$(".btn").click(function() {
  // Store the id of the button that got clicked, use keyword this to refer to the button object that triggered the click
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  // Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence
  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {
  // Check if the most recent user answer is the same as the game pattern
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("success");

    // If the user got the most recent answer right, then check that they have finished their sequence
    if (userClickedPattern.length == gamePattern.length) {
      // Call nextSequence() after 1000 milliseconds
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else {
    console.log("wrong");
    playSound("wrong");

    // Apply the game-over class to the body and the flash effect
    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    // Change h1 to Game over
    $("#level-title").text("Game Over, Press Any Key to Restart");

    // Start over the game
    startOver();
  }
}


function nextSequence() {
  // Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level
  userClickedPattern = [];

  // Increase the level by 1 every time nextSequence() is called
  level++;

  // Update the h1 with this change in the value of level
  $("#level-title").text("Level " + level);

  // Create random number from 0-3
  var randomNumber = Math.floor(Math.random() * 4);
  // Create random colors
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Select the button with the same id as the randomChosenColour and add a flash animation
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  // Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button
  playSound(randomChosenColour);
}


function playSound(name) {
  // Use JS to play the sound for the selected button colour
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColor) {
  // Add pressed class to the clicked button
  $("#" + currentColor).addClass("pressed");

  // Set time delay for the button to remove the pressed class after 100 milliseconds
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function startOver() {
  started = false;
  level = 0;
  gamePattern = [];
}
