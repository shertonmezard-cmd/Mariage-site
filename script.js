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

// 2. DIAPORAMA (CARROUSEL) - Correction pour activer la rotation
let currentImageIndex = 0;

function nextImage() {
    const images = document.querySelectorAll('.slideshow-image');
    if (images.length === 0) return;

    // On retire la classe active de l'image actuelle
    images[currentImageIndex].classList.remove('active');
    
    // On passe à l'image suivante (boucle de 0 à 4)
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // On affiche la nouvelle image
    images[currentImageIndex].classList.add('active');
}

// Lance le changement toutes les 5 secondes
setInterval(nextImage, 5000);

// 3. FORMULAIRE RSVP (MODALE)
const rsvpModal = document.getElementById('rsvp-modal');
const showRsvpButton = document.getElementById('show-rsvp-button');
const closeButton = document.querySelector('.close-button');

if (showRsvpButton) {
    showRsvpButton.addEventListener('click', function(event) {
        event.preventDefault();
        rsvpModal.style.display = 'block';
    });
}

if (closeButton) {
    closeButton.addEventListener('click', function() {
        rsvpModal.style.display = 'none';
    });
}

// 4. MODALE DES PHOTOS (AGRANDISSEMENT)
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModalButton = document.querySelector('.close-modal-button');
const photoItems = document.querySelectorAll('.photo-item');

photoItems.forEach(item => {
    item.addEventListener('click', function() {
        const imagePath = this.getAttribute('data-full');
        if (modalImage) {
            modalImage.src = imagePath;
            imageModal.style.display = 'block';
        }
    });
});

if (closeModalButton) {
    closeModalButton.addEventListener('click', function() {
        imageModal.style.display = 'none';
    });
}

// Fermeture si clic à l'extérieur
window.addEventListener('click', function(event) {
    if (event.target === rsvpModal) rsvpModal.style.display = 'none';
    if (event.target === imageModal) imageModal.style.display = 'none';
});
