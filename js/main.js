const nav_btn = document.querySelector('.nav__mobile');
const nav_mobile = document.querySelector('.nav__menu-mobile');
const body = document.body;

nav_btn.addEventListener('click', function(event) {
    event.stopPropagation();
    nav_mobile.classList.toggle('nav__menu-mobile--active');
    nav_btn.classList.toggle('nav__mobile-close');
    body.classList.toggle('nav__menu-mobile--active');
})

window.addEventListener('click', function() {
    if (body.classList.contains('nav__menu-mobile--active')) {
        nav_mobile.classList.toggle('nav__menu-mobile--active');
        nav_btn.classList.toggle('nav__mobile-close');
        body.classList.toggle('nav__menu-mobile--active');
    }
})

nav_mobile.addEventListener('click', function(event) {
    event.stopPropagation();
})
