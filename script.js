const iconMenu = document.querySelector('#ml');
const menu = document.getElementById('it-nav');
const navLink = document.querySelector('.nav-link');
iconMenu.addEventListener('click', () => {
  menu.classList.toggle('showMenu');
  iconMenu.classList.toggle('changeIcon');
});
navLink.addEventListener('click', () => {
  menu.classList.remove('showMenu');
  iconMenu.classList.remove('changeIcon');
});
