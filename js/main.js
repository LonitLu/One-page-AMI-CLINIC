const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const menuHeader = document.querySelector('.header');
const menuNav = document.querySelector('.nav');
const menuExit = document.querySelector('.nav__exit');
const menuIcon = document.querySelector('.icon');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
  menuHeader.classList.toggle('menu--active');
  menuNav.classList.toggle('menu--active');
  menuBtn.classList.toggle('menu--active');
  menuExit.classList.toggle('menu--active');
  menuIcon.classList.toggle('icon--active');
});

menuExit.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
  menuHeader.classList.toggle('menu--active');
  menuNav.classList.toggle('menu--active');
  menuBtn.classList.toggle('menu--active');
  menuExit.classList.toggle('menu--active');
  menuIcon.classList.toggle('icon--active');
});