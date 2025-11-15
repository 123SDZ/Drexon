// Smooth scrolling
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll fade-in effect
const fadeElements = document.querySelectorAll('.fade-section, .fade-up');
const fadeInOnScroll = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
};


window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Trigger on load

function toggleFreeConsultationSlider() {
  const slider = document.getElementById("freeConsultationSlider");
  slider.style.display = slider.style.display === "block" ? "none" : "block";
}

