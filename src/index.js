import {
  renderQuestions,
  findAvenger,
  createSeries,
  finalAnswer,
  rotateCube,
  compare,
  finalAvenger,
  current,
  result
} from "./functions";

const startButton = document.querySelector(".btn");
const nextButton = document.querySelectorAll(".btn-next");
const playAgainButton = document.querySelector(".btn-last");

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

    let winner = finalAvenger[0];
    let resultAvenger;

    if (!checkedAnswer) {
      return false;
    }

    if (checkedAnswer.value === "1") {
      findAvenger(1);
    } else if (checkedAnswer.value === "2") {
      findAvenger(2);
    } else if (checkedAnswer.value === "3") {
      findAvenger(3);
    } else if (checkedAnswer.value === "4") {
      findAvenger(4);
    } else if (checkedAnswer.value === "5") {
      findAvenger(5);
    } else if (checkedAnswer.value === "6") {
      findAvenger(6);
    }

    console.log(finalAvenger);

    checkedAnswer.checked = false;

    if (current >= 7 && winner.avenger === "Iron Man") {
      resultAvenger = result.findIndex(obj => obj.name === "Iron Man");
      finalAnswer(result[resultAvenger]);
    } else if (current >= 7 && winner.avenger === "Black Widow") {
      resultAvenger = result.findIndex(obj => obj.name === "Black Widow");
      finalAnswer(result[resultAvenger]);
    } else if (current >= 7 && winner.avenger === "Hulk") {
      resultAvenger = result.findIndex(obj => obj.name === "Hulk");
      finalAnswer(result[resultAvenger]);
    } else if (current >= 7 && winner.avenger === "Hawkeye") {
      resultAvenger = result.findIndex(obj => obj.name === "Hawkeye");
      finalAnswer(result[resultAvenger]);
    } else if (current >= 7 && winner.avenger === "Captain America") {
      resultAvenger = result.findIndex(obj => obj.name === "Captain America");
      finalAnswer(result[resultAvenger]);
    } else if (current >= 7 && winner.avenger === "Thor") {
      resultAvenger = result.findIndex(obj => obj.name === "Thor");
      finalAnswer(result[resultAvenger]);
    }

    finalAvenger.sort(compare);
    rotateCube();
  });
});
