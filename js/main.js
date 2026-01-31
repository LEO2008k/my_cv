// NEO GLOW - Main JavaScript
// Security-hardened version

// ==========================================
// SECURITY UTILITIES
// ==========================================

/**
 * Sanitize string to prevent XSS attacks
 * @param {string} str - Input string
 * @returns {string} - Sanitized string
 */
function sanitizeHTML(str) {
    if (typeof str !== 'string') return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/**
 * Validate language code
 * @param {string} lang - Language code
 * @returns {boolean} - Is valid
 */
function isValidLanguage(lang) {
    const validLangs = ['uk', 'en'];
    return validLangs.includes(lang);
}

/**
 * Safe localStorage access with error handling
 */
const safeStorage = {
    get(key) {
        try {
            const value = localStorage.getItem(key);
            return value ? sanitizeHTML(value) : null;
        } catch (e) {
            console.warn('localStorage not available');
            return null;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, sanitizeHTML(String(value)));
        } catch (e) {
            console.warn('localStorage not available');
        }
    }
};

// ==========================================
// MAIN APPLICATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language (with validation)
    initLanguage();

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Active Navigation Link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Copy to Clipboard Function (sanitized)
    window.copyToClipboard = (text) => {
        const sanitized = sanitizeHTML(text);
        navigator.clipboard.writeText(sanitized).then(() => {
            showNotification('Copied!');
        }).catch(err => {
            console.warn('Clipboard write failed:', err);
        });
    };
});

// ==========================================
// LANGUAGE SWITCHING
// ==========================================

function initLanguage() {
    // Use safe storage with fallback
    const savedLang = safeStorage.get('lang') || 'uk';

    // Validate before applying
    if (isValidLanguage(savedLang)) {
        setLanguage(savedLang, false);
    } else {
        setLanguage('uk', false);
    }

    // Set up language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            // Validate language before switching
            if (isValidLanguage(lang)) {
                setLanguage(lang, true);
            }
        });
    });
}

function setLanguage(lang, save = true) {
    // Validate language code
    if (!isValidLanguage(lang)) {
        console.warn('Invalid language code:', lang);
        return;
    }

    if (!window.translations || !window.translations[lang]) {
        console.warn('Translations not loaded for:', lang);
        return;
    }

    // Save preference using safe storage
    if (save) {
        safeStorage.set('lang', lang);
    }

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const translation = window.translations[lang][key];
        if (translation) {
            el.innerHTML = translation;
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const translation = window.translations[lang][key];
        if (translation) {
            el.placeholder = translation;
        }
    });

    // Update page title if on specific page
    updatePageTitle(lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

function updatePageTitle(lang) {
    const pageTitles = {
        'index.html': 'Levko Kravchuk | Portfolio',
        'about.html': lang === 'uk' ? 'Про мене | Levko Kravchuk' : 'About | Levko Kravchuk',
        'work-history.html': lang === 'uk' ? 'Робоча історія | Levko Kravchuk' : 'Work History | Levko Kravchuk',
        'awards.html': lang === 'uk' ? 'Сертифікати | Levko Kravchuk' : 'Certificates | Levko Kravchuk',
        'violinist.html': lang === 'uk' ? 'Скрипаль | Levko Kravchuk' : 'Violinist | Levko Kravchuk',
        'projects.html': lang === 'uk' ? 'Проєкти | Levko Kravchuk' : 'Projects | Levko Kravchuk',
        'volunteer.html': lang === 'uk' ? 'Волонтерство | Levko Kravchuk' : 'Volunteer | Levko Kravchuk'
    };

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (pageTitles[currentPage]) {
        document.title = pageTitles[currentPage];
    }
}

function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 1500);
}

// Add notification styles dynamically
if (!document.querySelector('#notificationStyles')) {
    const style = document.createElement('style');
    style.id = 'notificationStyles';
    style.textContent = `
    .notification {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--neon-cyan, #00fff7);
      color: #0a0a1a;
      padding: 12px 24px;
      border-radius: 25px;
      font-weight: 600;
      z-index: 9999;
      animation: notifySlide 1.5s ease forwards;
      box-shadow: 0 0 20px rgba(0, 255, 247, 0.5);
    }
    @keyframes notifySlide {
      0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
      15% { opacity: 1; transform: translateX(-50%) translateY(0); }
      85% { opacity: 1; transform: translateX(-50%) translateY(0); }
      100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    }
  `;
    document.head.appendChild(style);
}
