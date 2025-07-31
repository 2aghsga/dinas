        // Hero Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide');
        
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[n].classList.add('active');
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Change slide every 5 seconds
        setInterval(nextSlide, 5000);
        
        // Mobile menu toggle (if needed)
        // You can implement this when making the site responsive
     
  const buttons = document.querySelectorAll(".menu-item");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Hanya untuk tombol dengan submenu di bawahnya
      if (this.nextElementSibling && this.nextElementSibling.classList.contains("submenu")) {
        this.classList.toggle("active");
      }
    });
  });
