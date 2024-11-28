
$(document).ready(function(){
    $('.navbar-nav .nav-link, .navbar-brand').on('click', function(e){
      if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800);
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Select all sections you want to animate
    const sections = document.querySelectorAll(".section");
  
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add active class when in view
          entry.target.classList.add("active");
        } else {
          // Remove active class when out of view (resets animation)
          entry.target.classList.remove("active");
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the section is in view
    });
  
    // Observe each section
    sections.forEach(section => observer.observe(section));
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running"; // Start animation
        } else {
          entry.target.style.animation = "none"; // Reset animation
          void entry.target.offsetWidth; // Trigger reflow
          entry.target.style.animation = ""; // Restart animation
        }
      });
    }, { threshold: 0.1 });
  
    boxes.forEach(box => observer.observe(box));
  });
  
  
  
  {/* -------------------------------------------------------------------------*/ }
  
  
  $(document).ready(function(){
    $('.navbar-nav .nav-link, .navbar-brand').on('click', function(e){
      if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800);
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Select all sections you want to animate
    const sections = document.querySelectorAll(".section");
  
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add active class when in view
          entry.target.classList.add("active");
        } else {
          // Remove active class when out of view (resets animation)
          entry.target.classList.remove("active");
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the section is in view
    });
  
    // Observe each section
    sections.forEach(section => observer.observe(section));
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running"; // Start animation
        } else {
          entry.target.style.animation = "none"; // Reset animation
          void entry.target.offsetWidth; // Trigger reflow
          entry.target.style.animation = ""; // Restart animation
        }
      });
    }, { threshold: 0.1 });
  
    boxes.forEach(box => observer.observe(box));
  });
  
  
  
  {/* -------------------------------------------------------------------------*/ }
  
  