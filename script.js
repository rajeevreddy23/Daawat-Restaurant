// ========================================
// Daawat Restaurant - JavaScript
// Interactive features for the website
// ========================================

// ========== Document Ready ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('Daawat Restaurant website loaded!');
    
    // Initialize all features
    initializeSmoothScroll();
    initializeReservationForm();
    initializeRatingStars();
    initializeMenuFilter();
    initializeMobileMenu();
    initializeScrollAnimations();
});

// ========== Smooth Scrolling ==========
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========== Reservation Form Handling ==========
function initializeReservationForm() {
    const form = document.querySelector('.reservation-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = form.querySelector('input[type="text"]').value;
            const phone = form.querySelector('input[type="tel"]').value;
            const date = form.querySelector('input[type="date"]').value;
            const time = form.querySelector('input[type="time"]').value;
            const guests = form.querySelector('select').value;
            
            // Validate phone number
            if (!/^\+?[0-9\s\-()]{10,}$/.test(phone)) {
                showNotification('Please enter a valid phone number', 'error');
                return;
            }
            
            // Validate date
            const selectedDate = new Date(date);
            if (selectedDate < new Date()) {
                showNotification('Please select a future date', 'error');
                return;
            }
            
            // Show success message
            showNotification(`Reservation confirmed for ${name} on ${date} at ${time} for ${guests}!`, 'success');
            
            // Reset form
            form.reset();
            
            console.log('Reservation Details:', {
                name: name,
                phone: phone,
                date: date,
                time: time,
                guests: guests
            });
        });
    }
}

// ========== Notification System ==========
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Find and focus the reservation section
    const reservationSection = document.querySelector('#reserve');
    if (reservationSection && type === 'success') {
        reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ========== Interactive Rating System ==========
function initializeRatingStars() {
    const ratingElements = document.querySelectorAll('.rating');
    
    ratingElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('click', function(e) {
            e.stopPropagation();
            const ratingText = this.textContent.match(/\d+\.?\d*/);
            if (ratingText) {
                // Optional: Add visual feedback
                this.style.transform = 'scale(1.1)';
                setTimeout(() => this.style.transform = 'scale(1)', 200);
            }
        });
    });
}

// ========== Menu Filtering ==========
function initializeMenuFilter() {
    // Optional: Add filter buttons dynamically
    const sections = ['home', 'menu', 'desserts'];
    
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            element.addEventListener('mouseenter', function() {
                // Add animation on hover
                this.style.opacity = '0.95';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.opacity = '1';
            });
        }
    });
}

// ========== Mobile Menu Toggle ==========
function initializeMobileMenu() {
    const nav = document.querySelector('.sticky-nav');
    
    // Add mobile menu button functionality
    if (window.innerWidth <= 768) {
        nav.style.overflowX = 'auto';
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            nav.style.overflowX = 'auto';
        } else {
            nav.style.overflowX = 'visible';
        }
    });
}

// ========== Scroll Animations ==========
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe info boxes
    document.querySelectorAll('.info-box').forEach(box => {
        observer.observe(box);
    });
    
    // Observe review cards
    document.querySelectorAll('.review-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe promo cards
    document.querySelectorAll('.promo-card').forEach(card => {
        observer.observe(card);
    });
}

// ========== Contact Form Handler ==========
function handleContactSubmit(event) {
    if (event) event.preventDefault();
    
    showNotification('Thank you for contacting us! We will get back to you soon.', 'success');
}

// ========== Menu Item Click Handler ==========
function handleMenuItemClick(itemName) {
    showNotification(`Added ${itemName} to your order!`, 'info');
}

// ========== Utility Functions ==========

// Add to cart functionality (for future e-commerce)
function addToCart(itemName, price) {
    console.log(`Added to cart: ${itemName} - ${price}`);
    showNotification(`${itemName} added to cart!`, 'success');
}

// Format phone number
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{2})(\d{5})(\d{5})/, '+91-$1-$2-$3');
}

// Get current day status
function getCurrentDayStatus() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return days[today.getDay()];
}

// ========== Analytics & Logging ==========
function logPageView() {
    console.log('Page view:', {
        timestamp: new Date(),
        url: window.location.href,
        userAgent: navigator.userAgent
    });
}

// Log user interaction
function logInteraction(action, details = {}) {
    console.log('User interaction:', {
        action: action,
        timestamp: new Date(),
        details: details
    });
}

// ========== Accessibility ==========

// Handle keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Alt + R for Reservations
    if (event.altKey && event.key === 'r') {
        const reserveSection = document.getElementById('reserve');
        if (reserveSection) {
            reserveSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Alt + C for Contact
    if (event.altKey && event.key === 'c') {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ========== Subscribe to Newsletter ==========
function subscribeNewsletter(email) {
    if (!email || !email.includes('@')) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    showNotification(`${email} subscribed to our newsletter!`, 'success');
    console.log('Newsletter subscription:', email);
}

// ========== Print Menu ==========
function printMenu() {
    window.print();
}

// ========== Export to CSV ==========
function exportMenuToCSV() {
    const menuItems = [];
    
    document.querySelectorAll('.product-card').forEach(card => {
        const name = card.querySelector('h3')?.textContent || 'N/A';
        const price = card.querySelector('.price')?.textContent || 'N/A';
        const rating = card.querySelector('.rating')?.textContent || 'N/A';
        
        menuItems.push({
            name: name,
            price: price,
            rating: rating
        });
    });
    
    console.log('Menu exported:', menuItems);
    showNotification('Menu exported successfully!', 'success');
}

// ========== Initialize on Load ==========
window.addEventListener('load', function() {
    logPageView();
    console.log('All interactive features initialized!');
});