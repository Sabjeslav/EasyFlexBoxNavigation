window.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar-content'),
  navbarItem = document.querySelectorAll('.navbar-content-item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger-active');
      navbar.classList.toggle('navbar-active');
  });

  navbarItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger-active');
          navbar.classList.toggle('navbar-active');
      })
  })
})