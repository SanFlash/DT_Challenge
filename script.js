/* ========================================
   NAVBAR FUNCTIONALITY
   ======================================== */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        
        // Update active link
        navLinks.forEach(function(l) {
            l.classList.remove('active');
        });
        link.classList.add('active');
    });
});

/* ========================================
   SMOOTH SCROLL FUNCTION
   ======================================== */

function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/* ========================================
   CONTACT FORM FUNCTIONALITY
   ======================================== */

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Form validation
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showFormMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Show success message
    showFormMessage('✓ Message sent successfully! We will get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
});

function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = 'form-message ' + type;
    formMessage.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(function() {
        formMessage.style.display = 'none';
    }, 5000);
}

/* ========================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   ======================================== */

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
const cards = document.querySelectorAll('.quality-card, .tech-item, .training-item');
cards.forEach(function(card) {
    card.style.opacity = '0';
    observer.observe(card);
});

/* ========================================
   SCROLL ANIMATIONS FOR CARDS
   ======================================== */

const animateOnScroll = function() {
    const cards = document.querySelectorAll('.quality-card, .tech-item, .training-item');
    
    cards.forEach(function(card) {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        const isVisible = (cardTop < window.innerHeight) && (cardBottom > 0);
        
        if (isVisible) {
            card.style.opacity = '1';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

/* ========================================
   DYNAMIC YEAR IN FOOTER
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.footer-bottom p');
    
    yearElements.forEach(function(el) {
        const text = el.textContent;
        el.textContent = text.replace('2025', currentYear);
    });
});

/* ========================================
   TECH STACK CARDS INTERACTIVE EFFECTS
   ======================================== */

const techItems = document.querySelectorAll('.tech-item');

techItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

/* ========================================
   PARALLAX EFFECT FOR HOME SECTION
   ======================================== */

window.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const scrollPosition = window.pageYOffset;
        heroImage.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
    }
});

/* ========================================
   QUALITY CARDS HOVER EFFECT
   ======================================== */

const qualityCards = document.querySelectorAll('.quality-card');

qualityCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

/* ========================================
   FORM INPUT EFFECTS
   ======================================== */

const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(function(input) {
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--primary-color)';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = 'var(--border-color)';
    });
});

/* ========================================
   BUTTON RIPPLE EFFECT
   ======================================== */

const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.98)';
        
        setTimeout(function() {
            button.style.transform = 'scale(1)';
        }, 150);
    });
});

/* ========================================
   COUNTER ANIMATION
   ======================================== */

// Placeholder for future counter functionality

/* ========================================
   NAVBAR SCROLL EFFECT
   ======================================== */

// Navbar scroll effects are handled via CSS

/* ========================================
   LAZY LOADING IMAGES
   ======================================== */

// Lazy loading handled via CSS (native browser support)

/* ========================================
   SMOOTH SCROLL ON PAGE LOAD
   ======================================== */

window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            setTimeout(function() {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});

/* ========================================
   KEYBOARD NAVIGATION
   ======================================== */

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

/* ========================================
   PERFORMANCE OPTIMIZATION
   ======================================== */

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

// Apply debounce to scroll animation
const debouncedAnimateOnScroll = debounce(animateOnScroll, 100);
window.addEventListener('scroll', debouncedAnimateOnScroll);

/* ========================================
   CONSOLE MESSAGE
   ======================================== */

console.log('Welcome to DeepTech! Building the future of EdTech.');

