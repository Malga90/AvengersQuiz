const quiz = [
    {
        question: '1. How are you spending your free time?',
        answer1: 'Building something',
        answer2: 'Choosing black outfits',
        answer3: 'Smashing things and people',
        answer4: 'Quality time with my family',
        answer5: 'Gym',
        answer6: 'Partyyy!'
    },
    {
        question: '2. How are you spending your free time?',
        answer1: 'Building something',
        answer2: 'Choosing black outfits',
        answer3: 'Smashing things and people',
        answer4: 'Quality time with my family',
        answer5: 'Gym',
        answer6: 'Partyyy!'
    },
    {
        question: '3. How are you spending your free time?',
        answer1: 'Building something',
        answer2: 'Choosing black outfits',
        answer3: 'Smashing things and people',
        answer4: 'Quality time with my family',
        answer5: 'Gym',
        answer6: 'Partyyy!'
    },
    {
        question: '4. How are you spending your free time?',
        answer1: 'Building something',
        answer2: 'Choosing black outfits',
        answer3: 'Smashing things and people',
        answer4: 'Quality time with my family',
        answer5: 'Gym',
        answer6: 'Partyyy!'
    },
    {
        question: '5. How are you spending your free time?',
        answer1: 'Building something',
        answer2: 'Choosing black outfits',
        answer3: 'Smashing things and people',
        answer4: 'Quality time with my family',
        answer5: 'Gym',
        answer6: 'Partyyy!'
    },
    {
        question: '6. How are you spending your free time?',
        answer1: 'Building something',
        answer2: 'Choosing black outfits',
        answer3: 'Smashing things and people',
        answer4: 'Quality time with my family',
        answer5: 'Gym',
        answer6: 'Partyyy!'
    },
    {
        question: '7. How are you spending your free time?',
        answer1: 'Building something',
        answer2: 'Choosing black outfits',
        answer3: 'Smashing things and people',
        answer4: 'Quality time with my family',
        answer5: 'Gym',
        answer6: 'Partyyy!'
    },
    {
        question: '8. How are you spending your free time?',
        answer1: 'Building something',
        answer2: 'Choosing black outfits',
        answer3: 'Smashing things and people',
        answer4: 'Quality time with my family',
        answer5: 'Gym',
        answer6: 'Partyyy!'
    },
    {
        question: '9. How are you spending your free time?',
        answer1: 'Building something',
        answer2: 'Choosing black outfits',
        answer3: 'Smashing things and people',
        answer4: 'Quality time with my family',
        answer5: 'Gym',
        answer6: 'Partyyy!'
    },
    {
        question: '10. How are you spending your free time?',
        answer1: 'Building something',
        answer2: 'Choosing black outfits',
        answer3: 'Smashing things and people',
        answer4: 'Quality time with my family',
        answer5: 'Gym',
        answer6: 'Partyyy!'
    }
];

// quiz.forEach((data, idx) => {
//     let markup = createSeries(data, idx);
//     let section = document.createElement("section");
//     section.classList.add("section__question");
//     section.innerHTML = markup;
//     document.header.appendChild(section);
// });

// function createSeries(data, idx) {
//     return `
//       <h2 class="a-Series_Title">${datarecord.Title}</h2>
//       <p class="a-Series_Description">
//         <span class="a-Series_DescriptionHeader">Description: </span>${datarecord.Description}
//       </p>
//   <h4 class="a-EpisodeBlock_Title">First episodes</h4>
//   <ul class="a-EpisodeBlock">    
//       <li class="a-EpisodeBlock_Item">
  
//         ${datarecord.Episodes.map((episode, index) => 
//           `
              
//               <span class="a-EpisodeBlock_Title"><b class="a-EpisodeBlock_EpisodeNo">${index+1}</b> ${episode}</span>
          
//           `
//         ).join("")}
  
  
//       </li>
//       ${datarecord.Ended === true ? `` : `<div class="a-Series_More">More to come!</div>`}
//   </ul>
//   <h4 class="a-ReviewsBlock_Title">Reviews</h4>
//       <ul class="a-ReviewsBlock">
          
//   ${datarecord.Reviews.map(review => 
//           `<li class="a-ReviewsBlock_Origin">
//               <b class="a-ReviewsBlock_Reviewer">${Object.keys(review)[0]}</b>
//               <span class="a-ReviewsBlock_Score">${review[Object.keys(review)[0]]}%</span>
//           </li>
//           `
//         ).join("")}
//       </ul>
//       <div class="a-UserRating">Average user rating: <b class="a-UserRating_Score">${getRatingsAverage(datarecord.UserRatings)}</b></div>
//   `;
// }


const pages = document.querySelectorAll('.pt-page');
const buttons = document.querySelectorAll('.btn');
let current = 0;



buttons.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (current >= 10) {
        return false;
    }
    
    pages[current].classList.add("pt-page-rotateCubeLeftOut");
    pages[current].classList.add("pt-page-ontop");
    
    pages[current + 1].classList.add("pt-page-rotateCubeLeftIn");
    pages[current + 1].classList.add("pt-page-current");
    
    console.log(current);
    current++;
    
    setTimeout(() => {
    pages[current].classList.remove("pt-page-rotateCubeLeftIn");
    pages[current - 1].classList.remove("pt-page-current");
    pages[current - 1].classList.remove("pt-page-rotateCubeLeftOut");
    pages[current - 1].classList.remove("pt-page-ontop");
    
        
    }, 600);
    
    console.log(current);
    });

});