// 1. DIAPORAMA
let slideIndex = 0;
function moveSlides() {
    const slides = document.querySelectorAll('.slideshow-image');
    if (slides.length > 0) {
        slides[slideIndex].classList.remove('active');
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add('active');
    }
}
setInterval(moveSlides, 5000);

// 2. RÉSERVATION (MODALE)
const modal = document.getElementById('rsvp-modal');
const btn = document.getElementById('show-rsvp-button');
const span = document.querySelector('.close-button');

if (btn) {
    btn.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    }
}

if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
