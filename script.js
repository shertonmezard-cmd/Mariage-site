// 1. GESTION DU DIAPORAMA
let currentIndex = 0;
function playSlide() {
    const slides = document.querySelectorAll('.slideshow-image');
    if (slides.length === 0) return;
    
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}
setInterval(playSlide, 5000);

// 2. COMPTE À REBOURS
const eventDate = new Date("April 25, 2026 08:30:00").getTime();
setInterval(function() {
    const now = new Date().getTime();
    const diff = eventDate - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    const timer = document.getElementById("countdown-timer");
    if (timer) timer.innerHTML = `${d}j ${h}h ${m}m ${s}s`;
}, 1000);

// 3. POP-UP RSVP
const modal = document.getElementById('rsvp-modal');
const btn = document.getElementById('show-rsvp-button');
const span = document.querySelector('.close-button');

if (btn) btn.onclick = (e) => { e.preventDefault(); modal.style.display = "block"; }
if (span) span.onclick = () => { modal.style.display = "none"; }
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }
