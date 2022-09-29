/***********************************************************/
/***************"JS event handler"**************************/
/**************ESTHER HITOS GARCIA**************************/
/******************** 2º DAW *******************************/
/***********************************************************/

"use strict"
// este código funciona de la manera moderna

function saludar() {
    salida.innerHTML = `¡Hola, ${person}!`;
}
window.onload = saludar;
function despedir() {
    salida.innerHTML = ` ¡Adios, ${person}!`;
}
window.onload = despedir;

let person = prompt("Porfabor dime tu nombre...");
let salida = document.getElementById("salida");

const manejador = document.getElementById("manejador");
manejador.onclick = function () {
    saludar();
}

/*manejador.onclick = function () {
    despedir();
};*/

const escuchador = document.getElementById("escuchador");
/*escuchador.addEventListener("click", function (event) {
    saludar();
})*/

escuchador.addEventListener("click", function (event) {
    despedir();
});
