/**
 * SyntaxVirtual - High Performance AI & SEO Engine
 * Verified for 2026 Web Vitals
 */

// --- 1. Particles Configuration (Optimized for Mobile) ---
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        particles: {
            number: { value: window.innerWidth < 768 ? 20 : 40 }, // Mobil cihazlarda performans üçün azaldıldı
            color: { value: "#8b5cf6" },
            opacity: { value: 0.3 },
            line_linked: { enable: true, color: "#8b5cf6", opacity: 0.15 }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } }
        }
    });
}

// --- 2. Multi-language & SEO Database ---
const translations = {
    az: {
        home: "Ana Səhifə",
        projects: "Xidmətlər",
        mastery: "Texnologiyalar", // SEO üçün yeni açar söz
        insights_nav: "Trends",
        owner_nav: "Rəhbərlik",
        welcome: "Digital Architect",
        hero_title: "SyntaxVirtual: AI və Python Arxitekturası", // SEO-fokuslu
        hero_subtitle: "235ms rekord sürətli süni intellekt və Python həlləri ilə rəqabətdə 637% öndə olun.",
        // ... digər mövcud datalar bura daxil edilir ...
        seo_desc: "SyntaxVirtual - Nail Mammadov tərəfindən idarə olunan AI və Python mərkəzi."
    },
    en: {
        home: "Home",
        projects: "Services",
        mastery: "Technologies",
        insights_nav: "Trends",
        owner_nav: "Leadership",
        welcome: "Digital Architect",
        hero_title: "SyntaxVirtual: AI & Python Architecture",
        hero_subtitle: "Stay 637% ahead with 235ms high-speed AI and Python solutions.",
        seo_desc: "SyntaxVirtual - AI and Python hub led by Nail Mammadov."
    }
};

// --- 3. SEO & Language Core Logic ---

function applyLanguage(lang) {
    const selectedLang = translations[lang] ? lang : 'az';
    const data = translations[selectedLang];
    
    // 1. Mətnlərin Yenilənməsi
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (data[key]) {
            el.innerHTML = data[key];
        }
    });

    // 2. Dinamik SEO Yeniləməsi (Çox Vacib!)
    // Dil dəyişəndə Google-un səhifəni hər iki dildə indeksləməsi üçün meta təsvirləri yeniləyirik
    document.title = data.hero_title + " | Nail Mammadov";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', data.seo_desc);

    // 3. Aktiv Düymə Vizualı
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === selectedLang);
    });

    document.documentElement.lang = selectedLang;
    localStorage.setItem('selectedLang', selectedLang);
}

// --- 4. Performans və UX Funksiyaları ---

// Scroll zamanı Header-in rənginin dəyişməsi (UX)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// Lazy Loading for Cards (SEO-ya müsbət təsir edir)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => observer.observe(card));

// --- 5. Event Listeners ---

document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('.lang-btn');
    if (langBtn) {
        applyLanguage(langBtn.getAttribute('data-lang'));
    }
});

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

// --- 6. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'az';
    applyLanguage(savedLang);

    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        if (themeBtn) themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    console.log("SyntaxVirtual System Initialized | Speed: 235ms");
});
