/* =========================
   ABOUT PAGE LOGIC
========================= */

/* Simple image click zoom effect (premium feel) */
const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("zoom");
  });
});