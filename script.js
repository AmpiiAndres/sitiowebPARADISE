// SECCION PERSONAJES-SLIDER
const slider = document.querySelector('.slider-content');
let isTransitioning = false;

function nextSlide() {
    if (!isTransitioning) {
        isTransitioning = true;
        slider.style.transition = 'transform 5s linear';
        slider.style.transform = 'translateX(-12.5%)';

        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            slider.appendChild(slider.firstElementChild);

            setTimeout(() => {
                slider.style.transition = 'transform 5s linear';
                isTransitioning = false;
            });
        }, 5000); 
    }
}

setInterval(nextSlide, 3000); 
// SECCION PERSONAJES
function toggleInfo(btn) {
  var card = btn.closest('.card');
  card.classList.toggle('show-info');
}

document.addEventListener("DOMContentLoaded", function () {
    // FORMULARIO REGISTRO
    anime({
      targets: '#registroForm',
      translateX: [-200, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad',
      delay: 2000 
    });
  
    // FORMULARIO INICIO SESION
    anime({
      targets: '#loginForm',
      translateX: [200, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad',
      delay: 2000 
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var sinopsisText = document.getElementById("sinopsisText");
    var agrandarClase = "agrandar-sinopsis";

    sinopsisText.addEventListener("mouseenter", function () {
        sinopsisText.classList.add(agrandarClase);
    });
    sinopsisText.addEventListener("mouseleave", function () {
        sinopsisText.classList.remove(agrandarClase);
    });
});

// SECCION RECOMENDACIONES
const titulo = document.getElementById('animated-title');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function animateTitle() {
  if (isElementInViewport(titulo)) {
    titulo.style.transition = 'none';
    titulo.style.transform = 'translateY(-20px)';
    titulo.style.opacity = 0;

    setTimeout(() => {
      titulo.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
      titulo.style.transform = 'translateY(0)';
      titulo.style.opacity = 1;
    }, 100);
  }
}
window.addEventListener('load', animateTitle);
window.addEventListener('scroll', animateTitle);
