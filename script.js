// --- Particles Background Configuration ---
particlesJS("particles-js", {
    particles: {
        number: { value: 40 },
        color: { value: "#00f2ff" },
        opacity: { value: 0.2 },
        line_linked: { enable: true, color: "#00f2ff", opacity: 0.1 }
    }
});

// --- Theme Toggle (Dark/Light Mode) with persistence ---
const themeBtn = document.getElementById('theme-toggle');

// Saxlanmış theme-i yüklə (default: dark)
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}
themeBtn.innerHTML = savedTheme === 'light' 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    
    themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    // Saxla
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// --- Hamburger Menu Logic ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu   = document.getElementById('mobile-menu');
const closeBtn     = document.getElementById('close-btn');
const mobileLinks  = document.querySelectorAll('.mobile-nav-links a');

hamburgerBtn?.addEventListener('click', () => {
    mobileMenu?.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtn?.addEventListener('click', () => {
    mobileMenu?.classList.remove('active');
    document.body.style.overflow = 'auto';
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu?.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// --- Multi-language System with persistence ---
const translations = {
    az: {
        home:          "Ana Səhifə",
        projects:      "Xidmətlər",
        insights_nav:  "Insights",
        owner_nav:     "Rəhbərlik",
        contact_nav:   "Əlaqə",
        welcome:       "Xoş Gəlmisiniz",
        hero_title:    "Gələcəyin Rəqəmsal Arxitekturası",
        hero_subtitle: "Süni intellekt, VR və yüksək performanslı bulud həlləri ilə biznesinizi bir addım öndə tutun.",
        start_btn:     "Başla",
        projects_title: "Nələr Edirik?",
        s1_title:      "Xüsusi Proqram Təminatı",
        s1_desc:       "Biznesinizin ehtiyaclarına tam uyğun, miqyaslanan veb və mobil sistemlərin qurulması.",
        s2_title:      "VR/AR Simulyasiyalar",
        s2_desc:       "Təhsil və sənaye üçün immersiv virtual və artırılmış reallıq texnologiyaları.",
        s3_title:      "AI İnteqrasiyası",
        s3_desc:       "Süni intellekt və qabaqcıl data analitika vasitəsilə iş proseslərinin avtomatlaşdırılması.",
        insights_title: "Insights & Blog",
        blog_agentic_title: "2026: Agentik AI, RAG, Vibecoding", blog_agentic_desc: "Agentlər, RAG, təhlükəsizlik və gələcək trendlər." },
        blog_ai_programming_title: "2026: AI + Proqramlaşdırma", blog_ai_programming_desc: "Agentlər, RAG, vibecoding və yeni trendlər.",
        blog_ai_5_title: "Biznes problemləri + AI", 
        blog_ai_5_desc: "5 addımda biznes problemlərini AI ilə həll et.",
        blog_ai_title: "Süni intellekt nədir?",
        blog_ai_desc:  "AI əsasları, biznesə tətbiqi və real nümunələr.",
        blog1_title:   "Tech Trends 2026",
        blog1_desc:    "Süni intellektin yeni erasında rəqəmsal transformasiya.",
        owner_label:   "Platforma Rəhbəri",
        owner_bio:     "SyntaxVirtual-ın yaradıcısı və rəqəmsal arxitektor. Texnologiya dünyasında innovasiyaların tətbiqi üzrə mütəxəssis.",
        copyright:     "Bütün hüquqlar Nail Mammadov tərəfindən qorunur."
    },
    en: {
        home:          "Home",
        projects:      "Services",
        insights_nav:  "Insights",
        owner_nav:     "Leadership",
        contact_nav:   "Contact",
        welcome:       "Welcome",
        hero_title:    "SyntaxVirtual: Digital Architecture & AI",
        hero_subtitle: "We reshape the digital world through Artificial Intelligence (AI), Python programming, and innovative cloud solutions.",
        start_btn:     "Get Started",
        projects_title: "Our Services",
        s1_title:      "Custom Software",
        s1_desc:       "Unique and scalable web/mobile systems tailored to your business needs.",
        s2_title:      "VR/AR Simulations",
        s2_desc:       "Immersive virtual and augmented reality solutions for training and business.",
        s3_title:      "AI Integration",
        s3_desc:       "Automation of business processes with AI and advanced data analytics.",
        insights_title: "Insights & Blog",
        blog_ai_programming_title: "2026: AI + Programming", 
        blog_ai_programming_desc: "Agents, RAG, vibe coding, and new trends.",
        blog_ai_5_title: "Business problems + AI",
        blog_ai_5_desc: "Solve business problems with AI in 5 steps.",
        blog_ai_title: "What is AI?",
        blog_ai_desc:  "AI basics, business applications, and real-world examples.",
        blog1_title:   "Tech Trends 2026",
        blog1_desc:    "Digital transformation in the new era of Artificial Intelligence.",
        owner_label:   "Platform Founder",
        owner_bio:     "Founder and Chief Architect of SyntaxVirtual. Expert in implementing digital innovations.",
        copyright:     "All rights reserved by Nail Mammadov."
    }
};

// Mövcud dili yüklə (default: az)
let currentLang = localStorage.getItem('lang') || 'az';

// Funksiya: dili bütün səhifəyə tətbiq et
function applyLanguage(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (translations[lang]?.[key]) {
            el.textContent = translations[lang][key];
        }
    });

    // SEO meta description yenilə
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', lang === 'az' 
            ? "SyntaxVirtual - Süni İntellekt, Python proqramlaşdırma və innovativ rəqəmsal həllərin mərkəzi."
            : "SyntaxVirtual - Global platform for AI, Python programming and digital architecture solutions.");
    }
}

// İlk yükləmədə dili tətbiq et
applyLanguage(currentLang);

// Dil düymələrinə click event
document.querySelectorAll('.lang-btn').forEach(btn => {
    // Aktiv düyməni göstər
    if (btn.dataset.lang === currentLang) {
        btn.classList.add('active');
    }

    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang === currentLang) return;

        currentLang = lang;
        localStorage.setItem('lang', lang);

        // UI yenilə
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Mətnləri yenilə
        applyLanguage(lang);
    });
});
