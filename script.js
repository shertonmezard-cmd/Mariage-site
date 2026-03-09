// 1. COMPTE À REBOURS
const weddingDate = new Date("April 25, 2026 08:30:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timerElement = document.getElementById("countdown-timer");
    if (timerElement) {
        timerElement.innerHTML = `${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;
    }

    if (distance < 0) {
        clearInterval(countdownFunction);
        if (timerElement) timerElement.innerHTML = "C'est le grand jour !";
    }
}, 1000);

// 2. DIAPORAMA
let currentImageIndex = 0;
function nextImage() {
    const images = document.querySelectorAll('.slideshow-image');
    if (images.length === 0) return;
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}
setInterval(nextImage, 5000);

// 3. FORMULAIRE RSVP
const rsvpModal = document.getElementById('rsvp-modal');
const showRsvpButton = document.getElementById('show-rsvp-button');
const closeButton = document.querySelector('.close-button');

if (showRsvpButton && rsvpModal) {
    showRsvpButton.addEventListener('click', (e) => {
        e.preventDefault();
        rsvpModal.style.display = 'block';
    });
}
if (closeButton) {
    closeButton.addEventListener('click', () => {
        rsvpModal.style.display = 'none';
    });
}

// Fermeture des modales en cliquant à côté
window.addEventListener('click', (event) => {
    if (event.target === rsvpModal) rsvpModal.style.display = 'none';
});
