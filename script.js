/* Affichage du menu de navigation en version mobile */

function toggleMenu() {
    var menu = document.querySelector('.navigation');
    menu.style.display = menu.style.display === 'flex' ? '' : 'flex';
}

function hideMenu() {
    var menu = document.querySelector('.navigation');
    menu.style.display = '';
}

window.addEventListener('scroll', hideMenu);

/* Script pour le slider */

var i = 0;
var slides = document.getElementsByClassName('slide');
var dots = document.getElementsByClassName('dot');
var time = 3000;

function nextSlide() {
    slides[i].classList.remove('show');
    dots[i].checked = false;
    i = (i + 1) % slides.length;
    slides[i].classList.add('show');
    dots[i].checked = true;
}

setInterval(nextSlide, time);



