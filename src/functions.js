import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";
import image4 from "./img/4.jpg";
import image5 from "./img/5.jpg";
import image6 from "./img/6.jpg";
import image7 from "./img/7.jpg";
import answer1 from "./img/a1.jpg";
import answer2 from "./img/a2.jpg";
import answer3 from "./img/a3.jpg";
import answer4 from "./img/a4.jpg";
import answer5 from "./img/a5.jpg";
import answer6 from "./img/a6.jpg";

const quiz = [
  {
    question: "1. How are you spending your free time?",
    answers: [
      "Building something",
      "Choosing black outfits",
      "Smashing things and people",
      "Quality time with my family",
      "Gym",
      "Partyyy!"
    ],
    image: image1
  },
  {
    question: "2. What is your greates value?",
    answers: [
      "Building something",
      "Choosing black outfits",
      "Smashing things and people",
      "Quality time with my family",
      "Gym",
      "Partyyy!"
    ],
    image: image2
  },
  {
    question: "3. How are you spending your free time?",
    answers: [
      "Building something",
      "Choosing black outfits",
      "Smashing things and people",
      "Quality time with my family",
      "Gym",
      "Partyyy!"
    ],
    image: image3
  },
  {
    question: "4. How are you spending your free time?",
    answers: [
      "Building something",
      "Choosing black outfits",
      "Smashing things and people",
      "Quality time with my family",
      "Gym",
      "Partyyy!"
    ],
    image: image4
  },
  {
    question: "5. How are you spending your free time?",
    answers: [
      "Building something",
      "Choosing black outfits",
      "Smashing things and people",
      "Quality time with my family",
      "Gym",
      "Partyyy!"
    ],
    image: image5
  },
  {
    question: "6. How are you spending your free time?",
    answers: [
      "Building something",
      "Choosing black outfits",
      "Smashing things and people",
      "Quality time with my family",
      "Gym",
      "Partyyy!"
    ],
    image: image6
  },
  {
    question: "7. How are you spending your free time?",
    answers: [
      "Building something",
      "Choosing black outfits",
      "Smashing things and people",
      "Quality time with my family",
      "Gym",
      "Partyyy!"
    ],
    image: image7
  }
];

let result = [
  {
    id: 1,
    name: "Iron Man",
    image: answer1,
    backgroundColor: "background-color: #ff898b",
    description:
      "Chocolate I love bonbon pie. Caramels I love donut sesame snaps toffee chocolate caramels. Toffee bonbon bear claw cookie cheesecake I love lollipop jelly muffin. Danish sesame snaps pie tart. Caramels fruitcake jelly macaroon gummi bears cake lollipop carrot cake I love. I love pastry lollipop powder sesame snaps sweet roll tootsie roll bear claw liquorice."
  },
  {
    id: 2,
    name: "Black Widow",
    image: answer2,
    backgroundColor: "background-color: #CCB5E0;",
    description:
      "Chocolate I love bonbon pie. Caramels I love donut sesame snaps toffee chocolate caramels. Toffee bonbon bear claw cookie cheesecake I love lollipop jelly muffin. Danish sesame snaps pie tart. Caramels fruitcake jelly macaroon gummi bears cake lollipop carrot cake I love. I love pastry lollipop powder sesame snaps sweet roll tootsie roll bear claw liquorice."
  },
  {
    id: 3,
    name: "Hulk",
    image: answer3,
    backgroundColor: "background-color: #ACDDB5;",
    description:
      "Chocolate I love bonbon pie. Caramels I love donut sesame snaps toffee chocolate caramels. Toffee bonbon bear claw cookie cheesecake I love lollipop jelly muffin. Danish sesame snaps pie tart. Caramels fruitcake jelly macaroon gummi bears cake lollipop carrot cake I love. I love pastry lollipop powder sesame snaps sweet roll tootsie roll bear claw liquorice."
  },
  {
    id: 4,
    name: "Hawkeye",
    image: answer4,
    backgroundColor: "background-color: #EDCFEA;",
    description:
      "Chocolate I love bonbon pie. Caramels I love donut sesame snaps toffee chocolate caramels. Toffee bonbon bear claw cookie cheesecake I love lollipop jelly muffin. Danish sesame snaps pie tart. Caramels fruitcake jelly macaroon gummi bears cake lollipop carrot cake I love. I love pastry lollipop powder sesame snaps sweet roll tootsie roll bear claw liquorice."
  },
  {
    id: 5,
    name: "Captain America",
    image: answer5,
    backgroundColor: "background-color: #A2C3D4;",
    description:
      "Chocolate I love bonbon pie. Caramels I love donut sesame snaps toffee chocolate caramels. Toffee bonbon bear claw cookie cheesecake I love lollipop jelly muffin. Danish sesame snaps pie tart. Caramels fruitcake jelly macaroon gummi bears cake lollipop carrot cake I love. I love pastry lollipop powder sesame snaps sweet roll tootsie roll bear claw liquorice."
  },
  {
    id: 6,
    name: "Thor",
    image: answer6,
    backgroundColor: "background-color: #C6DEA2;",
    description:
      "Chocolate I love bonbon pie. Caramels I love donut sesame snaps toffee chocolate caramels. Toffee bonbon bear claw cookie cheesecake I love lollipop jelly muffin. Danish sesame snaps pie tart. Caramels fruitcake jelly macaroon gummi bears cake lollipop carrot cake I love. I love pastry lollipop powder sesame snaps sweet roll tootsie roll bear claw liquorice."
  }
];

let finalAvenger = [
  {
    id: 1,
    avenger: "Iron Man",
    score: 0
  },
  {
    id: 2,
    avenger: "Black Widow",
    score: 0
  },
  {
    id: 3,
    avenger: "Hulk",
    score: 0
  },
  {
    id: 4,
    avenger: "Hawkeye",
    score: 0
  },
  {
    id: 5,
    avenger: "Captain America",
    score: 0
  },
  {
    id: 6,
    avenger: "Thor",
    score: 0
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

const pages = document.querySelectorAll(".pt-page");
let current = 0;

function findAvenger(answerValue) {
  let objIndex;

  objIndex = finalAvenger.findIndex(obj => obj.id === Number(answerValue));
  finalAvenger[objIndex].score += 1;
}

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
                    ${data.answers
                      .map(
                        (answer, index) =>
                          `<label>
                            <input type="radio" name="one" value=${index + 1}>
                              <li class="answers__list-item">
                                ${answer}
                              </li>
                          </label>`
                      )
                      .join("")}
                  </ul>
                  <div class="box-btn-next">
                    <button class="btn btn-next" data-button="${idx}" >Next<span class="arrow-right">&rArr;</span>
                    </button>
                  </div>
              </div>
            </div>
          </div>
          <div class='column'>
            <div class='image-column backgroundColor-${idx}'>
                <div class='image-box'>
                    <img src="${data.image}"  alt="Avengers" class="image">
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
                ${data.answers
                  .map(
                    (answer, index) =>
                      `<label>
                        <input type="radio" name="one" value=${index + 1}>
                          <li class="answers__list-item">
                            ${answer}
                          </li>
                      </label>`
                  )
                  .join("")}
              </ul>
              <div class="box-btn-next">
              <button class="btn btn-next" data-button="${idx}" >Next<span class="arrow-right">&rArr;</span>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

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

function winnerAvenger() {
  finalAvenger.sort(compare);
  let winner = finalAvenger[0];

  let resultAvenger;

  resultAvenger = result.findIndex(obj => obj.id === winner.id);
  finalAnswer(result[resultAvenger]);
}

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

export {
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
};
