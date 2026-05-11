document.addEventListener("DOMContentLoaded", () => {
    // 1. Sticky Header Logic
    const header = document.getElementById("main-header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    });

    // 2. Scroll Reveal Animations with GSAP
    gsap.registerPlugin(ScrollTrigger);

    const revealElements = document.querySelectorAll(".gs-reveal");

    revealElements.forEach((element) => {
        let delay = 0;
        if (element.classList.contains("delay-100")) delay = 0.05;
        if (element.classList.contains("delay-200")) delay = 0.1;
        if (element.classList.contains("delay-300")) delay = 0.15;

        gsap.fromTo(element,
            {
                y: 40,
                autoAlpha: 0
            },
            {
                duration: 0.5, // Más rápido
                y: 0,
                autoAlpha: 1,
                ease: "power2.out",
                delay: delay,
                scrollTrigger: {
                    trigger: element,
                    start: "top 95%", // Se dispara antes de que entre completamente
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // 3. Mobile Menu Logic
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuIcon = document.getElementById("mobile-menu-icon");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    function toggleMenu() {
        const isOpen = !mobileMenu.classList.contains("translate-x-full");
        if (isOpen) {
            mobileMenu.classList.add("translate-x-full");
            mobileMenuIcon.classList.remove("fa-times");
            mobileMenuIcon.classList.add("fa-bars");
            document.body.style.overflow = ""; // Restore scrolling
        } else {
            mobileMenu.classList.remove("translate-x-full");
            mobileMenuIcon.classList.remove("fa-bars");
            mobileMenuIcon.classList.add("fa-times");
            document.body.style.overflow = "hidden"; // Prevent scrolling
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", toggleMenu);
    }

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (!mobileMenu.classList.contains("translate-x-full")) {
                toggleMenu();
            }
        });
    });
});