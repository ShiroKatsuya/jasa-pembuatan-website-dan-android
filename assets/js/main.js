/**
 * Main JavaScript file for Calista Service Website
 * Handles component loading, utilities, and common functionality
 */

// Component Loader - Load header and footer dynamically
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
    initializeNavigation();
    initializeScrollEffects();
    initializeLazyLoading();
});

/**
 * Load header and footer components
 */
async function loadComponents() {
    try {
        // Load header
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            const headerResponse = await fetch('components/header.html');
            const headerHTML = await headerResponse.text();
            headerContainer.innerHTML = headerHTML;
        }

        // Load footer
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            const footerResponse = await fetch('components/footer.html');
            const footerHTML = await footerResponse.text();
            footerContainer.innerHTML = footerHTML;
        }

        // Initialize Alpine.js components after loading
        if (typeof Alpine !== 'undefined' && Alpine.start) {
            Alpine.start();
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    // Get navigation data from content.js
    if (typeof content !== 'undefined' && content.navigation) {
        window.navigationItems = content.navigation;
    }
    
    // Check if page is active
    window.isActivePage = function(href) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        return href === currentPage;
    };
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Initialize scroll effects (fade in on scroll, sticky header, etc.)
 */
function initializeScrollEffects() {
    // Add shadow to header on scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });
    }

    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Initialize lazy loading for images
 */
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Utility: Format phone number
 */
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '+' + match[1] + ' ' + match[2] + '-' + match[3] + '-' + match[4];
    }
    return phoneNumber;
}

/**
 * Utility: Validate email
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Utility: Show toast notification
 */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-full`;
    
    const colors = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        warning: 'bg-yellow-500 text-white',
        info: 'bg-blue-500 text-white'
    };
    
    toast.className += ` ${colors[type] || colors.info}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

/**
 * Utility: Copy to clipboard
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Disalin ke clipboard!', 'success');
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        showToast('Gagal menyalin ke clipboard', 'error');
        return false;
    }
}

/**
 * Utility: Get query parameters
 */
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queries = queryString.split('&');
    
    queries.forEach(query => {
        const [key, value] = query.split('=');
        if (key) {
            params[decodeURIComponent(key)] = decodeURIComponent(value || '');
        }
    });
    
    return params;
}

/**
 * Utility: Format date to Indonesian
 */
function formatDateID(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(date).toLocaleDateString('id-ID', options);
}

/**
 * Utility: Scroll to top
 */
function scrollToTop(smooth = true) {
    window.scrollTo({
        top: 0,
        behavior: smooth ? 'smooth' : 'auto'
    });
}

/**
 * Show back to top button
 */
function initBackToTop() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'fixed bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 opacity-0 pointer-events-none z-40';
    button.setAttribute('aria-label', 'Kembali ke atas');
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 300) {
            button.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            button.classList.add('opacity-0', 'pointer-events-none');
        }
    }, 100));
    
    button.addEventListener('click', () => scrollToTop());
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', initBackToTop);

/**
 * Form validation helper
 */
class FormValidator {
    constructor(formElement) {
        this.form = formElement;
        this.errors = {};
    }
    
    validate(rules) {
        this.errors = {};
        let isValid = true;
        
        Object.keys(rules).forEach(fieldName => {
            const field = this.form.querySelector(`[name="${fieldName}"]`);
            const fieldRules = rules[fieldName];
            
            if (!field) return;
            
            const value = field.value.trim();
            
            // Required validation
            if (fieldRules.required && !value) {
                this.errors[fieldName] = fieldRules.required;
                isValid = false;
                return;
            }
            
            // Email validation
            if (fieldRules.email && value && !isValidEmail(value)) {
                this.errors[fieldName] = fieldRules.email;
                isValid = false;
                return;
            }
            
            // Min length validation
            if (fieldRules.minLength && value.length < fieldRules.minLength.value) {
                this.errors[fieldName] = fieldRules.minLength.message;
                isValid = false;
                return;
            }
            
            // Max length validation
            if (fieldRules.maxLength && value.length > fieldRules.maxLength.value) {
                this.errors[fieldName] = fieldRules.maxLength.message;
                isValid = false;
                return;
            }
            
            // Pattern validation
            if (fieldRules.pattern && !fieldRules.pattern.value.test(value)) {
                this.errors[fieldName] = fieldRules.pattern.message;
                isValid = false;
                return;
            }
        });
        
        return isValid;
    }
    
    showErrors() {
        Object.keys(this.errors).forEach(fieldName => {
            const field = this.form.querySelector(`[name="${fieldName}"]`);
            if (field) {
                field.classList.add('input-error');
                
                // Create or update error message
                let errorEl = field.parentElement.querySelector('.form-error');
                if (!errorEl) {
                    errorEl = document.createElement('div');
                    errorEl.className = 'form-error';
                    field.parentElement.appendChild(errorEl);
                }
                errorEl.textContent = this.errors[fieldName];
            }
        });
    }
    
    clearErrors() {
        this.form.querySelectorAll('.input-error').forEach(field => {
            field.classList.remove('input-error');
        });
        this.form.querySelectorAll('.form-error').forEach(error => {
            error.remove();
        });
    }
}

/**
 * Analytics tracking (placeholder - replace with actual analytics)
 */
function trackEvent(category, action, label, value) {
    // Placeholder for Google Analytics or other tracking
    console.log('Track Event:', { category, action, label, value });
    
    // Example: Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label,
    //         'value': value
    //     });
    // }
}

/**
 * Initialize CTA tracking
 */
function initCTATracking() {
    document.querySelectorAll('a[href="contact.html"], button[data-cta]').forEach(element => {
        element.addEventListener('click', (e) => {
            const label = element.textContent.trim() || element.getAttribute('data-cta');
            trackEvent('CTA', 'click', label);
        });
    });
}

// Initialize CTA tracking
document.addEventListener('DOMContentLoaded', initCTATracking);

/**
 * Performance monitoring
 */
function logPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                const connectTime = perfData.responseEnd - perfData.requestStart;
                const renderTime = perfData.domComplete - perfData.domLoading;
                
                console.log('Performance Metrics:', {
                    pageLoadTime: `${pageLoadTime}ms`,
                    connectTime: `${connectTime}ms`,
                    renderTime: `${renderTime}ms`
                });
            }, 0);
        });
    }
}

// Log performance in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    logPerformance();
}

// Export utilities to global scope
window.utils = {
    debounce,
    throttle,
    formatPhoneNumber,
    isValidEmail,
    showToast,
    copyToClipboard,
    getQueryParams,
    formatDateID,
    scrollToTop,
    trackEvent,
    FormValidator
};

// Service Worker Registration (for PWA support - optional)
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}
