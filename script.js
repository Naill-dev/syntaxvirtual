/**
 * SyntaxVirtual - Multi-language & Theme System
 * Dev: Nail Mammadov
 */

// --- 1. Particles Config (Sürət üçün yoxlamalı) ---
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        particles: {
            number: { value: 40 },
            color: { value: "#8b5cf6" },
            opacity: { value: 0.2 },
            line_linked: { enable: true, color: "#8b5cf6", opacity: 0.1 }
        }
    });
}

// --- 2. Tərcümə Obyekti ---
const translations = {
    az: {
        home: "Ana Səhifə",
        projects: "Xidmətlər",
        insights_nav: "Trends",
        owner_nav: "Rəhbərlik",
        welcome: "Digital Architect",
        hero_title: "Gələcəyin Rəqəmsal Sintaksisi",
        hero_subtitle: "235ms sürətli AI, Python və VR həlləri ilə rəqabətdə 637% daha öndə olun.",
        projects_title: "Xidmət Arxitekturası",
        insights_title: "Tech Insights 2026",
        copyright: "Bütün hüquqlar Nail Mammadov tərəfindən qorunur."
    },
    en: {
        home: "Home",
        projects: "Services",
        insights_nav: "Trends",
        owner_nav: "Leadership",
        welcome: "Digital Architect",
        hero_title: "Future Digital Syntax",
        hero_subtitle: "Stay 637% ahead in competition with 235ms fast AI, Python, and VR solutions.",
        projects_title: "Service Architecture",
        insights_title: "Tech Insights 2026",
        copyright: "All rights reserved by Nail Mammadov."
    }
};

// --- 3. Dil Dəyişdirmə Funksiyası ---
function updateLanguage(lang) {
    const selectedLang = translations[lang] ? lang : 'az';

    // Bütün data-lang-key sahiblərini tap və dəyiş
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[selectedLang][key]) {
            el.textContent = translations[selectedLang][key];
        }
    });

    // Düymələrin aktivliyini vizual olaraq dəyiş
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === selectedLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Yaddaşa yaz və HTML lang teqini dəyiş
    document.documentElement.lang = selectedLang;
    localStorage.setItem('selectedLang', selectedLang);
}

// --- 4. Event Listeners (Klikləri tutmaq üçün) ---

// Dil Düymələri
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('lang-btn')) {
        const lang = e.target.getAttribute('data-lang');
        updateLanguage(lang);
    }
});

// Mövzu (Theme Switcher)
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

// Hamburger Menyu
const hamburger = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
    hamburger.onclick = () => mobileMenu.classList.add('active');
    document.getElementById('close-btn').onclick = () => mobileMenu.classList.remove('active');
}

// --- 5. Başlanğıc Ayarları (Sayt açılanda) ---
document.addEventListener('DOMContentLoaded', () => {
    // Dili yüklə
    const savedLang = localStorage.getItem('selectedLang') || 'az';
    updateLanguage(savedLang);

    // Temanı yüklə
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        if (themeBtn) themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});
