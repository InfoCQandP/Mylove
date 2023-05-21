// Obtén una referencia al corazón y al mensaje
var heart = document.getElementById("heart");
var message = document.getElementById("message");

// Agrega un evento de clic al corazón
heart.addEventListener("click", function() {
  // Muestra el mensaje "te amo"
  message.textContent = "Te amo";
});
