document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ==================== THEME TOGGLE ====================
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    function updateThemeIcon() {
        const isLight = body.classList.contains('light-theme');
        themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            updateThemeIcon();
            localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
        });

        // load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
        }
        updateThemeIcon();
    }

    // ==================== MOBILE MENU ====================
    const hamburger = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    function closeMobile() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMobile);
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobile);
    });

    // ==================== MULTI-LANGUAGE ====================
    const translations = {
        az: {
            home: 'Ana səhifə',
            services: 'Xidmətlər',
            insights: 'Insights',
            owner: 'Rəhbərlik',
            welcome: 'Xoş gəlmisiniz',
            hero_title: 'Gələcəyin rəqəmsal arxitekturası',
            hero_subtitle: 'Süni intellekt, VR və yüksək performanslı bulud həlləri ilə biznesinizi bir addım öndə aparın.',
            start_btn: 'Kəşf et',
            contact_btn: 'Əlaqə',
            services_title: 'Nələr edirik?',
            s1_title: 'Proqram təminatı',
            s1_desc: 'Python və müasir texnologiyalarla biznes həlləri.',
            s2_title: 'VR/AR simulyasiyalar',
            s2_desc: 'İmmersiv təcrübələr və təlimlər.',
            s3_title: 'AI inteqrasiyası',
            s3_desc: 'Süni intellektlə iş proseslərinin avtomatlaşdırılması.',
            insights_title: 'Insights & Blog',
            blog_ai_title: 'Süni intellekt nədir?',
            blog_ai_desc: 'Əsas anlayışlar, biznesə tətbiqi və real nümunələr.',
            owner_label: 'Platforma rəhbəri',
            owner_bio: 'SyntaxVirtual-ın yaradıcısı, rəqəmsal arxitektor. Süni intellekt və proqramlaşdırma sahəsində ekspert.',
            copyright: 'Bütün hüquqlar qorunur.'
        },
        en: {
            home: 'Home',
            services: 'Services',
            insights: 'Insights',
            owner: 'Leadership',
            welcome: 'Welcome',
            hero_title: 'Digital architecture of the future',
            hero_subtitle: 'Empower your business with AI, VR, and high‑performance cloud solutions.',
            start_btn: 'Discover',
            contact_btn: 'Contact',
            services_title: 'What we do',
            s1_title: 'Software development',
            s1_desc: 'Business solutions with Python and modern technologies.',
            s2_title: 'VR/AR simulations',
            s2_desc: 'Immersive experiences and training.',
            s3_title: 'AI integration',
            s3_desc: 'Automate workflows with artificial intelligence.',
            insights_title: 'Insights & Blog',
            blog_ai_title: 'What is AI?',
            blog_ai_desc: 'Core concepts, business applications, and real‑world examples.',
            owner_label: 'Platform founder',
            owner_bio: 'Creator of SyntaxVirtual, digital architect. Expert in AI and software development.',
            copyright: 'All rights reserved.'
        }
    };

    const langBtns = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-lang]');

    function setLanguage(lang) {
        // update buttons
        langBtns.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        // update text
        translatableElements.forEach(el => {
            const key = el.dataset.lang;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // update html lang attribute
        document.documentElement.lang = lang;
        localStorage.setItem('preferredLang', lang);
    }

    // attach event listeners
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.currentTarget.dataset.lang;
            setLanguage(lang);
        });
    });

    // load saved language
    const savedLang = localStorage.getItem('preferredLang') || 'az';
    setLanguage(savedLang);

    // ==================== SMOOTH SCROLL (opsiyonel) ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
