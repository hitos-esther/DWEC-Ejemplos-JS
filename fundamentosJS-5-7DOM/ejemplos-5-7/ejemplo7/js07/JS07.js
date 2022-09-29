/***********************************************************/
/***************"JS event listener"*************************/
/**************ESTHER HITOS GARCIA**************************/
/******************** 2º DAW *******************************/
/***********************************************************/

"use strict"
let person = prompt("Porfabor dime tu nombre...");
function saludar() {
    salida.innerHTML = `¡Hola, ${person}!`;
}

function despedir() {
    salida.innerHTML = ` ¡Adios, ${person}!`;
};


let salida = document.getElementById("salida");

const manejador = document.getElementById("manejador");
manejador.onmouseover = function () {
    saludar();
}
/*manejador.onmouseout = function () {
    despedir();
};*/


const escuchador = document.getElementById("escuchador");
/*escuchador.addEventListener("onmouseover", function (event) {
    saludar();
})*/

escuchador.addEventListener("mouseout", event => {
    despedir();
});



