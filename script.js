"use strict";

// Content and navigation remain usable when JavaScript is unavailable.
document.documentElement.classList.add("js");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const mobileViewport = window.matchMedia("(max-width: 900px)");

function closeMenu(returnFocus = false) {
  navLinks.dataset.open = "false";
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector("span").textContent = "+";
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  navLinks.dataset.open = String(open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.querySelector("span").textContent = open ? "−" : "+";
});
navLinks.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  closeMenu();
  if (mobileViewport.matches) {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      target.addEventListener(
        "blur",
        () => target.removeAttribute("tabindex"),
        { once: true },
      );
    }
  }
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  )
    closeMenu(true);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest("#navbar")) closeMenu();
});
document.addEventListener("focusin", (event) => {
  if (!event.target.closest("#navbar")) closeMenu();
});
mobileViewport.addEventListener("change", () => closeMenu());

const contactForm = document.querySelector("#contact-form");
contactForm.hidden = false;
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = contactForm.elements.name.value.trim();
  const email = contactForm.elements.email.value.trim();
  const message = contactForm.elements.message.value.trim();
  if (!name || !email || !message) {
    document.querySelector("#form-status").textContent =
      "Please enter your name, email, and message.";
    return;
  }
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(
    `${message}\n\nFrom: ${name}\nEmail: ${email}`,
  );
  document.querySelector("#form-status").textContent =
    "Continue in your email app to send the draft. If it did not open, email sanjaysarella11@gmail.com directly. Your message stays here.";
  window.location.href = `mailto:sanjaysarella11@gmail.com?subject=${subject}&body=${body}`;
});
