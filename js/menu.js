/* =========================
   MENU TAB SWITCHING
========================= */

const buttons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".menu-section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // remove active buttons
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // hide sections
    sections.forEach(sec => sec.classList.remove("active"));

    // show target
    const target = document.getElementById(btn.dataset.target);
    target.classList.add("active");
  });
});