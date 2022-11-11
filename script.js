let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('item1');
        slide.classList.add('item');
    }
    slides[slidePosition].classList.add('item1');

}
function moveToNextSlide() {
    if (slidePosition == totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition == 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}
