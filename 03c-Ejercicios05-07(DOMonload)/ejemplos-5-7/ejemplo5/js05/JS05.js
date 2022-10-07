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

const manejador = document.getElementById("saludar");
window.onclick = function () {
    saludar();
};


//Esta es la forma mas correcta para desarrllar el script
//pero yo quiero apretar el boton para que salude
//NO pongo .onload, 
// SI pongo .onclick
/*function inicio() {
    let person = prompt("Porfabor dime tu nombre", "Esther");
    let salida = document.getElementById("salida");
    salida.innerHTML = `¡Hola, ${person}!`;
}
window.onload = inicio;*/




