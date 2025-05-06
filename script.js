// JavaScript to handle the slideshow functionality

let currentSlide = 0; 

const slides = document.querySelectorAll('.slide-item'); 
const totalSlides = slides.length; 

function showSlide(index) {
    // Loop through all slides and hide them
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Display only the current slide
}
