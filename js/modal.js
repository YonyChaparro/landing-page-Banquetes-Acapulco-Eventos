/**
 * Modal de servicios — apertura, cierre y población de datos.
 * Requiere: services-data.js cargado antes de este archivo.
 */

const WHATSAPP_NUMBER = "573103247704";

/**
 * Abre el modal con la información del servicio indicado.
 * @param {string} serviceKey — clave del objeto serviceData
 */
function openServiceModal(serviceKey) {
  const data = serviceData[serviceKey];
  if (!data) return;

  document.getElementById("modalIcon").textContent = data.icon;
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalDescription").textContent = data.description;
  document.getElementById("modalCtaText").textContent = data.cta;
  document.getElementById("modalWhatsApp").href =
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(data.whatsapp);

  // Build includes list
  const includesHtml =
    '<h4 class="font-semibold text-gray-900 dark:text-white text-sm mb-3 flex items-center gap-2">' +
    '<span class="material-icons text-primary text-base">checklist</span> ¿Qué incluye?</h4>' +
    '<ul class="space-y-2">' +
    data.includes
      .map(
        (item) =>
          '<li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">' +
          '<span class="material-icons text-primary text-sm mt-0.5 flex-shrink-0">check_circle</span>' +
          item +
          "</li>"
      )
      .join("") +
    "</ul>";
  document.getElementById("modalIncludes").innerHTML = includesHtml;

  // Show modal with animation
  const modal = document.getElementById("serviceModal");
  const overlay = document.getElementById("serviceModalOverlay");
  const content = document.getElementById("serviceModalContent");

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";

  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    content.classList.remove("scale-95", "opacity-0");
    content.classList.add("scale-100", "opacity-100");
  });
}

/**
 * Cierra el modal con animación de salida.
 */
function closeServiceModal() {
  const modal = document.getElementById("serviceModal");
  const overlay = document.getElementById("serviceModalOverlay");
  const content = document.getElementById("serviceModalContent");

  overlay.classList.remove("opacity-100");
  overlay.classList.add("opacity-0");
  content.classList.remove("scale-100", "opacity-100");
  content.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  }, 300);
}

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeServiceModal();
});
