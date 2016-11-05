// HANGMAN JAVASCRIPT FILE //


// NOTES TO SELF
// 1. TechDebt: need to go DRY re for loops written long ways
// 2. Clean up extra unused variables and code

//initially declaring global variables //
//bank of words to use for game //
var wordBank = ["rottweiler", "chihuahua", "labradoodle", "pug", "terrier", "pomeranian", "mutt", "dalmation", "husky", "boxer"];

// bank of pictures to use in left box at start and after each win or loss//
var picBank = ["rott.gif", "chi.gif", "labdl.gif", "pug2.gif", "jt.gif", "pomm.gif", "mutt2.gif", "dal.gif", "husky.gif", "boxer.gif"];

//bank of sounds to use when winning
var soundBank = ["Rott.m4a", "Chi.m4a", "Lab.m4a", "Pug.m4a", "Terr.m4a", "Pomm.m4a", "Mutt.m4a", "Dal.m4a", "Husky.m4a", "Boxer.m4a"]

//initiate variable total wins for player//
var totalWins = 0;

//initiate array for writing out initial blank spaces//
var begBlank = [];

//initial number of guesses left//
var guessLeft = 15;

//initiate array for letters picked so far by user//
var lettersPicked = [];

//picking of random word (multiply by total number of words)//
var ranNum = Math.floor(Math.random()*10);
var selectedWord = wordBank[ranNum];

//user's current guess//
var guess = "";

//bad used letters//
var badLetters = [];

//good used letters//
var goodLetters = [];

//blanks spaces for game//
var spacedOut = [];

//counter to determine if word figured out//
var wordFind = selectedWord.length;

//counter to determine if begBlank and spacedOut are equal
var numRem = spacedOut.length

//test sound
var audio = "";
//audio.play();

//blank spacing//
function letterSpaces () {

	//writing out initial blank spaces//
	begBlank = [];

	//letters picked so far by user//
	lettersPicked = [];

	//picking of random word (multiple by total number of words)//
	ranNum = Math.floor(Math.random()*10);
	selectedWord = wordBank[ranNum];

	//user's current guess//
	guess = "";

	//good used letters//
	goodLetters = [];

	//bad used letters//
	badLetters = [];

	//blanks spaces for game//
	spacedOut = [];

	//test to display random word to console...test successful //
	console.log(selectedWord);
	console.log("-----------");

	//separate each letter of selected word into its own space in an arrary//
	sepLetter ();

	// for (i=0; i<selectedWord.length; i++) {
	// 	spacedOut.push(selectedWord[i]);
	// 	begBlank.push(" _");
	}

	//test to display spaced out letters to console...test successful//
	console.log(spacedOut);
	console.log(spacedOut.length);

	//counter to determine if begBlank and spacedOut are equal
	numRem = spacedOut.length;
	
	//populate initial page with initial data//
	initialLoad ();
}

//separate each letter of selected word into its own space in an arrary//
function sepLetter () {
	for (i=0; i<selectedWord.length; i++) {
	spacedOut.push(selectedWord[i]);
	begBlank.push(" _");
	}
}

//populate initial page with initial data//
function initialLoad () {
	document.getElementById("headGame").innerHTML = "PRESS ANY KEY TO PLAY!";
	document.getElementById("wordBlanks").innerHTML = begBlank.join(" ");
	document.getElementById("winCount").innerHTML = totalWins;
	document.getElementById("guessesLeft").innerHTML = guessLeft;
	document.getElementById("usedLetters").innerHTML = badLetters;
<<<<<<< HEAD
	document.getElementById("picLeft").innerHTML = "<img style='width:100%;' src='assets/images/letters.png'>";
=======
	document.getElementById("picLeft").innerHTML = "<img src='assets/images/letters.png'>";	
>>>>>>> 97356ffe4b83c3f151e9add1a27a14a4ecf38638
}

//display loser screen
function isLoser () {
	document.getElementById("headGame").innerHTML = "SORRY BUT YOU LOST.<BR><BR>  PRESS ANY KEY TO START AGAIN";
	document.getElementById("picLeft").innerHTML = '<img style="width:100%;" src="assets/images/slap.gif">';
	audio = new Audio("assets/sounds/Loser.m4a");
	audio.play();

};
//count down guesses and add to bank of bad letters
function badGuesser () {
	guessLeft--;
	badLetters.push(guess);
	document.getElementById("usedLetters").innerHTML = badLetters;
	document.getElementById("guessesLeft").innerHTML = guessLeft;
}

//give winner prize
function realWinner () {
	totalWins++;
	document.getElementById("headGame").innerHTML = "CONGRATS! YOU GUESSED <BR><BR>" + selectedWord.toUpperCase() + "!<BR><BR>PRESS ANY KEY TO PLAY AGAIN";
	document.getElementById("winCount").innerHTML = totalWins;
	document.getElementById("picLeft").innerHTML = "<img style='width:100%;' src='assets/images/" + picBank[ranNum] + "'>";
	audio = new Audio("assets/sounds/" + soundBank[ranNum]);
	audio.play();
	guessLeft = 0;
}

//run function to space out letters of selected word//
letterSpaces();

//test to see if random word and initial blank spacing work
console.log(guess);
console.log(spacedOut.length);
console.log(lettersPicked);
console.log(badLetters);

//listen for keystrokes and then compare to word, populate word blanks, decrease guess counter, see if guess counter<1, see if won//
document.onkeyup = function(event){

	//assign player keystroke to guess variable
	guess = String.fromCharCode(event.keyCode).toLowerCase();

	//check if out of guesses and if need to reset word blanks
	if (guessLeft <1) {
		guessLeft = 16;
		letterSpaces();
	} else {};

	//determine if guess is already accepted letter.  skip if so, continue if not.
	if (guess == goodLetters[0] || guess == goodLetters[1] || guess == goodLetters[2] || guess == goodLetters[3] || guess == goodLetters[4] || guess == goodLetters[5] || guess == goodLetters[6] || guess == goodLetters[7] || guess == goodLetters[8]) {
	} else {

		//adding guessed letter to list of letters picked
		lettersPicked.push(guess);


		//begin loop to see if guessed letter matches selected word or not
		for (i=0; i<spacedOut.length; i++){
			if (guess==spacedOut[i]) {

				//update word blanks
				begBlank[i]=guess;
				document.getElementById("wordBlanks").innerHTML = begBlank.join(" ");

				//test if player figured out word
				if (begBlank[i]==spacedOut[i]) {
						numRem--
						if (numRem<1) {
							realWinner ();
						} else {};
				} else {};

				// add guessed letter to array of goodLetters
				if (guess != goodLetters[0] && guess != goodLetters[1] && guess != goodLetters[2] && guess != goodLetters[3] && guess != goodLetters[4] && guess != goodLetters[5] && guess != goodLetters[6] && guess != goodLetters[7] && guess != goodLetters[8]) {
					goodLetters.push(guess);				
				} else {};
			} else {};  
		};
			//actions for bad guess
			if (guess != goodLetters[0] && guess != goodLetters[1] && guess != goodLetters[2] && guess != goodLetters[3] && guess != goodLetters[4] && guess != goodLetters[5] && guess != goodLetters[6] && guess != goodLetters[7] && guess != goodLetters[8] && guess != goodLetters[9]) {
				
				//display bad letters used and guesses left
				if (guess != badLetters[0] && guess != badLetters[1] && guess != badLetters[2] && guess != badLetters[3] && guess != badLetters[4] && guess != badLetters[5] && guess != badLetters[6] && guess != badLetters[7] && guess != badLetters[8] && guess != badLetters[9] && guess != badLetters[10] && guess != badLetters[11] && guess != badLetters[12] && guess != badLetters[13] && guess != badLetters[14] && guess != badLetters[15] && guess != badLetters[16] && guess != badLetters[17] && guess != badLetters[18] && guess != badLetters[19] && guess != badLetters[20] && guess != badLetters[21] && guess != badLetters[22] && guess != badLetters[23] && guess != badLetters[24] && guess != badLetters[25]) {
					badGuesser ();
				} else {};

				//determine if all guesses used and display lose screen
				if (guessLeft<1) {
					isLoser ();
				} else {};
			};	
		};
	};

