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
                        <a href="#" class="btn btn-next">Next<span class="arrow-right">&rArr;</span></a> 
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
                        <a href="#" class="btn btn-next">Next<span class="arrow-right">&rArr;</span></a> 
                    </div>
                </div>
                </div>
            </div>
        `;
  }
}

// Variables for CSS Animation
const pages = document.querySelectorAll(".pt-page");
const buttons = document.querySelectorAll(".btn");
let current = 0;

// Variables for quiz
const answerBtn = document.querySelectorAll(['input[type="radio"]']);
let points = 0;

buttons.forEach(function(currentBtn) {
  currentBtn.addEventListener("click", function(e) {
    e.preventDefault();

    if (current >= 10) {
      return false;
    }

    answerBtn.forEach(answer => {
      const checkedAnswer = document.querySelector([
        'input[type="radio"]:checked'
      ]);

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

      console.log(finalAvenger);

      // if (answer.checked && checkedAnswer.value === "a") {
      //   points += 1;
      // } else if (answer.checked && checkedAnswer.value === "b") {
      //   points += 2;
      // } else if (answer.checked && checkedAnswer.value === "c") {
      //   points += 3;
      // } else if (answer.checked && checkedAnswer.value === "d") {
      //   points += 4;
      // } else if (answer.checked && checkedAnswer.value === "e") {
      //   points += 5;
      // } else if (answer.checked && checkedAnswer.value === "f") {
      //   points += 6;
      // }
      // console.log(points);
    });

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
  });
});
