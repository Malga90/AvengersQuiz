import {
  renderQuestions,
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
    let resultAvenger, objIndex;

    if (!checkedAnswer) {
      return false;
    }

    if (checkedAnswer.value === "a") {
      objIndex = finalAvenger.findIndex(obj => obj.avenger === "Iron Man");
      finalAvenger[objIndex].score += 1;
    } else if (checkedAnswer.value === "b") {
      objIndex = finalAvenger.findIndex(obj => obj.avenger === "Black Widow");
      finalAvenger[objIndex].score += 1;
    } else if (checkedAnswer.value === "c") {
      objIndex = finalAvenger.findIndex(obj => obj.avenger === "Hulk");
      finalAvenger[objIndex].score += 1;
    } else if (checkedAnswer.value === "d") {
      objIndex = finalAvenger.findIndex(obj => obj.avenger === "Hawkeye");
      finalAvenger[objIndex].score += 1;
    } else if (checkedAnswer.value === "e") {
      objIndex = finalAvenger.findIndex(
        obj => obj.avenger === "Captain America"
      );
      finalAvenger[objIndex].score += 1;
    } else if (checkedAnswer.value === "f") {
      objIndex = finalAvenger.findIndex(obj => obj.avenger === "Thor");
      finalAvenger[objIndex].score += 1;
    }

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
