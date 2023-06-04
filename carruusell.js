document.addEventListener("DOMContentLoaded", function() {
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
  
    setInterval(function() {
      counter++;
      carousel.style.transform = `translateX(-${counter * itemWidth}px)`;
    }, 3000);
  });
  