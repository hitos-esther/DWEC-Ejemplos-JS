///////////////////////////////////////////////
/*********************************************/
/**********EJ 5b (toString) Ejemplo 1*********/
/**********Authora: Esther Hitos Garcia*******/
/**el tiempo. setInterval(); clearInterval()**/
///////////////////////////////////////////////


"use strict"

let velocidad;
let tiempo = 1000;

function aleatorio() {
    velocidad = setInterval(aleatoriosMios, tiempo);
}

function parar() {
    clearInterval(velocidad);
}

function rapido() {
    clearInterval(velocidad);
    velocidad = setInterval(aleatoriosMios, tiempo -=900);
    //console.log(tiempo);
}


function lento() {
    clearInterval(velocidad);
    velocidad = setInterval(aleatoriosMios, tiempo +=900);
    //console.log(tiempo);
}