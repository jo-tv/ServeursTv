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

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// FAQ Accordion
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

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth"
            });

            // Close mobile menu if open
            if (!mobileMenu.classList.contains("hidden")) {
                mobileMenu.classList.add("hidden");
            }
        }
    });
});

// كود ارسال طلب الاشتراك عبر واتساب

document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // منع الإرسال الافتراضي للنموذج

        // الحصول على قيم الحقول
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subjectSelect = document.getElementById("subject");
        const subject = subjectSelect.options[subjectSelect.selectedIndex].text;
        const message = document.getElementById("message").value.trim();

        // تشكيل نص الرسالة
        const whatsappMessage = `Nom: ${name}\nN°Telephone: ${email}\nAbonnement: ${subject}\nMessage: ${message}`;

        // رقم واتساب بدون +
        const whatsappNumber = "212601862102";

        // إنشاء رابط واتساب مع ترميز صحيح
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
            whatsappMessage
        )}`;

        // فتح الرابط في نافذة جديدة
        window.open(whatsappUrl, "_blank");
    });

function contact() {
    window.location.href = "#contact2";
}

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
