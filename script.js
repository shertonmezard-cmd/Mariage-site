// 1. COMPTE À REBOURS
const weddingDate = new Date("April 25, 2026 08:30:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timer = document.getElementById("countdown-timer");
    if (timer) {
        timer.innerHTML = days + "j " + hours + "h " + minutes + "m " + seconds + "s";
    }

    if (distance < 0) {
        clearInterval(countdownFunction);
        if (timer) timer.innerHTML = "C'est le grand jour !";
    }
}, 1000);

// 2. DIAPORAMA
let currentImageIndex = 0;
const images = document.querySelectorAll('.slideshow-image');

function showNextImage() {
    if (images.length === 0) return;
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}
setInterval(showNextImage, 5000);

// 3. MODALE RSVP
const rsvpModal = document.getElementById('rsvp-modal');
const showRsvpButton = document.getElementById('show-rsvp-button');
const closeButton = document.querySelector('.close-button');

if (showRsvpButton) {
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

// 4. MODALE IMAGES
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-modal-button');

document.querySelectorAll('.photo-item').forEach(item => {
    item.onclick = function() {
        imageModal.style.display = 'block';
        modalImage.src = this.getAttribute('data-full');
    };
});

if (closeModal) {
    closeModal.onclick = function() {
        imageModal.style.display = 'none';
    };
}

window.onclick = function(event) {
    if (event.target == rsvpModal) rsvpModal.style.display = 'none';
    if (event.target == imageModal) imageModal.style.display = 'none';
};
