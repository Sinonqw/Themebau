document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__mobile-menu');
    const closeBtn = document.querySelector('.close-btn');

    burger.addEventListener('click', e => {
        e.preventDefault();
        menu.style.transform = `translateX(0)`;
        burger.style.display = `none`;
        closeBtn.style.opacity = `1`;
    });

    closeBtn.addEventListener('click', () => {
        menu.style.transform = `translateX(100%)`;
        burger.style.display = `flex`;
        closeBtn.style.opacity = `0`;
    });
});
