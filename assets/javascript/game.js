var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var hunches = [];
var randomLetter = [];
window.onload = function() {
	var answer = letters[Math.floor(Math.random() * letters.length)];
	randomLetter.push(answer);
}
document.onkeyup = function(event) {
	var playerGuess = event.key;
	hunches.push(playerGuess);
if ((playerGuess === randomLetter[0]) && (guesses > 0)) {
	wins++;
	guesses = 9;
	hunches.length = 0;
	randomLetter.length = 0;
	var answer = letters[Math.floor(Math.random() * letters.length)];
	randomLetter.push(answer);
}
else if ((playerGuess !== randomLetter[0]) && (guesses > 0)) {
	guesses = guesses-1;
}
else {
	losses++;
	guesses = 9;
	hunches.length = 0;
	randomLetter.length = 0;
	var answer = letters[Math.floor(Math.random() * letters.length)];
	randomLetter.push(answer);
}
var html ="<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guesses + "</p>" +
          "<p>Your guesses so far: " + hunches + "</p>";
 document.querySelector("#game").innerHTML = html;
}