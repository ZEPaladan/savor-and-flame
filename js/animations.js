/* =========================
   SCROLL ANIMATIONS
========================= */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach(el => observer.observe(el));

/* Smooth parallax effect for hero */
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    let offset = window.scrollY;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
  }
});