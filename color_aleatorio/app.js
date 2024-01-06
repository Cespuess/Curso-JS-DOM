// Seleccionar los elementos del DOM
const boton = document.querySelector("button");
const color = document.getElementById("color");

// Creamos la función que nos devuelve un color hexadecimal aleatorio
function generateColor() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    colorHex += digitos[randomIndex];
  }
  return colorHex
}

// Creamos el Event Listener que asocia el clicar el botón con el cambio de color de fondo y el texto con el número del color
boton.addEventListener("click", function() {
  let randomColor = generateColor();
  // Actualizar texto
  color.textContent = randomColor;
  // Actualizar color de fondo
  document.body.style.backgroundColor = randomColor;
  // Actualizar color del borde y color del botón
  boton.style.backgroundColor = randomColor;
})

