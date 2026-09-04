/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 900);

});


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* Fechar menu ao clicar em link */

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   PARALLAX HERO
========================= */

const heroVisual = document.querySelector(".hero-visual");

window.addEventListener("mousemove", event => {

    if (!heroVisual) return;

    const x = (window.innerWidth / 2 - event.clientX) / 60;
    const y = (window.innerHeight / 2 - event.clientY) / 60;

    heroVisual.style.transform =
        `translateY(-50%) translate(${x}px, ${y}px)`;

});


/* =========================
   HEADER SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(3,3,5,.9)";

    } else {

        header.style.background =
            "rgba(5,5,7,.65)";

    }

});


/* =========================
   FAQ
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.addEventListener("toggle", () => {

        if (item.open) {

            faqItems.forEach(other => {

                if (other !== item) {

                    other.removeAttribute("open");

                }

            });

        }

    });

});


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow = document.createElement("div");

cursorGlow.style.position = "fixed";
cursorGlow.style.width = "250px";
cursorGlow.style.height = "250px";
cursorGlow.style.borderRadius = "50%";
cursorGlow.style.pointerEvents = "none";
cursorGlow.style.zIndex = "-1";
cursorGlow.style.background =
    "radial-gradient(circle, rgba(139,53,255,.08), transparent 70%)";
cursorGlow.style.transform =
    "translate(-50%, -50%)";

document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", event => {

    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;

});