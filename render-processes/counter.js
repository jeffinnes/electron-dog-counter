// This script does the hard work of manipulating the view and doing the dog math.
let beginButton = document.querySelector("#begin-button");
let countButton = document.querySelector("#count-them");
let intro = document.querySelector(".intro");
let userInput = document.querySelector(".user-input");
let countingStage = document.querySelector(".counting-stage");
let countingProgress = document.querySelector("#counting");
let counted = document.querySelector(".counted");


beginButton.addEventListener('click', () => {
  intro.style.display = "none";
  userInput.style.display = "block";
});

countButton.addEventListener('click', () => {
  let randInterval = (Math.ceil(Math.random() * Math.floor(10))) * 10;
  
  userInput.style.display = "none";
  countingStage.style.display = "block";
  console.log(randInterval);

  //fill loading bar
  (function () {
    console.log('delay function called');
    let progress = 0;
    setInterval(() => {
      if (progress <= 100) {
        progress++
        countingProgress.value = progress;
      } else {
        countingStage.style.display = "none";
        counted.style.display = "block";
      }
    }, randInterval);
  })();
  
});

