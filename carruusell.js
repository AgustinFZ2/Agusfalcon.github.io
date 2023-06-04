 const carousel = document.querySelector('.carousel-inner');
 const prevBtn = document.getElementById('prevBtn');
 const nextBtn = document.getElementById('nextBtn');
 const carouselItems = document.querySelectorAll('.carousel-item');
 const itemWidth = carouselItems[0].clientWidth;
 let counter = 0;
 
prevBtn.addEventListener('click', () => {
 counter--;
 carousel.style.transform = `translateX(-${counter * itemWidth}px)`;
 });
 
nextBtn.addEventListener('click', () => {
 counter++;
 carousel.style.transform = `translateX(-${counter * itemWidth}px)`;
 });
 /**/
 document.addEventListener("DOMContentLoaded", function() {
    var carouselContainer = document.querySelector(".carousel-container");
    var carouselImages = document.querySelectorAll(".carousel-container img");
  
    var imageWidth = carouselImages[0].clientWidth;
    var currentIndex = 0;
  
    function slideTo(index) {
      carouselContainer.style.transform = "translateX(-" + (imageWidth * index) + "px)";
      currentIndex = index;
    }
  
    setInterval(function() {
      var nextIndex = (currentIndex + 1) % carouselImages.length;
      slideTo(nextIndex);
    }, 3000);
  });