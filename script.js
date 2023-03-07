const iconMenu = document.querySelector('#ml');
const menu = document.getElementById('it-nav');
iconMenu.addEventListener('click', () => {
  menu.classList.toggle('showMenu');
  iconMenu.classList.toggle('changeIcon');
});
