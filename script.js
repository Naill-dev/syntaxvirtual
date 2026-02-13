// Particles.js fon effekti
particlesJS("particles-js", {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 900 } },
    color: { value: "#00f2ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
    size: { value: 3.5, random: true },
    line_linked: { enable: true, distance: 140, color: "#00f2ff", opacity: 0.35, width: 1 },
    move: { enable: true, speed: 1.8, direction: "none", random: true, straight: false, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 180, line_linked: { opacity: 0.7 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Smooth scroll və active nav link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    // Active class idarəsi
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');

    // Smooth scroll
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form göndərmə demo (real backend yoxdursa alert)
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mesajınız qəbul olundu! Tezliklə əlaqə saxlayacağıq.');
  this.reset();
});
