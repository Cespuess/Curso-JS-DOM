// Seleccionar los elementos del DOM
const inputRed = document.getElementById("rojo");
const inputGreen = document.getElementById("verde");
const inputBlue = document.getElementById("azul");

const textRed = document.getElementById("texto-rojo");
const textGreen = document.getElementById("texto-verde");
const textBlue = document.getElementById("texto-azul");

// Valores color
let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

// Actualizar el texto de los p
textRed.innerText = red;
textGreen.innerText = green;
textBlue.innerText = blue;

// Función cambio color fondo body
function updateColor(red, green, blue) {
  const colorRGB = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = colorRGB;
}

// EventListeners
inputRed.addEventListener("change", (e) => {
  red = e.target.value;
  textRed.innerText = red;
  updateColor(red, green, blue);
})

inputGreen.addEventListener("change", (e) => {
  green = e.target.value;
  textGreen.innerText = green;
  updateColor(red, green, blue);
})

inputBlue.addEventListener("change", (e) => {
  blue = e.target.value;
  textBlue.innerText = blue;
  updateColor(red, green, blue);
})