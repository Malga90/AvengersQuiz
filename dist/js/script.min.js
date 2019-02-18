const pages = document.querySelectorAll('.pt-page');
const buttons = document.querySelectorAll('.btn');

let current = 0;

buttons.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (current >= 5) {
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