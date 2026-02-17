/**
 * SyntaxVirtual - Multi-language & UI System
 * Verified for 2026 Standards
 */

// --- 1. Particles Configuration ---
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        particles: {
            number: { value: 40 },
            color: { value: "#00f2ff" },
            opacity: { value: 0.2 },
            line_linked: { enable: true, color: "#00f2ff", opacity: 0.1 }
        }
    });
}

// --- 2. Multi-language Database ---
const translations = {
    az: {
        home: "Ana Səhifə",
        projects: "Xidmətlər",
        insights_nav: "Insights",
        owner_nav: "Rəhbərlik",
        contact_nav: "Əlaqə",
        welcome: "Xoş Gəlmisiniz",
        hero_title: "Gələcəyin Rəqəmsal Arxitekturası",
        hero_subtitle: "Süni intellekt, VR və yüksək performanslı bulud həlləri ilə biznesinizi bir addım öndə tutun.",
        start_btn: "Başla",
        projects_title: "Nələr Edirik?",
        s1_title: "Proqram Təminatı",
        s1_desc: "Python və müasir texnologiyalarla biznes həlləri.",
        s2_title: "VR/AR Simulyasiyalar",
        s2_desc: "İmmersiv texnoloji təcrübələr.",
        s3_title: "AI İnteqrasiyası",
        s3_desc: "Süni intellekt əsaslı avtomatlaşdırma.",
        insights_title: "Insights & Blog",
        blog1_title: "Tech Trends 2026",
        blog1_desc: "Süni intellektin yeni erasında rəqəmsal transformasiya.",
        owner_label: "Platforma Rəhbəri",
        owner_bio: "SyntaxVirtual-ın yaradıcısı və rəqəmsal arxitektor.",
        copyright: "Bütün hüquqlar Nail Mammadov tərəfindən qorunur.",
        // Trends Section
        trends_main_title: "TECH TRENDS 2026",
        trends_desc: "SyntaxVirtual tərəfindən analiz edilən gələcəyin rəqəmsal xəritəsi.",
        trend1_t: "AI Agentlərin İnqilabı",
        trend1_d: "2026-cı ildə süni intellekt sadəcə suallara cavab vermir. Nail Mammadov tərəfindən tətbiq edilən yeni nəsil Python alqoritmləri ilə AI artıq biznes tapşırıqlarını müstəqil şəkildə həyata keçirir.",
        trend2_t: "Texniki Mükəmməllik",
        trend2_d: "Axtarış motorlarında zirvədə qalmağın sirri texniki mükəmməllikdədir. Saytımızın optimizasiyası və Core Web Vitals statusu istifadəçilərimizə qüsursuz təcrübə vəd edir.",
        trend3_t: "Virtual Arxitektura",
        trend3_d: "Fiziki ofislər öz yerini rəqəmsal əkizlərə (Digital Twins) verir. Bu texnologiya sayəsində əməliyyat xərcləri 40% azalır.",
        back_btn: "Ana Səhifəyə Qayıt"
    },
    en: {
        home: "Home",
        projects: "Services",
        insights_nav: "Insights",
        owner_nav: "Leadership",
        contact_nav: "Contact",
        welcome: "Welcome",
        hero_title: "Future Digital Architecture",
        hero_subtitle: "Stay ahead of the competition with AI, VR, and high-performance cloud solutions.",
        start_btn: "Start",
        projects_title: "What We Do",
        s1_title: "Software Engineering",
        s1_desc: "Business solutions with Python and modern technologies.",
        s2_title: "VR/AR Simulations",
        s2_desc: "Immersive technological experiences.",
        s3_title: "AI Integration",
        s3_desc: "AI-based business automation.",
        insights_title: "Insights & Blog",
        blog1_title: "Tech Trends 2026",
        blog1_desc: "Digital transformation in the new era of Artificial Intelligence.",
        owner_label: "Platform Founder",
        owner_bio: "Founder and Chief Architect of SyntaxVirtual.",
        copyright: "All rights reserved by Nail Mammadov.",
        // Trends Section
        trends_main_title: "TECH TRENDS 2026",
        trends_desc: "Digital roadmap analyzed by SyntaxVirtual.",
        trend1_t: "Revolution of AI Agents",
        trend1_d: "In 2026, AI does more than answer questions. Next-gen Python algorithms by Nail Mammadov allow AI to independently execute business tasks.",
        trend2_t: "Technical Excellence",
        trend2_d: "The secret to staying at the top of search engines is technical perfection. Our optimization ensures a seamless user experience.",
        trend3_t: "Virtual Architecture",
        trend3_d: "Physical offices are being replaced by Digital Twins. This technology reduces operational costs by 40%.",
        back_btn: "Back to Home"
    }
};

// --- 3. Core Logic Functions ---

function applyLanguage(lang) {
    const selectedLang = translations[lang] ? lang : 'az';
    
    // Update all elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[selectedLang][key]) {
            // Using innerHTML for supporting bold tags if any
            el.innerHTML = translations[selectedLang][key];
        }
    });

    // Update Button UI
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === selectedLang);
    });

    // Save to LocalStorage & Update SEO
    document.documentElement.lang = selectedLang;
    localStorage.setItem('selectedLang', selectedLang);
}

// --- 4. Event Listeners ---

// Use Event Delegation for Language Buttons
document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('.lang-btn');
    if (langBtn) {
        const lang = langBtn.getAttribute('data-lang');
        applyLanguage(lang);
    }
});

// Theme Toggle logic
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

// Hamburger Menu logic
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.onclick = () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    closeBtn.onclick = () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.onclick = () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        };
    });
}

// --- 5. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Load Language
    const savedLang = localStorage.getItem('selectedLang') || 'az';
    applyLanguage(savedLang);

    // Load Theme
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        if (themeBtn) themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});
