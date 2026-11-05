// Número de WhatsApp configurado en formato internacional, sin + ni espacios.
const WHATSAPP_NUMBER = "5358890666";

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("remittance-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") || "").trim();
  const country = String(data.get("country") || "").trim();
  const messageText = String(data.get("message") || "").trim();
  const note = document.getElementById("form-note");

  if (!name || !country || !messageText) {
    note.textContent = "Completa tu nombre, país y consulta para continuar.";
    return;
  }

  const message = [
    "Hola, quiero hacer una consulta informativa a Remesas Cuba Express.",
    `Nombre: ${name}`,
    `País: ${country}`,
    `Consulta: ${messageText}`
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  note.textContent = "Se ha preparado tu mensaje en WhatsApp. Revísalo y pulsa Enviar en WhatsApp si deseas compartirlo.";
});
