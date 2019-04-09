/* This script does the hard work of manipulating the view and doing the dog math. */

//section selecters
let beginButton = document.querySelector("#begin-button");
let countButton = document.querySelector("#count-them");
let intro = document.querySelector(".intro");
let userInput = document.querySelector(".user-input");
let countingStage = document.querySelector(".counting-stage");
let countingProgress = document.querySelector("#counting");
let counted = document.querySelector(".counted");
let output = document.querySelector('#output');
let resetButton = document.querySelector("#reset-button");

//Input element selecters
let currentDogsInput = document.querySelector("#current-dogs-input");
let additionalDogsInput = document.querySelector("#additional-dogs-input");

// //Output element selecters
// let currentDogsOutput = document.querySelector("#current-dogs-output");
// let additionalDogsOutput = document.querySelector("#additional-dogs-output");
// let totalDogsOutput = document.querySelector("#total-dogs-output");

//Event listeners
resetButton.addEventListener('click', () => {
  alert('Okay, Doin\' a reset.');
  intro.style.display = "block";
  userInput.style.display = "none";
  countingStage.style.display = "none";
  counted.style.display = "none";
  // ToDo Clear input fields
  currentDogsInput.value = 0;
  additionalDogsInput.value = 0;
});

beginButton.addEventListener('click', () => {
  intro.style.display = "none";
  userInput.style.display = "block";
});

countButton.addEventListener('click', () => {
  let randInterval = (Math.ceil(Math.random() * Math.floor(10))) * 10;
  let curDogs = parseInt(currentDogsInput.value);
  let addDogs = parseInt(additionalDogsInput.value);
  

  userInput.style.display = "none";
  countingStage.style.display = "block";

  //fill loading bar
  (function () {
    let progress = 0;
    let intervalID = setInterval(() => {
      if (progress <= 100) {
        progress++
        countingProgress.value = progress;
      } else {
        clearInterval(intervalID); //Removes the interval from the loop
        output.innerHTML = buildOutput(curDogs, addDogs);
        countingStage.style.display = "none";
        counted.style.display = "block";
      }
    }, randInterval);
  })();
  
});

function buildOutput(currentDogs, additionalDogs) {
  let totalDogs = currentDogs + additionalDogs;
  let output = '<p>';

  switch (currentDogs) {
    case 0:
      output = output + `It is really sad that you don't have any dogs. My heart aches for you.</p>`;
      break;
    
    case 1:
      output = output + `You have ${currentDogs} dog. Nice.</p>`;
      break;
  
    default:
      if (currentDogs < 0) {
        output = output + `You have ${currentDogs}? That shouldn't be possible unless you are eating dogs... leaving a palpable void in spacetime. You unholy, eldrich evil...</p>`;
      } else {
        output = output + `You have ${currentDogs} dogs, hurray!</p>`;
      }
      break;
  }

  // output = output + `</p>
  // <p>If you got ${additionalDogs} more, you would have `;

  switch (additionalDogs) {
    case 0:
      output = output + `<p>Truthfully, one can not have enough dogs... but if you didn't get more dogs, you would have `;
      break;
    
    case 1:
      output = output + `<p>If you only got 1 more dog, which doesn't seem like enough, you would have `;
      break;
  
    default:
      if (additionalDogs < 0) {
        output = output + `<p>Why would you want a negative amount of dogs. What's wrong with you. Dogs are life...</p> <p>I guess if you had ${additionalDogs} "more", you would have `;
      } else {
        output = output + `<p>If you got ${additionalDogs} dogs, you would have `;
      }
      break;
  }

  switch (totalDogs) {
    case 0:
      output = output + `no dogs.</p>`;
      break;

    case 1:
      output = output + `1 dog.</p>`;
      break;

    case -1:
      output = output + `-1 dog...</p>`;
      break;
  
    default:
      if (totalDogs < -1) {
        output = output + `${totalDogs} dogs. (and no one would like you)</p>`;
      } else {
        output = output + `${totalDogs} dogs! Such dogs! Very Bork! Havin' a happy!</p>`;
      }
      break;
  }

  return output;

}