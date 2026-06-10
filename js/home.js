/* =========================
   HOME PAGE LOGIC
========================= */

/* COUNTER ANIMATION */
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

/* HERO PARALLAX (optional enhancement) */
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  let scroll = window.scrollY;

  if (hero) {
    hero.style.backgroundPositionY = scroll * 0.4 + "px";
  }
});