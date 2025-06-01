// Simple script to handle the rotating banner
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in class to elements as they come into view
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        el.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        fadeInObserver.observe(el);
    });
    
    // Product hover effect enhancement
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('button').classList.add('opacity-100');
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('button').classList.remove('opacity-100');
        });
    });
});

const slides = document.querySelectorAll('.hero-slide');
let current = 0;

function showSlide(index) {
slides.forEach((slide, i) => {
    slide.classList.remove('opacity-100');
    slide.classList.add('opacity-0');
    slide.style.zIndex = i === index ? 10 : 0;
});
slides[index].classList.add('opacity-100');
}

function nextSlide() {
current = (current + 1) % slides.length;
showSlide(current);
}

showSlide(current);
setInterval(nextSlide, 5000); // Change every 5 seconds

const swiper = new Swiper('.swiper-container', {
slidesPerView: 4,
spaceBetween: 30,
loop: true,
autoplay: {
    delay: 2000,
    disableOnInteraction: false,
},
breakpoints: {
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 5 },
},

loop: true,
spaceBetween: 20,
// Responsive breakpoints
breakpoints: {
    // Pour petits écrans (mobile)
    0: {
    slidesPerView: 1,
    },
    // Pour tablettes et plus
    768: {
    slidesPerView: 2,
    },
    // Pour grands écrans (optionnel)
    1024: {
    slidesPerView: 3,
    }
},
autoplay: {
    delay: 3000,
    disableOnInteraction: false,
},
});
