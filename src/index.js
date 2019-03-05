import _ from "lodash";
import "./style.css";

function component() {
  let element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());

// HTML Template for questions

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
  }
];

const renderQuestions = quiz.forEach((data, idx) => {
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
                        <div class="box-btn-next">
                          <button class="btn btn-next" >Next<span class="arrow-right">&rArr;</span></button>
                        </div>
                    </div>
                  </div>
                </div>
                <div class='column'>
                  <div class='image-column backgroundColor-${idx}'>
                      <div class='image-box'>
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
                <div class='image-column backgroundColor-${idx}'>
                    <div class='image-box'>
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
                        <div class="box-btn-next">
                          <button class="btn btn-next">Next<span class="arrow-right">&rArr;</span></button>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        `;
  }
}

// HTML Template for result
const result = [
  {
    name: "Iron Man",
    image: "src/img/a1.jpg",
    backgroundColor: "background-color: #ff898b",
    description:
      "Chocolate I love bonbon pie. Caramels I love donut sesame snaps toffee chocolate caramels. Toffee bonbon bear claw cookie cheesecake I love lollipop jelly muffin. Danish sesame snaps pie tart. Caramels fruitcake jelly macaroon gummi bears cake lollipop carrot cake I love. I love pastry lollipop powder sesame snaps sweet roll tootsie roll bear claw liquorice."
  },
  {
    name: "Black Widow",
    image: "src/img/a2.jpg",
    backgroundColor: "background-color: #CCB5E0;",
    description:
      "Chocolate I love bonbon pie. Caramels I love donut sesame snaps toffee chocolate caramels. Toffee bonbon bear claw cookie cheesecake I love lollipop jelly muffin. Danish sesame snaps pie tart. Caramels fruitcake jelly macaroon gummi bears cake lollipop carrot cake I love. I love pastry lollipop powder sesame snaps sweet roll tootsie roll bear claw liquorice."
  },
  {
    name: "Hulk",
    image: "src/img/a3.jpg",
    backgroundColor: "background-color: #ACDDB5;",
    description:
      "Chocolate I love bonbon pie. Caramels I love donut sesame snaps toffee chocolate caramels. Toffee bonbon bear claw cookie cheesecake I love lollipop jelly muffin. Danish sesame snaps pie tart. Caramels fruitcake jelly macaroon gummi bears cake lollipop carrot cake I love. I love pastry lollipop powder sesame snaps sweet roll tootsie roll bear claw liquorice."
  },
  {
    name: "Hawkeye",
    image: "src/img/a4.jpg",
    backgroundColor: "background-color: #EDCFEA;",
    description:
      "Chocolate I love bonbon pie. Caramels I love donut sesame snaps toffee chocolate caramels. Toffee bonbon bear claw cookie cheesecake I love lollipop jelly muffin. Danish sesame snaps pie tart. Caramels fruitcake jelly macaroon gummi bears cake lollipop carrot cake I love. I love pastry lollipop powder sesame snaps sweet roll tootsie roll bear claw liquorice."
  },
  {
    name: "Captain America",
    image: "src/img/a5.jpg",
    backgroundColor: "background-color: #A2C3D4;",
    description:
      "Chocolate I love bonbon pie. Caramels I love donut sesame snaps toffee chocolate caramels. Toffee bonbon bear claw cookie cheesecake I love lollipop jelly muffin. Danish sesame snaps pie tart. Caramels fruitcake jelly macaroon gummi bears cake lollipop carrot cake I love. I love pastry lollipop powder sesame snaps sweet roll tootsie roll bear claw liquorice."
  },
  {
    name: "Thor",
    image: "src/img/a6.jpg",
    backgroundColor: "background-color: #C6DEA2;",
    description:
      "Chocolate I love bonbon pie. Caramels I love donut sesame snaps toffee chocolate caramels. Toffee bonbon bear claw cookie cheesecake I love lollipop jelly muffin. Danish sesame snaps pie tart. Caramels fruitcake jelly macaroon gummi bears cake lollipop carrot cake I love. I love pastry lollipop powder sesame snaps sweet roll tootsie roll bear claw liquorice."
  }
];

function finalAnswer(data) {
  const markup = `<div class="row">
                    <div class="column">
                      <div class="image-column">
                        <div class="image-box">
                          <img src="${
                            data.image
                          }" alt="Avengers" class="image" />
                        </div>
                      </div>
                    </div>
                    <div class="column" style="${data.backgroundColor}">
                      <div class="outcome-column">
                        <h2 class="heading-secondary">
                          You are ${data.name}!
                        </h2>
                        <div class="outcome-text">
                          ${data.description}
                        </div>
                        <div class="box-btn-last">
                          <button class="btn btn-last">Play again!</button>
                        </div>
                      </div>
                    </div>
                </div>`;
  const section = document.createElement("section");
  const container = document.querySelector("#pt-main");

  section.classList.add("outcome");
  section.classList.add("pt-page");
  section.classList.add("pt-page-current");
  section.classList.add("pt-page-rotateCubeLeftIn");
  section.innerHTML = markup;
  container.appendChild(section);
  return markup;
}

// Quiz
const pages = document.querySelectorAll(".pt-page");
const startButton = document.querySelector(".btn");
const nextButton = document.querySelectorAll(".btn-next");
const playAgainButton = document.querySelector(".btn-last");
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

function compare(a, b) {
  if (a.score > b.score) return -1;
  if (a.score < b.score) return 1;
  return 0;
}

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
        obj => obj.avenger == "Captain America"
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
