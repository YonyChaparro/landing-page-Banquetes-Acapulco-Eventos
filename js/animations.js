/**
 * Scroll-reveal animations con IntersectionObserver.
 * Requiere las clases CSS: .reveal, .reveal-left, .reveal-right, .reveal-scale
 */

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
    .forEach((el) => observer.observe(el));
});
