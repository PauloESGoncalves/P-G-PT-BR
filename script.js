// Animação de scroll que você já tinha
const elementos = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elementos.forEach((el) => observer.observe(el));


// NOVO: Faz os cards de benefício virarem no clique
const beneficioCards = document.querySelectorAll('.beneficio-card');

beneficioCards.forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});