/**
 * Scroll-reveal animations con IntersectionObserver.
 * Requiere las clases CSS: .reveal, .reveal-left, .reveal-right, .reveal-scale
 */

// ── Hero rotating event type ─────────────────────────────────────────────────
(function () {
  const types = [
    "bodas",
    "15 años",
    "baby showers",
    "grados",
    "cumpleaños",
    "bautizos",
    "primeras comuniones",
    "eventos empresariales",
    "despedidas de soltera",
  ];

  let current = 0;

  const el = document.getElementById("hero-rotating-type");
  if (!el) return;

  // Estilos base para la transición
  el.style.display = "inline-block";
  el.style.transition = "opacity 0.4s ease, transform 0.4s ease";

  function showNext() {
    // Fade-out + slide up
    el.style.opacity = "0";
    el.style.transform = "translateY(-8px)";

    setTimeout(() => {
      current = (current + 1) % types.length;
      el.textContent = ": " + types[current];

      // Slide in desde abajo
      el.style.transform = "translateY(8px)";
      el.style.opacity = "0";

      // Forzar reflow
      void el.offsetWidth;

      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 400);
  }

  setInterval(showNext, 2500);
})();
// ──────────────────────────────────────────────────────────────────────────────

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
