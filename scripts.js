// Hamburger Menü Toggling
const menu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('nav ul');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Scroll Animációk Inicializálása
AOS.init({
    duration: 1000,
    once: true
});

// Készségek Progress Bar Animáció
window.addEventListener('load', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        bar.style.width = bar.style.width;
    });
});

// JavaScript Popup Kezelése
document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var closePopupBtn = document.getElementById('closePopup');

    // Popup automatikus megnyitása oldal betöltésekor
    popup.style.display = 'flex';

    // Popup bezárása
    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Popup bezárása, ha bárhol kattintunk az ablakon kívül
    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
