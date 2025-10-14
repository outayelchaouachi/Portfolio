// Main JavaScript functionality

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu functionality
const mobileMenuOpen = document.getElementById('mobile-menu-open');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const menu = document.getElementById('menu');

if (mobileMenuOpen && mobileMenuClose && menu) {
    mobileMenuOpen.addEventListener('click', function() {
        menu.classList.add('active');
        mobileMenuClose.style.display = 'block';
        this.style.display = 'none';
    });
    
    mobileMenuClose.addEventListener('click', function() {
        menu.classList.remove('active');
        mobileMenuOpen.style.display = 'block';
        this.style.display = 'none';
    });
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        mobileMenuOpen.style.display = 'block';
        mobileMenuClose.style.display = 'none';
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});