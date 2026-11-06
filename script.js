"use strict";

// WhatsApp en formato internacional: Cuba (+53) y número 58890666.
const WHATSAPP_NUMBER = "5358890666";

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

// Si la imagen no se encuentra, mostramos una indicación útil en vez de dejar
// al visitante sin saber qué archivo falta.
const logo = document.getElementById("brand-logo");
const logoError = document.getElementById("logo-error");
if (logo && logoError) {
  logo.addEventListener("error", function () {
    logo.hidden = true;
    logoError.hidden = false;
  });
}

const form = document.getElementById("remittance-form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const country = String(data.get("country") || "").trim();
    const question = String(data.get("message") || "").trim();
    const note = document.getElementById("form-note");

    if (!name || !country || !question) {
      if (note) note.textContent = "Completa tu nombre, país y consulta para continuar.";
      return;
    }

    const message = [
      "Hola, quiero hacer una consulta informativa a Remesas Cuba Express.",
      "Nombre: " + name,
      "País: " + country,
      "Consulta: " + question
    ].join("\n");

    const whatsappUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
    window.location.href = whatsappUrl;
  });
}
