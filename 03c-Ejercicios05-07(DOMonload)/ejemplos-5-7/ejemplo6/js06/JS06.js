/***********************************************************/
/***************"JS event handler"**************************/
/**************ESTHER HITOS GARCIA**************************/
/******************** 2º DAW *******************************/
/***********************************************************/

"use strict"
// este código funciona de la manera moderna
window.addEventListener('load', function () {
function saludar() {
    salida.innerHTML = `¡Hola, ${person}!`;
}

function despedir() {
    salida.innerHTML = ` ¡Adios, ${person}!`;
}


let person = prompt("Porfabor dime tu nombre...");
let salida = document.getElementById("salida");

document.getElementById("saludar").addEventListener("click", saludar);
document.getElementById("despedir").addEventListener("click", despedir);

});