// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Animation
ScrollReveal({ distance: '60px', duration: 2500, delay: 400 });

ScrollReveal().reveal('.profile_name', { delay: 500, origin: 'left', distance: '10%' });

ScrollReveal().reveal('.about_section', { delay: 600 });
