const scroll = new SmoothScroll('a[href*="#"]', { speed: 600});

const menuBtn = document.querySelector('.menu-btn');

const nav = document.querySelector('.navbar');
const menuNav = document.querySelector('.menu-nav');
const links = document.querySelectorAll('.menu-link');

let menuOpen = false;
links.forEach().(addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuOpen = false;
    }
}))

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuOpen = false;
    }
    
})