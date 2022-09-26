let homeEl = document.getElementById("home-score");
let awayEl = document.getElementById("away-score");
let homeOnePoint = document.getElementById("home-one-point");
let homeTwoPoint = document.getElementById("home-two-point");
let homeThreePoint = document.getElementById("home-three-point");
let awayOnePoint = document.getElementById("away-one-point");
let awayTwoPoint = document.getElementById("away-two-point");
let awayThreePoint = document.getElementById("away-three-point");
let newBtn = document.getElementById("new-game-btn");

let homeScore = 0;
let awayScore = 0;

function highlight() {
  if (homeScore > awayScore) {
    homeEl.classList.add("highlight");
    awayEl.classList.remove("highlight");
  } else if (homeScore < awayScore) {
    awayEl.classList.add("highlight");
    homeEl.classList.remove("highlight");
  } else if (homeScore == awayScore) {
    homeEl.classList.remove("highlight");
    awayEl.classList.remove("highlight");
  }
}

// Increment home score

function onePoint() {
  homeScore += 1;
  homeEl.textContent = homeScore;
  highlight();
}
function twoPoint() {
  homeScore += 2;
  homeEl.textContent = homeScore;
  highlight();
}
function threePoint() {
  homeScore += 3;
  homeEl.textContent = homeScore;
  highlight();
}

// Increment away score

function onePointAway() {
  awayScore += 1;
  awayEl.textContent = awayScore;
  highlight();
}
function twoPointAway() {
  awayScore += 2;
  awayEl.textContent = awayScore;
  highlight();
}
function threePointAway() {
  awayScore += 3;
  awayEl.textContent = awayScore;
  highlight();
}

// start new game

function newGame() {
  homeScore = 0;
  awayScore = 0;
  homeEl.textContent = 0;
  awayEl.textContent = 0;
  homeEl.classList.remove("highlight");
  awayEl.classList.remove("highlight");
}
