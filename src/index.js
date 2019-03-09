import {
  renderQuestions,
  findAvenger,
  winnerAvenger,
  createSeries,
  finalAnswer,
  rotateCube,
  compare,
  finalAvenger,
  current,
  result
} from "./functions";

const startButton = document.querySelector(".btn");
const nextButton = document.querySelectorAll("[data-button]");
const resultButton = nextButton[nextButton.length - 1];

startButton.addEventListener("click", function(e) {
  e.preventDefault();
  renderQuestions;
  rotateCube();
});

nextButton.forEach(currentBtn => {
  currentBtn.addEventListener("click", function(e) {
    e.preventDefault();

    const checkedAnswer = document.querySelector([
      'input[type="radio"]:checked'
    ]);

    if (!checkedAnswer) {
      return false;
    }

    findAvenger(checkedAnswer.value);

    checkedAnswer.checked = false;
    rotateCube();
  });
});

resultButton.addEventListener("click", winnerAvenger);
