let navOpener = document.querySelector('.js-nav-opener');
let header = document.querySelector('.header');

navOpener.addEventListener('click', () => {
    header.classList.toggle('active');
});