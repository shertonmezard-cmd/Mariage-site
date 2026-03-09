// ==========================================
// 1. COMPTE À REBOURS
// ==========================================
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
        // Format court pour bien s'afficher dans le footer à côté de l'animation
        timerElement.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
    }

    if (distance < 0) {
        clearInterval(countdownFunction);
        if (timerElement) timerElement.innerHTML = "C'est le grand jour !";
    }
}, 1000);


// ==========================================
// 2. DIAPORAMA (Limité aux 3 premières images)
// ==========================================
let currentImageIndex = 0;

function nextImage() {
    const images = document.querySelectorAll('.slideshow-image');
    if (images.length === 0) return;

    // Masquer l'image actuelle
    images[currentImageIndex].classList.remove('active');

    // Passer à l'image suivante (boucle sur le nombre d'images présentes)
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Afficher la nouvelle image
    images[currentImageIndex].classList.add('active');
}

// Change d'image toutes les 5 secondes
setInterval(nextImage, 5000);


// ==========================================
// 3. FORMULAIRE RSVP (Pop-up Modale)
// ==========================================
const rsvpModal = document.getElementById('rsvp-modal');
const showRsvpButton = document.getElementById('show-rsvp-button');
const closeRsvpButton = document.querySelector('.close-button');

if (showRsvpButton && rsvpModal) {
    showRsvpButton.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le saut de page
        rsvpModal.style.display = 'block';
    });
}

if (closeRsvpButton) {
    closeRsvpButton.addEventListener('click', () => {
        rsvpModal.style.display = 'none';
    });
}


// ==========================================
// 4. MODALE GALERIE PHOTOS (Agrandissement)
// ==========================================
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModalButton = document.querySelector('.close-modal-button');
const photoItems = document.querySelectorAll('.photo-item img');

photoItems.forEach(img => {
    img.addEventListener('click', function() {
        // On récupère le lien de l'image haute définition
        const imagePath = this.parentElement.getAttribute('data-full') || this.src;
        if (modalImage && imageModal) {
            modalImage.src = imagePath;
            imageModal.style.display = 'block';
        }
    });
});

if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
        imageModal.style.display = 'none';
    });
}


// ==========================================
// 5. FERMETURE DES MODALES AU CLIC EXTÉRIEUR
// ==========================================
window.addEventListener('click', (event) => {
    // Si on clique sur le fond sombre de la modale RSVP
    if (event.target === rsvpModal) {
        rsvpModal.style.display = 'none';
    }
    // Si on clique sur le fond sombre de la modale Image
    if (event.target === imageModal) {
        imageModal.style.display = 'none';
    }
});
