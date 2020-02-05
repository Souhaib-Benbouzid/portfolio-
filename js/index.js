const scroll = new SmoothScroll('a[href*="#"]', { speed: 600});

const menuBtn = document.querySelector('.menu-btn');

const nav = document.querySelector('.navbar');
const menuNav = document.querySelector('.menu-nav');

let menuOpen = false;


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
    
});



const parent = document.querySelector(".menu-nav");
parent.addEventListener('click', addOpen, false);

function addOpen(e) {
    if (e.target !== e.currentTarget){
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
    }
    e.stopPropagation;
}











