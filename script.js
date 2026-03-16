// 1. CONFIGURATION DU COMPTE À REBOURS
const weddingDate = new Date("April 25, 2026 08:30:00").getTime();

const countdownFunction = setInterval(function() {

const now = new Date().getTime();
const distance = weddingDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

if (distance < 0) {
clearInterval(countdownFunction);
}

}, 1000);

// 2. LOGIQUE DU DIAPORAMA (Pour tes 3 photos)
let currentImageIndex = 0;
function nextImage() {
    const images = document.querySelectorAll('.slideshow-image');
    if (images.length === 0) return;

    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}
setInterval(nextImage, 5000);

// 3. GESTION DE LA MODALE RSVP
const rsvpModal = document.getElementById('rsvp-modal');
const showRsvpButton = document.getElementById('show-rsvp-button');
const closeButton = document.querySelector('.close-button');

if (showRsvpButton && rsvpModal) {
    showRsvpButton.onclick = function(e) {
        e.preventDefault();
        rsvpModal.style.display = 'block';
    };
}

if (closeButton) {
    closeButton.onclick = function() {
        rsvpModal.style.display = 'none';
    };
}

window.onclick = function(event) {
    if (event.target == rsvpModal) {
        rsvpModal.style.display = 'none';
    }
};
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

if (burgerMenu && navLinks) {
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('toggle');
    });
}
// ANIMATION AU SCROLL
const sections = document.querySelectorAll("section");

const revealSection = () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < trigger){
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSection);
revealSection();
