// Smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');

musicToggle.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.innerHTML = '<i class="fas fa-music"></i> Pause';
  } else {
    bgMusic.pause();
    musicToggle.innerHTML = '<i class="fas fa-music"></i> Play';
  }
});

// Testimonials slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

// Auto slide
let testimonialInterval = setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 4000);

// Manual navigation
prevBtn.addEventListener('click', () => {
  clearInterval(testimonialInterval);
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

nextBtn.addEventListener('click', () => {
  clearInterval(testimonialInterval);
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

// Scroll animations
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 50) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);