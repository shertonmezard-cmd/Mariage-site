// 1. COMPTE À REBOURS
const weddingDate = new Date("April 25, 2026 08:30:00").getTime();
setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timer = document.getElementById("countdown-timer");
    if (timer) timer.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// 2. DIAPORAMA
let currentSlide = 0;
function playSlideshow() {
    const slides = document.querySelectorAll('.slideshow-image');
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(playSlideshow, 5000);

// 3. OUVERTURE / FERMETURE RÉSERVATION
const rsvpBtn = document.getElementById('show-rsvp-button');
const rsvpModal = document.getElementById('rsvp-modal');
const closeBtn = document.querySelector('.close-button');

if (rsvpBtn) {
    rsvpBtn.onclick = function(e) {
        e.preventDefault();
        rsvpModal.style.display = 'block';
    }
}

if (closeBtn) {
    closeBtn.onclick = function() {
        rsvpModal.style.display = 'none';
    }
}

// Ferme si on clique en dehors du formulaire
window.onclick = function(e) {
    if (e.target == rsvpModal) {
        rsvpModal.style.display = 'none';
    }
}
