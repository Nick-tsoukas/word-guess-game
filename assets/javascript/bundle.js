(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// var R = require('ramda');
// var square = function square (x) { return x * x; }
// var squares = R.chain(square, [1, 2, 3, 4, 5]);
//
// document.getElementById('response').innerHTML = squares;
let numberOfGuesses = 0;

let placeHolder = document.getElementById('placeHolder');
let wrongLetterElement = document.getElementById('wrongLetter');
let key;
var wordArray = ['nick','john','mike'];
var word = "nick";
var spanElements = document.getElementsByTagName('span');
// get the key userPressed

(function () {
  window.addEventListener("keydown", dealWithKeyboard, false);
})();

function incrementNum(num) {
  console.log('incre function')
  return num++;
}

function winOrLose(){
  var counter = 0;
  Array.from(spanElements).forEach(function(val) {
    if(val.innerHTML !== '_'){
      counter++;
      console.log(counter)
    }
    if(counter === word.length){
      document.write(`<h1> you won the game </h1>`)
    }
  })
}

function checkGuess(key,word) {
  Array.from(word).forEach(function(currentLetter,index) {
    if(key === currentLetter){
      let indexOfLetter = word.indexOf(key);
      return spanElements[indexOfLetter].innerHTML = key;
    }
  });
  if(word.indexOf(key) === -1){
    wrongLetterElement.innerText += ` ${key} `;
  }
}

function dealWithKeyboard(e) {
   key = String.fromCharCode(e.keyCode).toLowerCase();
   checkGuess(key,word);
   winOrLose();
   incrementNum(numberOfGuesses);
}

// end of get key functions

//  builds the placehold text _ _ _ _

function buildPlaceHolder(word) {
  Array.from(word).forEach(function(val,index,array) {
    placeHolder.innerHTML += `<span id="${index}">_</span>`;
  });
};

// end of placeholder

buildPlaceHolder(word);











// var gameLetters = document.getElementById('placeHolder');
// var wrongLetters = document.getElementById('wrongLetter');
// var word = Array.from("madonna");
// var maxGuess = word.length;
// var numberOfGuess = 0;
// var userGuess;
//
// window.addEventListener("keydown", function(e) {
//   userGuess = e.key;
//   checkGuessAndAddLetter(userGuess,word);
//   return userGuess;
// });
//
// // function to build the _ _ _ per letter of word
// function buildPlaceHolder(array) {
//   word.forEach(function(letter,index,array) {
//     gameLetters.innerHTML += `<span id="${index}">_</span>`
//   });
// }
//
// function checkGuessAndAddLetter(guess,arrayOfWord){
//   arrayOfWord.forEach(function(letter,index,array) {
//     if(guess === letter){
//       var indexOfWord = document.getElementById(`${index}`);
//       // adds letter to the placeHolder
//       return indexOfWord.innerText = letter;
//     }
//     gameOver(arrayOfWord);
//   });
// }
//
// function gameOver(){
//   var spanTags = Array.from(document.getElementsByTagName('span'));
//   var counter = 0;
//   spanTags.forEach(function(currentLetter) {
//
//    if(currentLetter.innerText == "_"){
//     console.log(currentLetter.innerText)
//    } else {
//      counter++;
//    }
//  });
//
//   if(counter == word.length){
//     document.write(`<h1>You won the game!!!!!</h1>`)
//   }
// }
//
// buildPlaceHolder(word);

},{}]},{},[1]);
