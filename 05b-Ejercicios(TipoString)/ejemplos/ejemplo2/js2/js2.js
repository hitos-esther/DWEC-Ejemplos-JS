/***********************************************************/
/***************"JS event handler"**************************/
/**************ESTHER HITOS GARCIA**************************/
/******************** 2º DAW *******************************/
/***********************************************************/

"use strict"
//Declaración de variables
const numero1 = document.getElementById("nUno");
const numero2 = document.getElementById("nDos");

const binario = document.getElementById("binario");
const octal = document.getElementById("octal");
const hexa = document.getElementById("hexa");

const copiar = document.getElementById("pegar");

const deBinario = document.getElementById("paraBinario");
const deOctal = document.getElementById("paraOctal");
const deHexa = document.getElementById("paraHexa");

const salida1 = document.getElementById("resBase");
const salida2 = document.getElementById("resDeci");

//Funciones de decimal a base
binario.addEventListener("click", function (event) {
    salida1.innerHTML = parseInt(numero1.value).toString(2);
});

octal.addEventListener("click", function (event) {
    salida1.innerHTML = parseInt(numero1.value).toString(8);
});

hexa.addEventListener("click", function (event) {
    salida1.innerHTML = parseInt(numero1.value).toString(16);
});

copiar.onclick = function () {
    numero2.value = salida1.innerHTML;
};

//Funciones de base a decimal
deBinario.onclick = function () {
    salida2.innerHTML = parseInt(numero2.value, 2);
};

deOctal.onclick = function () {
    salida2.innerHTML = parseInt(numero2.value, 8);
};

deHexa.onclick = function () {
    salida2.innerHTML = parseInt(numero2.value, 16);
};