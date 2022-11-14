const nav_btn = document.querySelector('.nav__mobile');
const nav_mobile = document.querySelector('.nav__menu-mobile');

nav_btn.addEventListener('click', function() {
    nav_mobile.classList.toggle('nav__menu-mobile--active');
    nav_btn.classList.toggle('nav__mobile-close');
})