document.addEventListener("DOMContentLoaded", function() {
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

  if (bgMusic && musicToggle) {
    musicToggle.addEventListener('click', () => {
      if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
      } else {
        bgMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-play"></i>';
      }
    });
  }

  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }

  showTestimonial(currentTestimonial);

  let testimonialInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 4000);

  if (prevBtn && nextBtn) {
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
  }

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
});

// =============================
// LIVE CLOCK
// =============================
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('id-ID', { hour12: false });
  const clock = document.getElementById('live-clock');
  if (clock) clock.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// =============================
// STATISTIK PENGUNJUNG
// =============================
let visitCount = localStorage.getItem('visitCount');
if (!visitCount) {
  visitCount = 1;
} else {
  visitCount = parseInt(visitCount) + 1;
}
localStorage.setItem('visitCount', visitCount);
const visitDisplay = document.getElementById('visit-count');
if (visitDisplay) visitDisplay.textContent = visitCount;

// =============================
// TOGGLE SIDEBAR
// =============================
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-sidebar');

if (sidebar && toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    toggleBtn.textContent = sidebar.classList.contains('collapsed') ? '❯' : '❮';
  });
}
