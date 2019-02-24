const quiz = [
  {
    question: "1. How are you spending your free time?",
    answer1: "Building something",
    answer2: "Choosing black outfits",
    answer3: "Smashing things and people",
    answer4: "Quality time with my family",
    answer5: "Gym",
    answer6: "Partyyy!",
    image: "src/img/1.jpg"
  },
  {
    question: "2. How are you spending your free time?",
    answer1: "Building something",
    answer2: "Choosing black outfits",
    answer3: "Smashing things and people",
    answer4: "Quality time with my family",
    answer5: "Gym",
    answer6: "Partyyy!",
    image: "src/img/2.jpg"
  },
  {
    question: "3. How are you spending your free time?",
    answer1: "Building something",
    answer2: "Choosing black outfits",
    answer3: "Smashing things and people",
    answer4: "Quality time with my family",
    answer5: "Gym",
    answer6: "Partyyy!",
    image: "src/img/3.jpg"
  },
  {
    question: "4. How are you spending your free time?",
    answer1: "Building something",
    answer2: "Choosing black outfits",
    answer3: "Smashing things and people",
    answer4: "Quality time with my family",
    answer5: "Gym",
    answer6: "Partyyy!",
    image: "src/img/4.jpg"
  },
  {
    question: "5. How are you spending your free time?",
    answer1: "Building something",
    answer2: "Choosing black outfits",
    answer3: "Smashing things and people",
    answer4: "Quality time with my family",
    answer5: "Gym",
    answer6: "Partyyy!",
    image: "src/img/5.jpg"
  },
  {
    question: "6. How are you spending your free time?",
    answer1: "Building something",
    answer2: "Choosing black outfits",
    answer3: "Smashing things and people",
    answer4: "Quality time with my family",
    answer5: "Gym",
    answer6: "Partyyy!",
    image: "src/img/6.jpg"
  },
  {
    question: "7. How are you spending your free time?",
    answer1: "Building something",
    answer2: "Choosing black outfits",
    answer3: "Smashing things and people",
    answer4: "Quality time with my family",
    answer5: "Gym",
    answer6: "Partyyy!",
    image: "src/img/7.jpg"
  },
  {
    question: "8. How are you spending your free time?",
    answer1: "Building something",
    answer2: "Choosing black outfits",
    answer3: "Smashing things and people",
    answer4: "Quality time with my family",
    answer5: "Gym",
    answer6: "Partyyy!",
    image: "src/img/8.jpg"
  },
  {
    question: "9. How are you spending your free time?",
    answer1: "Building something",
    answer2: "Choosing black outfits",
    answer3: "Smashing things and people",
    answer4: "Quality time with my family",
    answer5: "Gym",
    answer6: "Partyyy!",
    image: "src/img/9.jpg"
  },
  {
    question: "10. How are you spending your free time?",
    answer1: "Building something",
    answer2: "Choosing black outfits",
    answer3: "Smashing things and people",
    answer4: "Quality time with my family",
    answer5: "Gym",
    answer6: "Partyyy!",
    image: "src/img/10.jpg"
  }
];

quiz.forEach((data, idx) => {
  const markup = createSeries(data, idx);
  const section = document.createElement("section");
  const container = document.querySelector("#pt-main");

  section.classList.add("section__question");
  section.classList.add("pt-page");
  section.innerHTML = markup;
  container.appendChild(section);
});

function createSeries(data, idx) {
  if (idx % 2 === 0) {
    return `
            <div class='row'>
                <div class='column'>
                <div class='question-column'>
                    <div class="question-box">
                        <h2 class="question-heading">
                        ${data.question}
                        </h2>
                        <ul class="answers__list">
                            <label>
                                <input type="radio" name="one" value="a"><li class="answers__list-item">${
                                  data.answer1
                                }</li>
                            </label>
                            <label>
                                <input type="radio" name="one" value="b"><li class="answers__list-item">${
                                  data.answer2
                                }</li>
                            </label>
                            <label>
                                <input type="radio" name="one" value="c"><li class="answers__list-item">${
                                  data.answer3
                                }</li>
                            </label>
                            <label>
                                <input type="radio" name="one" value="d"><li class="answers__list-item">${
                                  data.answer4
                                }</li>
                            </label>
                            <label>
                                <input type="radio" name="one" value="e"><li class="answers__list-item">${
                                  data.answer5
                                }</li>
                            </label>
                            <label>
                                <input type="radio" name="one" value="f"><li class="answers__list-item">${
                                  data.answer6
                                }</li>
                            </label>
                        </ul>
                    </div>
                    <div class="box-btn-next">
                        <a href="#" class="btn btn-next" data-button="answerBtn">Next<span class="arrow-right">&rArr;</span></a> 
                    </div>
                </div>
                </div>
                <div class='column'>
                <div class='image-column'>
                    <div class="image-box">
                        <img src="${data.image}" alt="Avengers" class="image">
                    </div>
                </div>
                </div>
        </div>
        `;
  } else {
    return `
            <div class='row'>
                <div class='column'>
                <div class='image-column'>
                    <div class="image-box">
                        <img src="${data.image}" alt="Avengers" class="image">
                    </div>
                </div>
                </div>
                <div class='column'>
                <div class='question-column'>
                    <div class="question-box">
                        <h2 class="question-heading">
                        ${data.question}
                        </h2>
                        <ul class="answers__list">
                            <label>
                                <input type="radio" name="one" value="a"><li class="answers__list-item">${
                                  data.answer1
                                }</li>
                            </label>
                            <label>
                                <input type="radio" name="one" value="b"><li class="answers__list-item">${
                                  data.answer2
                                }</li>
                            </label>
                            <label>
                                <input type="radio" name="one" value="c"><li class="answers__list-item">${
                                  data.answer3
                                }</li>
                            </label>
                            <label>
                                <input type="radio" name="one" value="d"><li class="answers__list-item">${
                                  data.answer4
                                }</li>
                            </label>
                            <label>
                                <input type="radio" name="one" value="e"><li class="answers__list-item">${
                                  data.answer5
                                }</li>
                            </label>
                            <label>
                                <input type="radio" name="one" value="f"><li class="answers__list-item">${
                                  data.answer6
                                }</li>
                            </label>
                        </ul>
                    </div>
                    <div class="box-btn-next">
                        <a href="#" class="btn btn-next" data-button="answerBtn">Next<span class="arrow-right">&rArr;</span></a> 
                    </div>
                </div>
                </div>
            </div>
        `;
  }
}

// Variables for CSS Animation
const pages = document.querySelectorAll(".pt-page");
const startButton = document.querySelector(".btn");
const answerBtn = document.querySelectorAll(".btn-next");
let current = 0;

let finalAvenger = [
  {
    avenger: "Iron Man",
    score: 0
  },
  {
    avenger: "Black Widow",
    score: 0
  },
  {
    avenger: "Hulk",
    score: 0
  },
  {
    avenger: "Hawkeye",
    score: 0
  },
  {
    avenger: "Captain America",
    score: 0
  },
  {
    avenger: "Thor",
    score: 0
  }
];

function rotateCube() {
  pages[current].classList.add("pt-page-rotateCubeLeftOut");
  pages[current].classList.add("pt-page-ontop");

  pages[current + 1].classList.add("pt-page-rotateCubeLeftIn");
  pages[current + 1].classList.add("pt-page-current");

  current++;

  setTimeout(() => {
    pages[current].classList.remove("pt-page-rotateCubeLeftIn");
    pages[current - 1].classList.remove("pt-page-current");
    pages[current - 1].classList.remove("pt-page-rotateCubeLeftOut");
    pages[current - 1].classList.remove("pt-page-ontop");
  }, 600);
}

startButton.addEventListener("click", function(e) {
  rotateCube();
});

// buttons.forEach(function(currentBtn) {
//   currentBtn.addEventListener("click", function(e) {
//     e.preventDefault();

//     if (current >= 10) {
//       return false;
//     }

//     // answerBtn.forEach(answer => {
//     const checkedAnswer = document.querySelector([
//       'input[type="radio"]:checked'
//     ]);

//     function compare(a, b) {
//       if (a.score > b.score) return -1;
//       if (a.score < b.score) return 1;
//       return 0;
//     }

//     // if (answer.checked) {
//     if (checkedAnswer.value === "a") {
//       objIndex = finalAvenger.findIndex(obj => obj.avenger == "Iron Man");
//       finalAvenger[objIndex].score += 1;
//     } else if (checkedAnswer.value === "b") {
//       objIndex = finalAvenger.findIndex(obj => obj.avenger == "Black Widow");
//       finalAvenger[objIndex].score += 1;
//     } else if (checkedAnswer.value === "c") {
//       objIndex = finalAvenger.findIndex(obj => obj.avenger == "Hulk");
//       finalAvenger[objIndex].score += 1;
//     } else if (checkedAnswer.value === "d") {
//       objIndex = finalAvenger.findIndex(obj => obj.avenger == "Hawkeye");
//       finalAvenger[objIndex].score += 1;
//     } else if (checkedAnswer.value === "e") {
//       objIndex = finalAvenger.findIndex(
//         obj => obj.avenger == "Captain America"
//       );
//       finalAvenger[objIndex].score += 1;
//     } else if (checkedAnswer.value === "f") {
//       objIndex = finalAvenger.findIndex(obj => obj.avenger == "Thor");
//       finalAvenger[objIndex].score += 1;
//     }

//     finalAvenger.sort(compare);
//     console.log(finalAvenger);
//     let winner = finalAvenger[0];
//     console.log(winner);
//     // }
//     // });
//   });
// });
