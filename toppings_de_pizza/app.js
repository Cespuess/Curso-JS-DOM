// para seleccionar el elemento por su id
const contenedor = document.getElementById("contenedor"); // en los () especificamos el id del elemento
const titulo = document.getElementById("titulo");
console.log(titulo);

// para seleccionar elementos por su clase
const toppings = document.getElementsByClassName("topping");
console.log(toppings[3]);

// para seleccionar elementos por su etiqueta
const misToppings = document.getElementsByTagName("li");
console.log(misToppings);

// para seleccionar elementos por su selector CSS
const aceitunas = document.querySelector("#aceitunas");
console.log(aceitunas);
const primerNoToppingNaranja = document.querySelector("ul li:not(.fondo-naranja)");
console.log(primerNoToppingNaranja); // se pueden combinar los selectores

const toppingsNaranja = document.querySelectorAll(".topping.fondo-naranja");
console.dir(toppingsNaranja[0]);

// asignar estilos
const primerTopping = document.querySelector(".topping");
primerTopping.style.backgroundColor = "blue";
primerTopping.style.color = "#6dff00"; 
primerTopping.style.textTransform = "uppercase";

// seleccionar texto
const textoLista = document.getElementById("lista-toppings");
console.log(textoLista.innerText);
console.log(textoLista.textContent);

// modificar texto
const textoH1 = document.getElementById("titulo");
textoH1.innerText = "Mis Toppings Favoritos"
console.log(textoH1.innerText);

// modificar atributos
const enlaces = document.getElementsByTagName("a");
console.log(enlaces[0].removeAttribute("href"));

// clases
const firstTopping = document.querySelector(".topping");
firstTopping.classList.add("texto-rojo")
console.log(firstTopping.classList)

// crear y añadir elementos
const listaDeToppings = document.getElementById("lista-toppings");
const newTopping = document.createElement("li");
newTopping.classList.add("topping", "fondo-marron");
newTopping.innerText = "Queso extra";
listaDeToppings.appendChild(newTopping);

// Recorrer el DOM
console.log(listaDeToppings.parentElement);
console.log(listaDeToppings.children);

// Event Listener
const toppingsEvent = document.getElementsByClassName("topping");

function mostrarClick(e) {
    console.log(e.target.innerText);
}

for (const topping of toppingsEvent) {
    topping.addEventListener("click", mostrarClick);
}
