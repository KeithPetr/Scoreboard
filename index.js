// List of all of the elements I need to interact with from the DOM
const championDisplayEl = document.getElementById("champion-display-el");
const challengerDisplayEl = document.getElementById("challenger-display-el");
const championScoreOne = document.getElementById("champion-score-one");
const championScoreTwo = document.getElementById("champion-score-two");
const championScoreThree = document.getElementById("champion-score-three");
const challengerScoreOne = document.getElementById("challenger-score-one");
const challengerScoreTwo = document.getElementById("challenger-score-two");
const challengerScoreThree = document.getElementById("challenger-score-three");
const championGenerateButton = document.getElementById("champion-generate-btn");
const challengerGenerateButton = document.getElementById(
  "challenger-generate-btn"
);
const newGameButton = document.getElementById("new-game-btn");

// initialized and set the scores and inputs to 0 so they can be changed
// as the game progresses
let championScore = 0;
let challengerScore = 0;
let randNumOne = 0;
let randNumTwo = 0;
let randNumThree = 0;
let randNumFour = 0;
let randNumFive = 0;
let randNumSix = 0;

// this function highlights who has the highest score with a gold border
// a tie score results in no border
function highlight() {
  if (championScore > challengerScore) {
    championDisplayEl.classList.add("leader");
    challengerDisplayEl.classList.remove("leader");
  } else if (challengerScore > championScore) {
    championDisplayEl.classList.remove("leader");
    challengerDisplayEl.classList.add("leader");
  } else if (championScore == challengerScore) {
    championDisplayEl.classList.remove("leader");
    challengerDisplayEl.classList.remove("leader");
  }
}

// the next 2 functions generate random numbers on the 3 scoring buttons
// between the values of 1 and 10
function championGenerateRandomNumber() {
  randNumOne = Math.ceil(Math.random() * 10);
  randNumTwo = Math.ceil(Math.random() * 10);
  randNumThree = Math.ceil(Math.random() * 10);
  championScoreOne.textContent = "+" + randNumOne;
  championScoreTwo.textContent = "+" + randNumTwo;
  championScoreThree.textContent = "+" + randNumThree;
}

function challengerGenerateRandomNumber() {
  randNumFour = Math.ceil(Math.random() * 10);
  randNumFive = Math.ceil(Math.random() * 10);
  randNumSix = Math.ceil(Math.random() * 10);
  challengerScoreOne.textContent = "+" + randNumFour;
  challengerScoreTwo.textContent = "+" + randNumFive;
  challengerScoreThree.textContent = "+" + randNumSix;
}

// the next 6 functions takes 1 of those random numbers, updates the
// text content to display that number and assigns it the same value as
// what is displayed. The highlight function runs on each of the 6 scoring
// inputs to make sure the leader is highlighted
function championAddOne() {
  championScore += randNumOne;
  championDisplayEl.textContent = championScore;
  highlight();
}
function championAddTwo() {
  championScore += randNumTwo;
  championDisplayEl.textContent = championScore;
  highlight();
}
function championAddThree() {
  championScore += randNumThree;
  championDisplayEl.textContent = championScore;
  highlight();
}
function challengerAddOne() {
  challengerScore += randNumFour;
  challengerDisplayEl.textContent = challengerScore;
  highlight();
}
function challengerAddTwo() {
  challengerScore += randNumFive;
  challengerDisplayEl.textContent = challengerScore;
  highlight();
}
function challengerAddThree() {
  challengerScore += randNumSix;
  challengerDisplayEl.textContent = challengerScore;
  highlight();
}

// the newGame function resets all the exisiting displays and values to
// 0 and removes the highlight so that a new game can start
function newGame() {
  championDisplayEl.textContent = 0;
  challengerDisplayEl.textContent = 0;
  championScoreOne.textContent = 0;
  championScoreTwo.textContent = 0;
  championScoreThree.textContent = 0;
  challengerScoreOne.textContent = 0;
  challengerScoreTwo.textContent = 0;
  challengerScoreThree.textContent = 0;
  championScore = 0;
  challengerScore = 0;
  randNumOne = 0;
  randNumTwo = 0;
  randNumThree = 0;
  randNumFour = 0;
  randNumFive = 0;
  randNumSix = 0;
  championDisplayEl.classList.remove("leader");
  challengerDisplayEl.classList.remove("leader");
}

// these are the events assigned to each clickable button on the page
// and the functions they run when clicked
championScoreOne.addEventListener("click", championAddOne);
championScoreTwo.addEventListener("click", championAddTwo);
championScoreThree.addEventListener("click", championAddThree);
challengerScoreOne.addEventListener("click", challengerAddOne);
challengerScoreTwo.addEventListener("click", challengerAddTwo);
challengerScoreThree.addEventListener("click", challengerAddThree);
championGenerateButton.addEventListener("click", championGenerateRandomNumber);
challengerGenerateButton.addEventListener(
  "click",
  challengerGenerateRandomNumber
);
newGameButton.addEventListener("click", newGame);
