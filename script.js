// Particles
particlesJS("particles-js", {
    particles: {
        number: { value: 40 },
        color: { value: "#00f2ff" },
        opacity: { value: 0.2 },
        line_linked: { enable: true, color: "#00f2ff", opacity: 0.1 }
    }
});

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Multi-language
const translations = {
    az: {
        home: "Ana Səhifə", projects: "Xidmətlər", owner_nav: "Rəhbərlik", contact_nav: "Əlaqə",
        welcome: "Xoş Gəlmisiniz",
        hero_title: "Gələcəyin Rəqəmsal Arxitekturası",
        hero_subtitle: "Süni intellekt, VR və yüksək performanslı bulud həlləri ilə biznesinizi bir addım öndə tutun.",
        start_btn: "Başla",
        projects_title: "Nələr Edirik?",
        s1_title: "Xüsusi Proqram Təminatı", s1_desc: "Sizin ehtiyaclarınıza uyğun unikal və miqyaslana bilən veb/mobil sistemlər.",
        s2_title: "VR/AR Simulyasiyalar", s2_desc: "Təhsil və biznes üçün immersiv virtual reallıq həlləri.",
        s3_title: "AI İnteqrasiyası", s3_desc: "Süni intellekt və data analitika ilə iş proseslərinin avtomatlaşdırılması.",
        owner_label: "Platforma Rəhbəri",
        owner_bio: "SyntaxVirtual-ın yaradıcısı və baş texnoloji memarı. Texnologiya dünyasında innovasiyaların tətbiqi üzrə mütəxəssis.",
        copyright: "Bütün hüquqlar Nail Mammadov tərəfindən qorunur."
    },
    en: {
        home: "Home", projects: "Services", owner_nav: "Leadership", contact_nav: "Contact",
        welcome: "Welcome",
        hero_title: "Architecting the Digital Future",
        hero_subtitle: "Stay ahead with AI, VR, and high-performance cloud solutions designed for excellence.",
        start_btn: "Get Started",
        projects_title: "Our Services",
        s1_title: "Custom Software", s1_desc: "Unique and scalable web/mobile systems tailored to your specific needs.",
        s2_title: "VR/AR Simulations", s2_desc: "Immersive virtual reality solutions for education and corporate training.",
        s3_title: "AI Integration", s3_desc: "Automating business processes with cutting-edge machine learning and data analytics.",
        owner_label: "Platform Founder",
        owner_bio: "Founder and Chief Architect of SyntaxVirtual. Expert in implementing technological innovations.",
        copyright: "All rights reserved by Nail Mammadov."
    }
};

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            el.textContent = translations[lang][el.dataset.langKey];
        });
    });
});
