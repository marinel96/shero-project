document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const counter = document.querySelector('.counter');
  
    let currentIndex = 0;
  
    const updateTestimonials = () => {
      testimonials.forEach((testimonial, index) => {
        testimonial.classList.toggle('active', index === currentIndex);
      });
      counter.textContent = `${currentIndex + 1}/${testimonials.length}`;
    };
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonials();
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateTestimonials();
    });
  
    // Initialize the first testimonial
    updateTestimonials();
  });



  document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const toggle = document.querySelector('.navbar-toggle');
  
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  });
  
  