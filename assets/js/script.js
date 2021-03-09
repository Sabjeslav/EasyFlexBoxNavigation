window.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar-content'),
  navbarItem = document.querySelectorAll('.navbar-content-item'),
  hamburger = document.querySelector('.hamburger'),
  main = document.getElementById('main');

  toggleBurger = () => {
    hamburger.classList.toggle('hamburger-active');
    navbar.classList.toggle('navbar-active');
  };

  hamburger.addEventListener('click', () => {
      toggleBurger();
  });

  navbarItem.forEach(item => {
      item.addEventListener('click', () => {
        toggleBurger();
      })
  })
})