var menu = document.getElementById('hamburgerIcon');
// grab menu
var mobileMenu = document.getElementById('mobileMenu');
var body = document.body;

function toggleMenu() {
  menu.classList.toggle('hamburger-icon__close-x');
  mobileMenu.classList.toggle('mobile-menu--isActive');
  body.classList.toggle('lock-scroll');
}