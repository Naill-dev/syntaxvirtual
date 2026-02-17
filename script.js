// script.js - Təhlükəsiz versiya (Hissə 1/3)
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== PARTICLES.JS ==========
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            particles: {
                number: { value: 40 },
                color: { value: "#00f2ff" },
                opacity: { value: 0.2 },
                line_linked: { enable: true, color: "#00f2ff", opacity: 0.1 }
            }
        });
    } else {
        console.warn('particlesJS yüklənmədi');
    }

    // ========== THEME TOGGLE ==========
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }

    // ========== HAMBURGER MENU ==========
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    // ========== MULTI-LANGUAGE SYSTEM ==========
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
        copyright: "Bütün hüquqlar Nail Mammadov tərəfindən qorunur."
    },
    en: {
        home: "Home",
        projects: "Services",
        insights_nav: "Insights",
        owner_nav: "Leadership",
        contact_nav: "Contact",
        welcome: "Welcome",
        hero_title: "SyntaxVirtual: Digital Architecture & AI",
        hero_subtitle: "We reshape the digital world through Artificial Intelligence (AI), Python programming, and innovative cloud solutions.",
        start_btn: "Get Started",
        projects_title: "Our Services",
        s1_title: "Custom Software",
        s1_desc: "Unique and scalable web/mobile systems tailored to your business needs.",
        s2_title: "VR/AR Simulations",
        s2_desc: "Immersive virtual and augmented reality solutions for training and business.",
        s3_title: "AI Integration",
        s3_desc: "Automation of business processes with AI and advanced data analytics.",
        insights_title: "Insights & Blog",
        blog1_title: "Tech Trends 2026",
        blog1_desc: "Digital transformation in the new era of Artificial Intelligence.",
        owner_label: "Platform Founder",
        owner_bio: "Founder and Chief Architect of SyntaxVirtual. Expert in implementing digital innovations.",
        copyright: "All rights reserved by Nail Mammadov."
    }
};
    // Dil düymələri və meta teqlər
    const langBtns = document.querySelectorAll('.lang-btn');
    const metaDesc = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');

    function setLanguage(lang) {
        // Düymələri yenilə
        langBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector(.lang-btn[data-lang="${lang}"]).classList.add('active');

        // Məzmunu yenilə
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Meta teqləri yenilə
        if (lang === 'az') {
            document.title = "SyntaxVirtual | Süni İntellekt və Rəqəmsal Arxitektura";
            if (metaDesc) metaDesc.setAttribute("content", "SyntaxVirtual - Süni İntellekt, Python proqramlaşdırma və innovativ rəqəmsal həllərin mərkəzi.");
            if (metaKeywords) metaKeywords.setAttribute("content", "SyntaxVirtual, AI Azerbaijan, Süni İntellekt, Python proqramlaşdırma");
        } else {
            document.title = "SyntaxVirtual | AI & Digital Architecture";
            if (metaDesc) metaDesc.setAttribute("content", "SyntaxVirtual - Global platform for AI, Python programming and digital architecture solutions.");
            if (metaKeywords) metaKeywords.setAttribute("content", "SyntaxVirtual, AI, Python programming, Digital Architecture");
        }
    }

    // Dil düymələrinə event listener bağla
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('preferredLang', lang);
        });
    });

    // Saxlanılmış dili yüklə
    const savedLang = localStorage.getItem('preferredLang') || 'az';
    setLanguage(savedLang);

}); // DOMContentLoaded sonu
