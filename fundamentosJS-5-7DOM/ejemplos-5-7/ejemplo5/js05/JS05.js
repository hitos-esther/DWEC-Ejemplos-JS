/***********************************************************/
/***************"USE STRICT & DOM & Listener" **************/
/********************ESTHER HITOS GARCIA********************/
/************************ 2º DAW ***************************/
/***********************************************************/
"use strict"

function saludar() {
    salida.innerHTML = `¡Hola, ${person}!`;
}

function despedir() {
    salida.innerHTML = ` ¡Adios, ${person}!`;
}

let person = prompt("Porfabor dime tu nombre", "Esther");
let salida = document.getElementById("salida");

const manejador = document.getElementById("manejador");
window.onclick = function () {
    saludar();
};




