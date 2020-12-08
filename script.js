const slideshow = document.getElementById('slideshow');
const slides = slideshow.getElementsByTagName('img');
let index = 0;
let indexText=0;
const slideshowText = document.getElementById('slideshowText');
const slidesText = slideshowText.getElementsByTagName('div');

function nextSlide() {
    slides[index].classList.remove('active'); 
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
    
}
function prevSlide() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
    
}
function nextSlideText() {
    slidesText[indexText].classList.remove('active');
    indexText = (indexText + 1) % slidesText.length;
    slidesText[indexText].classList.add('active');
}
function prevSlideText() {
    slidesText[indexText].classList.remove('active');
    indexText = (indexText - 1 + slidesText.length) % slidesText.length;
    slidesText[indexText].classList.add('active');
}

function menuToggle() {
    var nav = document.getElementById('header');
    nav.classList.toggle('active');
}