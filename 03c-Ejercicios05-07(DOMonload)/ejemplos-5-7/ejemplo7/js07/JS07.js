/***********************************************************/
/***************"JS event listener"*************************/
/**************ESTHER HITOS GARCIA**************************/
/******************** 2º DAW *******************************/
/***********************************************************/

"use strict"
window.addEventListener('load', function () {

function saludar() {
    salida.innerHTML = `¡Hola, ${person}!`;
}

function despedir() {
    salida.innerHTML = ` ¡Adios, ${person}!`;
}

let person = prompt("Porfabor dime tu nombre...");
let salida = document.getElementById("salida");
document.getElementById("manejador").addEventListener("mouseover", saludar);
document.getElementById("escuchador").addEventListener("mouseout", despedir);
});

