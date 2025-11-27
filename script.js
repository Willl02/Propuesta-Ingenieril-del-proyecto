document.addEventListener("DOMContentLoaded", () => {

  // MENU HAMBURGUESA RESPONSIVE
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  // FORMULARIO CONTACTO
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Gracias, ${document.getElementById('nombre').value}! Hemos recibido tu mensaje.`);
    contactForm.reset();
  });
});
