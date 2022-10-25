const open = document.querySelector('.header__right_menu');
const close = document.querySelector('.header__right_menu__close');
const body = document.querySelector('.header__right_menu__content');

open.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('_active');
});
close.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('_active');
})

