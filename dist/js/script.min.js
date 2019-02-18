const pages = document.querySelectorAll('.pt-page');
const nextBtn = document.querySelector('.btn');

let current = 0;

nextBtn.addEventListener('click', function(e) {
	e.preventDefault();

	if (current >= 5) {
		return false;
	}


	pages[current].classList.add("pt-page-rotateCubeRightOut");
	pages[current].classList.add("pt-page-ontop");

	pages[current + 1].classList.add("pt-page-rotateCubeRightIn");
	pages[current + 1].classList.add("pt-page-current");

	console.log(current);
	current++

	setTimeout(() => {
	pages[current].classList.remove("pt-page-rotateCubeRightIn");
	pages[current - 1].classList.remove("pt-page-current");
	pages[current - 1].classList.remove("pt-page-rotateCubeRightOut");
	pages[current - 1].classList.remove("pt-page-ontop");

	
}, 600);

console.log(current);

});