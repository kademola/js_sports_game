let teamOneNumShot = document.querySelector("#teamone-numshots");
let teamOneGoal = document.querySelector("#teamone-numgoals");
let teamTwoNumShot = document.querySelector("#teamtwo-numshots");
let teamTwoGoal = document.querySelector("#teamtwo-numgoals");
let oneNumShot = 0,
  twoNumShot = 0,
  oneNumGoal = 0,
  twoNumGoal = 0,
  chance = 60; // Declare and assign a value of 60 to determine if a shot is succedd or fail

// Audio for goal and missed shot
let goalAudio = document.querySelector("#goal-audio");
let missAudio = document.querySelector("#missed-audio");

// Team 1 shot and miss attempted
let teamOneButton = document.querySelector("#teamone-shoot-button");
teamOneButton.addEventListener("click", function () {
  oneNumShot += 1; // Increase Team 1 Number shot by 1
  teamOneNumShot.innerHTML = oneNumShot;
  let radNum = Math.floor(Math.random() * 101); // Random number from 0 to 100
  if (radNum > chance) {
    oneNumGoal += 1; // Increase Team 1 Number Goal by 1 when random is greater than chance value of 60
    teamOneGoal.innerHTML = oneNumGoal;
    goalAudio.play(); //Play sound when goal shot
  } else {
    missAudio.play(); //Play sound when missed shot
  }
});

// Team 2 shot and miss attempted
let teamTwoButton = document.querySelector("#teamtwo-shoot-button");
teamTwoButton.addEventListener("click", function () {
  twoNumShot += 1; // Increase Team 2 Number Shot by 1
  teamTwoNumShot.innerHTML = twoNumShot;
  let radNum = Math.floor(Math.random() * 101); // Random number from 0 to 100
  if (radNum > chance) {
    twoNumGoal += 1; // Increase Team 2 Number Goal by 1 when random is greater than chance value of 60
    teamTwoGoal.innerHTML = twoNumGoal;
    goalAudio.play(); //Play sound when goal shot
  } else {
    missAudio.play(); //Play sound when missed shot
  }
});

// Reset and add counter to button
let reset = 0;
let resetNum = document.querySelector("#num-resets");
let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function () {
  // Check who the winner is between Team 1 and Team 2
  if (twoNumGoal > oneNumGoal) {
    alert("Team 2 is the Winner");
  } else if (twoNumGoal < oneNumGoal) {
    alert("Team 1 is the Winner");
  } else {
    alert("It's a Draw");
  }

  // Reset the shot taken and goals
  teamOneGoal.innerHTML = 0;
  teamOneNumShot.innerHTML = 0;
  teamTwoGoal.innerHTML = 0;
  teamTwoNumShot.innerHTML = 0;
  reset += 1;
  resetNum.innerHTML = reset;
  oneNumShot = 0;
  oneNumGoal = 0;
  twoNumShot = 0;
  twoNumGoal = 0;
});
