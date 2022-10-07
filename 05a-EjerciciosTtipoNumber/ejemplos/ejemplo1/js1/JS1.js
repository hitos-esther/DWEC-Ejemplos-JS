/***********************************************************/
/***************"USE STRICT & DOM & Listener" **************/
/********************ESTHER HITOS GARCIA********************/
/************************ 2º DAW ***************************/
/***********************************************************/
"use strict"
const nUno = document.getElementById("nUno");
const nDos = document.getElementById("nDos");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");
const Pentera = document.getElementById("Pentera");
const Pdecimal = document.getElementById("Pdecimal");

let resultado = document.getElementById("resultado");

suma.addEventListener("click", function (event) {
    resultado.innerHTML = parseFloat(nUno.value) + parseFloat(nDos.value);

});
resta.addEventListener("click", function (event) {
    resultado.innerHTML = parseFloat(nUno.value) - parseFloat(nDos.value);

});
multiplicar.addEventListener("click", function (event) {
    resultado.innerHTML = parseFloat(nUno.value) * parseFloat(nDos.value);

});
dividir.addEventListener("click", function (event) {
    resultado.innerHTML = parseFloat(nUno.value) / parseFloat(nDos.value);

});

Pentera.addEventListener("click", function (event) {
     resultado.innerHTML = parseInt(nUno.value);

});

Pdecimal.addEventListener("click", function (event) {
    resultado.innerHTML = parseFloat("0." + nDos.value.split(".")[1]);

});






