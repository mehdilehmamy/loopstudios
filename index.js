const menuBtn = document.querySelector('.menu-btn');
const hero = document.querySelector('.hero');
const navbar = document.querySelector('.navbar');
const intro = document.querySelector('.intro');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    hero.classList.add('hero-mobile');
    navbar.classList.add('navbar-mobile');
    intro.classList.add('blacken');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    hero.classList.remove('hero-mobile');
    navbar.classList.remove('navbar-mobile');
    intro.classList.remove('blacken');
    menuOpen = false;
  }
});