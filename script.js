// Particles Background Configuration
particlesJS("particles-js", {
    particles: {
        number: { value: 40 },
        color: { value: "#00f2ff" },
        opacity: { value: 0.2 },
        line_linked: { enable: true, color: "#00f2ff", opacity: 0.1 }
    }
});

// Theme Toggle (Dark/Light Mode)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Multi-language System & SEO Optimizations
const translations = {
    az: {
        home: "Ana Səhifə", 
        projects: "Xidmətlər", 
        owner_nav: "Rəhbərlik", 
        contact_nav: "Əlaqə",
        welcome: "Xoş Gəlmisiniz",
        hero_title: "Gələcəyin Rəqəmsal Arxitekturası",
        hero_subtitle: "Süni intellekt, VR və yüksək performanslı bulud həlləri ilə biznesinizi bir addım öndə tutun.",
        start_btn: "Başla",
        projects_title: "Nələr Edirik?",
        s1_title: "Xüsusi Proqram Təminatı", 
        s1_desc: "Biznesinizin ehtiyaclarına tam uyğun, miqyaslanan veb və mobil sistemlərin qurulması.",
        s2_title: "VR/AR Simulyasiyalar", 
        s2_desc: "Təhsil və sənaye üçün immersiv virtual və artırılmış reallıq texnologiyaları.",
        s3_title: "AI İnteqrasiyası", 
        s3_desc: "Süni intellekt və qabaqcıl data analitika vasitəsilə iş proseslərinin avtomatlaşdırılması.",
        owner_label: "Platforma Rəhbəri",
        owner_bio: "SyntaxVirtual-ın yaradıcısı və baş texnoloji memarı. Texnologiya dünyasında innovasiyaların tətbiqi üzrə mütəxəssis.",
        copyright: "Bütün hüquqlar Nail Mammadov tərəfindən qorunur."
    },
    en: {
        home: "Home", 
        projects: "Services", 
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
        owner_label: "Platform Founder",
        owner_bio: "Founder and Chief Architect of SyntaxVirtual. Expert in implementing digital innovations.",
        copyright: "All rights reserved by Nail Mammadov."
    }
};

// Language Switcher Logic with Meta Data Update
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        
        // Button UI Update
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Content Update
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Dynamic SEO Update for Meta Description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (lang === 'az') {
            metaDesc.setAttribute("content", "SyntaxVirtual - Süni İntellekt, Python proqramlaşdırma və innovativ rəqəmsal həllərin mərkəzi.");
        } else {
            metaDesc.setAttribute("content", "SyntaxVirtual - Global platform for AI, Python programming and digital architecture solutions.");
        }
    });
});
