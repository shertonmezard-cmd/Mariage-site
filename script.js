// La date de votre mariage.
const weddingDate = new Date("April 25, 2026 08:30:00").getTime();

// Mettre à jour le compte à rebours toutes les secondes
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = `
        ${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes
    `;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "C'est le grand jour !";
    }
}, 1000);

// --- Code pour le diaporama corrigé ---
let currentImageIndex = 0;

function nextImage() {
    const images = document.querySelectorAll('.slideshow-image');
    
    // Si aucune image n'est trouvée, on arrête pour éviter les erreurs
    if (images.length === 0) return;

    // On retire la classe active de l'image actuelle
    images[currentImageIndex].classList.remove('active');

    // On calcule l'index de la suivante
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // On ajoute la classe active à la nouvelle image
    images[currentImageIndex].classList.add('active');
}

// On lance le cycle toutes les 5 secondes (5000ms) pour que ce soit plus dynamique
setInterval(nextImage, 5000);


// Code pour le formulaire pop-up
const rsvpModal = document.getElementById('rsvp-modal');
const showRsvpButton = document.getElementById('show-rsvp-button');
const closeButton = document.querySelector('.close-button');

showRsvpButton.addEventListener('click', function(event) {
    event.preventDefault();
    rsvpModal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    rsvpModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === rsvpModal) {
        rsvpModal.style.display = 'none';
    }
});


// Code pour la modale des images
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModalButton = document.querySelector('.close-modal-button');
const photoItems = document.querySelectorAll('.photo-item');

photoItems.forEach(item => {
    item.addEventListener('click', function() {
        const imagePath = this.getAttribute('data-full');
        modalImage.src = imagePath;
        imageModal.style.display = 'block';
    });
});

closeModalButton.addEventListener('click', function() {
    imageModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === imageModal) {
        imageModal.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', startSlideshow);

