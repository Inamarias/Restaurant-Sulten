
// Slideshow på forsiden:
// Hentet fra: https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 0;
showSlides();
var slides, dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("bilde-slideshow");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 8000); // Går til neste bilde hvert 8. sekund
}

// Styrer frem- og tilbake-knapper
function plusSlides(position) {
  slideIndex +=position;
  if (slideIndex> slides.length) {slideIndex = 1}
  else if(slideIndex<1){slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
  if (index> slides.length) {index = 1}
  else if(index<1){index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";  
  dots[index-1].className += " active";
}

// Toggle meny:
// Hentet fra https://stackoverflow.com/questions/63960934/i-want-to-close-this-side-bar-by-clicking-same-button
function OpenOrClose() {
  document.getElementById("mySidebar").classList.toggle("open");
  document.getElementById("main").classList.toggle("open");
  }