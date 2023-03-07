const iconMenu = document.querySelector('#ml');
let menu = document.getElementById('it-nav');
iconMenu.addEventListener('click', () => {
  menu.classList.toggle('showMenu');
  iconMenu.classList.toggle('changeIcon');
});
