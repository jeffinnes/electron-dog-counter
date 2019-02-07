// This script does the hard work of manipulating the view and doing the dog math.
let beginButton = document.querySelector("#beginButton");
let intro = document.querySelector(".intro");
let userInput = document.querySelector(".user-input");
let countingStage = document.querySelector(".counting-stage");
let counted = document.querySelector(".counted");

beginButton.addEventListener('click', () => {
  intro.style.display = "none";
  userInput.style.display = "block";
});