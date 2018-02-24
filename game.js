// Setting variables for the game

//Array of letters that the computer can choose from.
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//User's wins, losses and number of guesses remaining in the game.
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//compGuess variable is the result of the computer randomly picking a letter from above array.
var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

//Listening for events...
document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase();

  //If the user's guess is equal to the computer's guess, add 1 win, re-run random letter selection process and reset guesses to 9.
  if (userGuess === compGuess) {
    wins++,
      (guessesLeft = 9),
      (compGuess = alphabet[Math.floor(Math.random() * alphabet.length)]);
  } else {
    //Else, reduce guesses by 1 and re-run the random letter selection process.
    guessesLeft--,
      (compGuess = alphabet[Math.floor(Math.random() * alphabet.length)]);
  }
  //If the total number of guesses reaches 0, add 1 loss, re-run random letter selection process and reset guesses to 9.
  if (guessesLeft < 1) {
    losses++,
      (guessesLeft = 9),
      (compGuess = alphabet[Math.floor(Math.random() * alphabet.length)]);
  }

  //Add inner HTML to page.
  var html =
    "<p>You guessed: " +
    userGuess +
    "</p>" +
    "<p>Computer guessed: " +
    compGuess +
    "</p>" +
    "<p>Guesses Left: " +
    guessesLeft +
    "</p>" +
    "<p>Wins: " +
    wins +
    "</p>" +
    "<p>Losses: " +
    losses +
    "</p>";

  document.getElementById("game").innerHTML = html;
};
