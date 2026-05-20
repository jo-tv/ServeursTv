        
            tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: "#FF0000",
                secondary: "#FFD700",
                dark: "#0F172A",
                darker: "#020617"
            }
        }
    }
};
/* ===== TRANSLATIONS ===== */
const i18n = {
    fr: {
        nav_home: "Accueil", nav_features: "Fonctionnalités", nav_servers: "Serveurs",
        nav_plans: "Forfaits", nav_faq: "FAQ", nav_contact: "Contact",

        hero_title1: "La Meilleure", hero_title2: "Expérience en IPTV Premium",
        hero_desc: "Expérience TV numérique stable avec haute qualité d'affichage et compatibilité multi-appareils.",
        hero_cta: "S'abonner Maintenant",
        hero_card_title: "Interface TAHA TV Services",
        hero_card_desc: "<strong>TAHA TV Services</strong> est une plateforme multimédia numérique proposant des services compatibles Smart TV, Android et plusieurs appareils connectés.",

        features_tag: "POURQUOI CHOISIR NOTRE IPTV Premium",
        features_title: "Compatible avec tous vos appareils préférés et applications comme IPTV Smarters Premium",
        feat_tablets: "Tablettes", feat_pc: "Ordinateurs",
        features_more: "Et bien plus encore ! Si votre appareil supporte IPTV, il fonctionne avec IPTV Premium.",

        servers_tag: "INFRASTRUCTURE",
        servers_title: "Tout ce dont vous avez besoin pour un divertissement parfait",
        servers_desc: "Notre abonnement IPTV Premium est rempli de fonctionnalités conçues pour vous offrir l'expérience de visionnage ultime.",
        srv_stable: "Serveur Stable", srv_stable_desc: "P2P Binstream - Connexion mondiale avec qualité Full HD et 4K",
        srv_security: "Sécurité et Confidentialité", srv_security_desc: "Serveur dédié pour un son de haute qualité",
        srv_channels: "20 000 chaînes TV en direct", srv_channels_desc: "Accédez à toutes les principales chaînes marocaines, sports internationaux, films, actualités et divertissements pour enfants.",
        srv_epg: "Guide des programmes (EPG)", srv_epg_desc: "Optimisé pour une vitesse maximale",
        srv_replay: "Replay 7 Jours & Enregistrement", srv_replay_desc: "Vous avez manqué votre émission préférée ? Pas de problème. Regardez-la à tout moment.",
        srv_vod: "Bibliothèque VOD Premium", srv_vod_desc: "Des milliers de films et séries TV à la demande, mis à jour quotidiennement avec les nouvelles sorties.",
        srv_multi: "Support Multi-Appareils", srv_multi_desc: "Regardez sur votre Smart TV, smartphone, tablette, ordinateur ou via des applications comme IPTV Smarters Premium.",
        srv_epg2: "Intégration EPG", srv_epg2_desc: "Guide des programmes électronique convivial avec informations détaillées sur les émissions.",
        servers_bottom: "Nos serveurs sont redondants et garantissent une stabilité même pendant les pics de connexion, avec une qualité Full HD et 4K disponible 24/7.",
        servers_cta: "Essayez Maintenant",

        streaming_title: "Streamings Premium Inclus",
        streaming_desc: "Tous ces services sont disponibles dans votre forfait Premium IPTV sans coût supplémentaire.",

        plans_tag: "PLANS ET TARIFS", plans_title: "Choisissez le Meilleur Plan pour Vous",
        plans_desc: "Des plans flexibles qui s'adaptent à vos besoins. Plus la durée est longue, plus la remise est importante !",
        plan1_name: "Plan Mensuel", plan1_desc: "Idéal pour tester notre service", plan1_period: "/mois", plan1_f1: "1 Mois d'Accès",
        plan2_name: "Plan Trimestriel", plan2_desc: "Économisez 15%", plan2_period: "/3 mois", plan2_f1: "3 Mois d'Accès",
        plan3_name: "Plan Semestriel", plan3_desc: "Économisez 30%", plan3_period: "/6 mois", plan3_f1: "6 Mois d'Accès",
        plan4_name: "Plan Annuel", plan4_desc: "Économisez 20%", plan4_period: "/12 mois", plan4_f1: "12 Mois d'Accès", plan4_f2: "2 Appareils Simultanés",
        plan_channels: "+10.000 Chaînes", plan_streaming: "Streamings Inclus", plan_quality: "Qualité Full HD/4K",
        plan_priority: "Support Prioritaire", plan_popular: "POPULAIRE", plan_cta: "Contact WhatsApp",
        payment_title: "Moyens de Paiement", payment_bank: "Virement Bancaire",

        testimonials_tag: "TÉMOIGNAGES", testimonials_title: "Ce Que Nos Clients Disent",
        testimonials_desc: "Avis réels de clients satisfaits de notre service IPTV Premium.",
        test1_name: "Said Kamal", test1_text: "\"Enfin j'ai trouvé un IPTV qui marche parfaitement ! Toutes les chaînes dont j'ai besoin, une qualité excellente et aucune coupure. Je le recommande vivement !\"",
        test2_name: "Hamada Rais", test2_text: "\"Passionné de foot, j'ai été impressionné par le nombre de chaînes sportives et la qualité de diffusion. Franchement la meilleure offre du marché !\"",
        test3_text: "\"J'adore avoir tous les services de streaming au même endroit. J'ai beaucoup économisé en annulant plusieurs abonnements. Le support est également très attentif et rapide.\"",

        faq_title: "Questions Fréquentes", faq_desc: "Trouvez les réponses à vos questions concernant notre service IPTV Premium.",
        faq1_q: "Qu'est-ce que l'IPTV Premium et comment ça marche ?",
        faq1_a: "L'IPTV Premium est une technologie qui permet de regarder la TV via internet. Le contenu est diffusé par protocole internet, offrant plus de flexibilité et une meilleure qualité.",
        faq2_q: "Quels appareils sont compatibles ?",
        faq2_a: "Notre service fonctionne sur les Smart TVs, Fire TV Stick, Chromecast, Android Box, téléphones, tablettes et ordinateurs.",
        faq3_q: "Ai-je besoin d'une connexion internet rapide ?",
        faq3_a: "Nous recommandons 15 Mbps pour la HD et 25 Mbps pour la 4K.",
        faq4_q: "Comment installer le service ?",
        faq4_a: "Après l'achat, vous recevrez vos identifiants et les liens de téléchargement des applications compatibles.",
        faq5_q: "Puis-je regarder sur plusieurs appareils ?",
        faq5_a: "Oui, 1 appareil (mensuel/trimestriel) ou 2 appareils (semestriel/annuel).",
        faq6_q: "Comment fonctionne le support technique ?",
        faq6_a: "Assistance 24h/24 et 7j/7 via WhatsApp et e-mail.",

        contact_tag: "CONTACT", contact_title: "Parlez-nous",
        contact_desc: "Vous avez des questions ou besoin d'aide ? Notre équipe est prête à vous assister.",
        contact_form_title: "Envoyez un Message", contact_name: "Votre Nom", contact_phone: "Votre N° Téléphone",
        contact_subject: "Sujet", contact_message: "Votre Message", contact_send: "Envoyer le Message",
        contact_opt1: "Abonnement 1 mois", contact_opt2: "Abonnement 3 mois", contact_opt3: "Abonnement 6 mois", contact_opt4: "Abonnement 12 mois",
        contact_other: "Autres Moyens de Contact", contact_wa_label: "Téléphone/WhatsApp",
        contact_subscribe: "S'abonner maintenant", contact_hours_label: "Horaires d'Assistance",
        contact_hours: "24 heures sur 24, 7 jours sur 7",
        contact_social: "Suivez-nous sur les Réseaux Sociaux",

        footer_about: "Le meilleur service IPTV premium avec qualité Full HD/4K, plus de 10.000 contenus et tous les streamings au même endroit.",
        footer_links: "Liens rapides", footer_support: "Support",
        footer_tutorials: "Tutoriels", footer_apps: "Applications", footer_status: "État du service",
        footer_privacy: "Politique de confidentialité",
        footer_newsletter: "Inscrivez-vous pour recevoir des nouveautés et offres exclusives.",
        footer_rights: "Tous droits réservés.", footer_dev: "Site développé par",

        wa_status: "En ligne • Réponse rapide",
        wa_intro: "Choisissez votre plan et envoyez votre demande en quelques secondes.",
        wa_name: "Votre nom", wa_plan_label: "Plan souhaité", wa_plan_choose: "Choisissez votre plan",
        wa_note: "Message supplémentaire (optionnel)", wa_send: "Envoyer sur WhatsApp",
        wa_float_text: "S'abonner maintenant",
    },

    ar: {
        nav_home: "الرئيسية", nav_features: "المميزات", nav_servers: "السيرفرات",
        nav_plans: "الباقات", nav_faq: "أسئلة شائعة", nav_contact: "اتصل بنا",

        hero_title1: "أفضل", hero_title2: "تجربة IPTV بريميوم",
        hero_desc: "تجربة تلفزيون رقمي مستقر بجودة عرض عالية ومتوافق مع جميع الأجهزة.",
        hero_cta: "اشترك الآن",
        hero_card_title: "واجهة TAHA TV Services",
        hero_card_desc: "<strong>TAHA TV Services</strong> هي منصة وسائط رقمية تقدم خدمات متوافقة مع Smart TV و Android والعديد من الأجهزة المتصلة.",

        features_tag: "لماذا تختار IPTV بريميوم الخاص بنا",
        features_title: "متوافق مع جميع أجهزتك المفضلة وتطبيقات مثل IPTV Smarters Premium",
        feat_tablets: "أجهزة لوحية", feat_pc: "حواسيب",
        features_more: "والمزيد! إذا كان جهازك يدعم IPTV، فسيعمل مع IPTV Premium.",

        servers_tag: "البنية التحتية",
        servers_title: "كل ما تحتاجه لترفيه مثالي",
        servers_desc: "اشتراك IPTV بريميوم الخاص بنا مليء بالمميزات المصممة لتقديم أفضل تجربة مشاهدة.",
        srv_stable: "سيرفر مستقر", srv_stable_desc: "P2P Binstream - اتصال عالمي بجودة Full HD و 4K",
        srv_security: "الأمان والخصوصية", srv_security_desc: "سيرفر مخصص لجودة صوت عالية",
        srv_channels: "20,000 قناة تلفزيونية مباشرة", srv_channels_desc: "الوصول إلى جميع القنوات المغربية الرئيسية، الرياضة الدولية، الأفلام، الأخبار وبرامج الأطفال.",
        srv_epg: "دليل البرامج الإلكتروني (EPG)", srv_epg_desc: "محسّن لأقصى سرعة",
        srv_replay: "إعادة 7 أيام + تسجيل", srv_replay_desc: "فاتك برنامجك المفضل؟ لا مشكلة. شاهده في أي وقت.",
        srv_vod: "مكتبة VOD بريميوم", srv_vod_desc: "آلاف الأفلام والمسلسلات حسب الطلب، يتم تحديثها يومياً بالإصدارات الجديدة.",
        srv_multi: "دعم متعدد الأجهزة", srv_multi_desc: "شاهد على Smart TV، هاتفك الذكي، جهاز لوحي، كمبيوتر أو عبر تطبيقات مثل IPTV Smarters Premium.",
        srv_epg2: "تكامل EPG", srv_epg2_desc: "دليل برامج إلكتروني سهل الاستخدام مع معلومات مفصلة عن البرامج.",
        servers_bottom: "سيرفراتنا مكررة وتضمن الاستقرار حتى أثناء ذروة الاتصال، بجودة Full HD و 4K متاحة على مدار الساعة.",
        servers_cta: "جرب الآن",

        streaming_title: "منصات البث المتضمنة",
        streaming_desc: "جميع هذه الخدمات متاحة في باقة IPTV بريميوم بدون تكلفة إضافية.",

        plans_tag: "الباقات والأسعار", plans_title: "اختر أفضل باقة لك",
        plans_desc: "باقات مرنة تتناسب مع احتياجاتك. كلما زادت المدة، زاد الخصم!",
        plan1_name: "الباقة الشهرية", plan1_desc: "مثالي لتجربة خدمتنا", plan1_period: "/شهر", plan1_f1: "شهر واحد من الوصول",
        plan2_name: "الباقة الفصلية", plan2_desc: "وفر 15%", plan2_period: "/3 أشهر", plan2_f1: "3 أشهر من الوصول",
        plan3_name: "الباقة النصف سنوية", plan3_desc: "وفر 30%", plan3_period: "/6 أشهر", plan3_f1: "6 أشهر من الوصول",
        plan4_name: "الباقة السنوية", plan4_desc: "وفر 20%", plan4_period: "/12 شهر", plan4_f1: "12 شهر من الوصول", plan4_f2: "جهازان في آن واحد",
        plan_channels: "+10,000 قناة", plan_streaming: "منصات البث متضمنة", plan_quality: "جودة Full HD/4K",
        plan_priority: "دعم ذو أولوية", plan_popular: "الأكثر طلباً", plan_cta: "تواصل عبر واتساب",
        payment_title: "طرق الدفع", payment_bank: "تحويل بنكي",

        testimonials_tag: "آراء العملاء", testimonials_title: "ماذا يقول عملاؤنا",
        testimonials_desc: "آراء حقيقية من عملاء راضين عن خدمة IPTV بريميوم.",
        test1_name: "سعيد كمال", test1_text: "\"أخيراً لقيت واحد الـIPTV لي خدام مزيان! كاينين فيه جميع القنوات لي محتاج، الجودة زوينة بزاف وما كيتقطعش. كنوصي بيه بزاف!\"",
        test2_name: "حمادة رايس", test2_text: "\"حيت كنموت على الكورة، تصدمت من كترة ديال القنوات الرياضية والجودة ديال النقل. بصراحة أحسن صفقة فالسوق!\"",
        test3_text: "\"عندي جميع خدمات البث في مكان واحد. وفرت الكثير بإلغاء عدة اشتراكات. الدعم أيضاً سريع ومتجاوب.\"",

        faq_title: "أسئلة شائعة", faq_desc: "اعثر على إجابات لأسئلتك حول خدمة IPTV بريميوم.",
        faq1_q: "ما هو IPTV بريميوم وكيف يعمل؟",
        faq1_a: "IPTV بريميوم هي تقنية تتيح مشاهدة التلفزيون عبر الإنترنت. يتم بث المحتوى عبر بروتوكول الإنترنت، مما يوفر مرونة أكبر وجودة أفضل.",
        faq2_q: "ما هي الأجهزة المتوافقة؟",
        faq2_a: "خدمتنا تعمل على Smart TV و Fire TV Stick و Chromecast و Android Box وكذلك الهواتف والأجهزة اللوحية والحواسيب.",
        faq3_q: "هل أحتاج اتصال إنترنت سريع؟",
        faq3_a: "ننصح بـ 15 ميجابت/ثانية لجودة HD و 25 ميجابت/ثانية لجودة 4K.",
        faq4_q: "كيف أثبت الخدمة؟",
        faq4_a: "بعد الشراء، ستتلقى بيانات الدخول وروابط تحميل التطبيقات المتوافقة مع جهازك.",
        faq5_q: "هل يمكنني المشاهدة على عدة أجهزة؟",
        faq5_a: "نعم، جهاز واحد (الشهرية/الفصلية) أو جهازان (النصف سنوية/السنوية).",
        faq6_q: "كيف يعمل الدعم الفني؟",
        faq6_a: "دعم على مدار الساعة 24/7 عبر واتساب والبريد الإلكتروني.",

        contact_tag: "اتصل بنا", contact_title: "تحدث إلينا",
        contact_desc: "لديك أسئلة أو تحتاج مساعدة؟ فريقنا جاهز لمساعدتك.",
        contact_form_title: "أرسل رسالة", contact_name: "اسمك", contact_phone: "رقم هاتفك",
        contact_subject: "الموضوع", contact_message: "رسالتك", contact_send: "إرسال الرسالة",
        contact_opt1: "اشتراك شهر واحد", contact_opt2: "اشتراك 3 أشهر", contact_opt3: "اشتراك 6 أشهر", contact_opt4: "اشتراك 12 شهر",
        contact_other: "وسائل اتصال أخرى", contact_wa_label: "الهاتف / واتساب",
        contact_subscribe: "اشترك الآن", contact_hours_label: "ساعات الدعم",
        contact_hours: "24 ساعة في اليوم، 7 أيام في الأسبوع",
        contact_social: "تابعنا على وسائل التواصل الاجتماعي",

        footer_about: "أفضل خدمة IPTV بريميوم بجودة Full HD/4K، أكثر من 10,000 محتوى وجميع منصات البث في مكان واحد.",
        footer_links: "روابط سريعة", footer_support: "الدعم",
        footer_tutorials: "شروحات", footer_apps: "تطبيقات", footer_status: "حالة الخدمة",
        footer_privacy: "سياسة الخصوصية",
        footer_newsletter: "سجل لتلقي الأخبار والعروض الحصرية.",
        footer_rights: "جميع الحقوق محفوظة.", footer_dev: "تم تطوير الموقع بواسطة",

        wa_status: "متصل • رد سريع",
        wa_intro: "اختر باقتك وأرسل طلبك في ثوانٍ.",
        wa_name: "اسمك", wa_plan_label: "الباقة المطلوبة", wa_plan_choose: "اختر باقتك",
        wa_note: "رسالة إضافية (اختياري)", wa_send: "أرسل عبر واتساب",
        wa_float_text: "اشترك الآن",
    }
};

/* ===== CURRENT LANGUAGE ===== */
let currentLang = 'fr';

/* ===== APPLY TRANSLATIONS ===== */
function applyTranslations(lang) {
    const data = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = data[key];
            } else {
                el.innerHTML = data[key];
            }
        }
    });
}

/* ===== TOGGLE LANGUAGE ===== */
function toggleLanguage() {
    // Flip animation
    document.body.classList.add('page-flipping');

    setTimeout(() => {
        currentLang = currentLang === 'fr' ? 'ar' : 'fr';

        // Direction
        const html = document.documentElement;
        html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        html.lang = currentLang;

        // Apply translations
        applyTranslations(currentLang);

        // Update toggle button
        document.getElementById('lang-icon').textContent = currentLang === 'ar' ? '🇫🇷' : '🇲🇦';
        document.getElementById('lang-label').textContent = currentLang === 'ar' ? 'Français' : 'عربي';

        // Remove animation
        setTimeout(() => document.body.classList.remove('page-flipping'), 100);
    }, 350);
}

/* ===== MOBILE MENU ===== */
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

/* ===== FAQ TOGGLE ===== */
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector("i");

        answer.classList.toggle("hidden");
        icon.classList.toggle("fa-chevron-down");
        icon.classList.toggle("fa-chevron-up");
    });
});

/* ===== BACK TO TOP ===== */
// Back to Top Button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.remove("hidden");
        backToTop.classList.add("flex");
    } else {
        backToTop.classList.add("hidden");
        backToTop.classList.remove("flex");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ===== WHATSAPP WIDGET LOGIC (محدث) ===== */

const phoneNumber = "212656945290";

const planPrices = {
    "Plan Mensuel": "8$ /mois",
    "Plan Trimestriel": "10$ /3 mois",
    "Plan Semestriel": "25$ /6 mois",
    "Plan Annuel": "40$ /12 mois"
};

const waWidget = document.getElementById("wa-widget");
const waPanel = document.getElementById("wa-panel");
const waToggle = document.getElementById("wa-toggle");
const waClose = document.getElementById("wa-close");
const waPlan = document.getElementById("wa-plan");
const waName = document.getElementById("wa-name");
const waNote = document.getElementById("wa-note");
const waPlanPrice = document.getElementById("wa-plan-price");
const waSubmit = document.getElementById("wa-submit");

function showWhatsAppPanel() {
    waPanel.classList.remove(
        "opacity-0",
        "translate-y-4",
        "scale-95",
        "-z-50",
        "invisible"
    );

    waPanel.classList.add(
        "opacity-100",
        "translate-y-0",
        "scale-100",
        "z-50",
        "visible"
    );
}

function hideWhatsAppPanel() {
    waPanel.classList.add(
        "opacity-0",
        "translate-y-4",
        "scale-95",
        "-z-50",
        "invisible"
    );

    waPanel.classList.remove(
        "opacity-100",
        "translate-y-0",
        "scale-100",
        "z-50",
        "visible"
    );
}

function updatePlanPrice() {
    const selectedPlan = waPlan.value;
    const price = planPrices[selectedPlan] || "";
    waPlanPrice.textContent = price ? `Tarif : ${price}` : "";
}

window.openWhatsAppWidget = function (plan = "") {
    setTimeout(() => {
        showWhatsAppPanel();

        if (plan && planPrices[plan]) {
            waPlan.value = plan;
            updatePlanPrice();
        }

        waName.focus();
    }, 30);
};

waToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    const isHidden = waPanel.classList.contains("pointer-events-none");
    isHidden ? showWhatsAppPanel() : hideWhatsAppPanel();
});

waClose.addEventListener("click", function (e) {
    e.stopPropagation();
    hideWhatsAppPanel();
});

waPanel.addEventListener("click", function (e) {
    e.stopPropagation();
});

waPlan.addEventListener("change", updatePlanPrice);

waSubmit.addEventListener("click", function () {
    const selectedPlan = waPlan.value;
    const price = planPrices[selectedPlan] || "";
    const name = waName.value.trim();
    const note = waNote.value.trim();

    if (!selectedPlan) {
        alert("Veuillez choisir un plan.");
        return;
    }

    let message = `Bonjour 👋\n\nJe souhaite m'abonner à votre service IPTV.\n\n`;
    message += `📦 Plan choisi : ${selectedPlan}\n`;
    message += `💰 Tarif : ${price}\n`;

    if (name) {
        message += `👤 Nom : ${name}\n`;
    }

    if (note) {
        message += `📝 Message : ${note}\n`;
    }

    message += `\Envoyez-moi les informations de paiement officielles.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
});

document.addEventListener("click", function () {
    hideWhatsAppPanel();
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js");
    });
}

/* ===== CONTACT FORM ===== */
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('c-name').value.trim();
    const phone = document.getElementById('c-phone').value.trim();
    const subject = document.getElementById('c-subject').value;
    const message = document.getElementById('c-message').value.trim();

    if (!name || !phone) {
        alert(currentLang === 'ar' ? 'يرجى ملء الحقول المطلوبة' : 'Veuillez remplir les champs requis');
        return;
    }

    let msg = currentLang === 'ar'
        ? `مرحباً، أريد التواصل معكم 📩\n\n👤 الاسم: ${name}\n📱 الهاتف: ${phone}\n📋 الموضوع: ${subject}`
        : `Bonjour, je souhaite vous contacter 📩\n\n👤 Nom: ${name}\n📱 Téléphone: ${phone}\n📋 Sujet: ${subject}`;

    if (message) msg += `\n💬 ${currentLang === 'ar' ? 'الرسالة' : 'Message'}: ${message}`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
});

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* ===== INIT ===== */
applyTranslations('fr');
