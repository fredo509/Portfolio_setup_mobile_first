const iconMenu = document.querySelector('#ml');
const menu = document.getElementById('it-nav');
const navLink = document.querySelectorAll('.nav-list');
iconMenu.addEventListener('click', () => {
  menu.classList.toggle('showMenu');
  iconMenu.classList.toggle('changeIcon');
});
navLink.forEach(navUrl => {
  navUrl.addEventListener('click', () => {
    menu.classList.remove('showMenu');
    iconMenu.classList.remove('changeIcon');
  });
});
