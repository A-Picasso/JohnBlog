const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.button-menu');
const closeMenuBtn = document.querySelector('.button-close');

function toggleMenu() {
  menu.classList.toggle('menu_opened');
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);