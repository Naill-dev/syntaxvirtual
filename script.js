// --- Particles Background Configuration ---
particlesJS("particles-js", {
    particles: {
        number: { value: 40 },
        color: { value: "#00f2ff" },
        opacity: { value: 0.2 },
        line_linked: { enable: true, color: "#00f2ff", opacity: 0.1 }
    }
});

// --- Theme Toggle (Dark/Light Mode) ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Mövcud temanı yaddaşdan yüklə
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

// --- Hamburger Menu Logic ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// --- Multi-language System & SEO ---
const translations = {
    az: {
        home: "Ana Səhifə", 
        projects: "Xidmətlər", 
        insights_nav: "Trends",
        owner_nav: "Rəhbərlik", 
        contact_nav: "Əlaqə",
        welcome: "Xoş Gəlmisiniz",
        hero_title: "Gələcəyin Rəqəmsal Arxitekturası",
        hero_subtitle: "Süni intellekt, VR və yüksək performanslı bulud həlləri ilə biznesinizi bir addım öndə tutun.",
        start_btn: "Başla",
        projects_title: "Nələr Edirik?",
        s1_title: "Xüsusi Proqram Təminatı", 
        s1_desc: "Python və müasir texnologiyalarla biznes həlləri.",
        s2_title: "VR/AR Simulyasiyalar", 
        s2_desc: "İmmersiv texnoloji təcrübələr.",
        s3_title: "AI İnteqrasiyası", 
        s3_desc: "Süni intellekt əsaslı avtomatlaşdırma.",
        insights_title: "Tech Insights 2026",
        blog1_title: "Tech Trends 2026",
        blog1_desc: "Süni intellektin yeni erasında rəqəmsal transformasiya.",
        owner_label: "Platforma Rəhbəri",
        owner_bio: "SyntaxVirtual-ın yaradıcısı və rəqəmsal arxitektor.",
        copyright: "Bütün hüquqlar Nail Mammadov tərəfindən qorunur.",
        // Trends Page Translations
        trends_main_title: "Tech Trends 2026 Manifesti",
        trends_desc: "Nail Mammadov tərəfindən analiz edilən rəqəmsal gələcək.",
        trend1_t: "AI Agentlərin İnqilabı",
        trend1_d: "2026-cı ildə AI tapşırıqları müstəqil icra edir.",
        back_btn: "Geri Qayıt"
    },
    en: {
        home: "Home", 
        projects: "Services", 
        insights_nav: "Trends",
        owner_nav: "Leadership", 
        contact_nav: "Contact",
        welcome: "Welcome",
        hero_title: "SyntaxVirtual: Digital Architecture & AI",
        hero_subtitle: "Reshaping the world through AI, Python programming, and innovative cloud solutions.",
        start_btn: "Get Started",
        projects_title: "Our Services",
        s1_title: "Custom Software", 
        s1_desc: "High-performance Python-based business solutions.",
        s2_title: "VR/AR Simulations", 
        s2_desc: "Immersive technological experiences.",
        s3_title: "AI Integration", 
        s3_desc: "Business process automation with advanced AI.",
        insights_title: "Tech Insights 2026",
        blog1_title: "Tech Trends 2026",
        blog1_desc: "Digital transformation in the new era of AI.",
        owner_label: "Platform Founder",
        owner_bio: "Founder and Chief Architect of SyntaxVirtual.",
        copyright: "All rights reserved by Nail Mammadov.",
        // Trends Page Translations
        trends_main_title: "Tech Trends 2026 Manifesto",
        trends_desc: "Digital future analyzed by Nail Mammadov.",
        trend1_t: "Revolution of AI Agents",
        trend1_d: "In 2026, AI autonomously executes business tasks.",
        back_btn: "Back to Home"
    }
};

function updateLanguage(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // SEO Meta Update
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute("content", lang === 'az' 
            ? "SyntaxVirtual - 235ms sürətlə işləyən AI və Virtual Arxitektura mərkəzi." 
            : "SyntaxVirtual - High-performance AI and Digital Architecture hub operating at 235ms.");
    }

    // Active Button State
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('selectedLang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => updateLanguage(btn.dataset.lang));
});

// Sayfa yüklənəndə dili yaddaşdan gətir
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'az';
    updateLanguage(savedLang);
});
