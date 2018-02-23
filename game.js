// Setting variables for the game

//Array of letters that the computer can choose from
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

//User's wins, losses and number of guesses remaining in the game
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//compGuess variable is the result of the computer randomly picking a letter from above array
var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

//Listening for events...
document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase();

  if (userGuess === compGuess) {
    wins++, guessesLeft--;
  } else {
    guessesLeft--,
      (compGuess = alphabet[Math.floor(Math.random() * alphabet.length)]);
  }

  if (guessesLeft === 0) {
    losses++,
      (guessesLeft = 9),
      (compGuess = alphabet[Math.floor(Math.random() * alphabet.length)]);
  }

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
