let currentIndex = 0;
function playSlide() {
    const slides = document.querySelectorAll('.slideshow-image');
    if (slides.length === 0) return;
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}
setInterval(playSlide, 5000);

const weddingDate = new Date("April 25, 2026 08:30:00").getTime();
setInterval(function() {
    const now = new Date().getTime();
    const diff = weddingDate - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("countdown-timer").innerHTML = `${d}j ${h}h ${m}m ${s}s`;
}, 1000);
