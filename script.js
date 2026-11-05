// CONFIGURA AQUÍ EL NÚMERO OFICIAL EN FORMATO INTERNACIONAL, sin + ni espacios.
const WHATSAPP_NUMBER = "";
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("remittance-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get("name").trim();
  const country = data.get("country").trim();
  const amount = data.get("amount");
  const currency = data.get("currency");
  const message = `Hola, quiero información sobre una remesa a Cuba.%0A Nombre: ${encodeURIComponent(name)}%0A País de envío: ${encodeURIComponent(country)}%0A Importe aproximado: ${encodeURIComponent(amount)} ${encodeURIComponent(currency)}.`;
  const note = document.getElementById("form-note");

  if (!WHATSAPP_NUMBER) {
    note.textContent = "El formulario está listo, pero falta configurar el número oficial de WhatsApp del negocio en script.js.";
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
});
