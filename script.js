var slides = document.getElementsByClassName("banner-slide");
var currentSlideIndex = 0;

function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    currentSlideIndex++;
    if (currentSlideIndex == slides.length) {
        currentSlideIndex = 0;
    }
    slides[currentSlideIndex].style.opacity = 1;
}

setInterval(showSlides, 6000);