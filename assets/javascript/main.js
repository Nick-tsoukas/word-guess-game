const wordArray = ['nick', 'john', 'mike'];
const word = wordArray[Math.floor((Math.random() * wordArray.length))];
let numberOfGuesses = 0;
let totalNumOfGuess = word.length;
let key;
let numGuess = document.getElementById('numGuess');
let placeHolder = document.getElementById('placeHolder');
let wrongLetterElement = document.getElementById('wrongLetter');
let spanElements = document.getElementsByTagName('span');

//build the place holder text _ _ _ _ _ _ _
function buildPlaceHolder(word) {
  Array.from(word).forEach(function(val, index, array) {
    placeHolder.innerHTML += `<span id="${index}">_</span>`;
  });
};
//get number of guesses player has. It is based on the length of word
function getGuessNum() {
  console.log(numGuess);
  numGuess.innerText = `${totalNumOfGuess}`;
}
// listens to keyDown event. Gets Key player presses and runs dealWithKeyboard()
(function() {
  window.addEventListener("keydown", dealWithKeyboard, false);
})();

function dealWithKeyboard(e) {
  key = String.fromCharCode(e.keyCode).toLowerCase();
  checkGuess(key, word);
  winOrLose();
  incrementNum(numberOfGuesses);
}

function checkGuess(key, word) {
  Array.from(word).forEach(function(currentLetter, index) {
    if (key === currentLetter) {
      let indexOfLetter = word.indexOf(key);
      return spanElements[indexOfLetter].innerHTML = key;
    }
  });
  if (word.indexOf(key) === -1) {
    wrongLetterElement.innerText += ` ${key} `;
    totalNumOfGuess--;
    getGuessNum();
  }
}

function winOrLose() {
  var counter = 0;
  Array.from(spanElements).forEach(function(val) {
    if (val.innerHTML !== '_') {
      counter++;
      console.log(counter);
    }
    if (counter === word.length + 1) {
      document.write(`<h1> you won the game </h1>`)
    }
  });
  if(totalNumOfGuess === 0) {
    return document.write(`<h1>You lost the game </h1>`)
  }
}

function incrementNum(num) {
  console.log('incre function')
  return num++;
}


buildPlaceHolder(word);
