// Seleccionar los elementos del DOM
let botonElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

function generateIntNumber(min, max) {
    // Sin incluir max en los valores posibles
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
    let randomIndex = generateIntNumber(0, citas.length);
    citaElem.innerText = `"${citas[randomIndex].texto}"`;
    autorElem.innerText = citas[randomIndex].autor;
}

cambiarCita();
botonElem.addEventListener("click", cambiarCita);