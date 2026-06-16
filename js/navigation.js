/* =========================
   AGENCY ANIMATION SYSTEM
   SAVOR & FLAME
========================= */

/* =========================
   1. SCROLL REVEAL SYSTEM
========================= */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * 80); // stagger effect
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".hidden").forEach((el) => {
  observer.observe(el);
});

/* =========================
   2. SMOOTH PAGE FADE TRANSITION
========================= */

document.querySelectorAll("a[href]").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // ignore external links / anchors
    if (href.startsWith("#") || href.startsWith("http")) return;

    e.preventDefault();

    document.body.classList.add("page-fade-out");

    setTimeout(() => {
      window.location.href = href;
    }, 400);
  });
});

/* =========================
   3. MOBILE MENU TOGGLE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle menu when hamburger is clicked
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

/* =========================
   3. NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* =========================
   4. ACTIVE MENU BUTTON (MENU PAGE)
========================= */

const buttons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".menu-section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.getAttribute("data-target");

    sections.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === target) {
        sec.classList.add("active");
      }
    });

  });
});

/* =========================
   SMOOTH SCROLL SYSTEM
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});