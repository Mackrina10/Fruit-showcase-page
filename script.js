// JavaScript to handle the slideshow functionality

let currentSlide = 0;

const slides = document.querySelectorAll(".slide-item");
const totalSlides = slides.length;

function showSlide(index) {
  // Loop through all slides and hide them
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Display only the current slide
  slides[index].style.display = "block";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

showSlide(currentSlide);

// Add click event listeners to the navigation buttons
document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);