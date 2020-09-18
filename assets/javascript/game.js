let teamOneNumShot = document.querySelector("#teamone-numshots");
let teamOneGoal = document.querySelector("#teamone-numgoals");
let teamTwoNumShot = document.querySelector("#teamtwo-numshots");
let teamTwoGoal = document.querySelector("#teamtwo-numgoals");
let oneNumShot = 0,
  twoNumShot = 0,
  oneNumGoal = 0,
  twoNumGoal = 0,
  chance = 60;

let teamOneButton = document.querySelector("#teamone-shoot-button");
teamOneButton.addEventListener("click", function () {
  oneNumShot += 1;
  teamOneNumShot.innerHTML = oneNumShot;
  let radNum = Math.floor(Math.random() * 101);
  if (radNum > chance) {
    oneNumGoal += 1;
    teamOneGoal.innerHTML = oneNumGoal;
  }
});

let teamTwoButton = document.querySelector("#teamtwo-shoot-button");
teamTwoButton.addEventListener("click", function () {
  twoNumShot += 1;
  teamTwoNumShot.innerHTML = twoNumShot;
  let radNum = Math.floor(Math.random() * 101);
  if (radNum > chance) {
    twoNumGoal += 1;
    teamTwoGoal.innerHTML = twoNumGoal;
  }
});

let reset = 0;
let resetNum = document.querySelector("#num-resets");
let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function () {
  //   location.reload();
  teamOneGoal.innerHTML = 0;
  teamOneNumShot.innerHTML = 0;
  teamTwoGoal.innerHTML = 0;
  teamTwoNumShot.innerHTML = 0;
  reset += 1;
  resetNum.innerHTML = reset;
});
