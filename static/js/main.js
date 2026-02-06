// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form submission
document.querySelector('.contact-form form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    this.reset();
});