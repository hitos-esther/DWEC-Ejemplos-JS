///////////////////////////////////////////////
/*********************************************/
/**********EJ 5b (toString) Ejemplo 1*********/
/**********Authora: Esther Hitos Garcia*******/
/********Función aleatoria. Math.rand()*******/
/******************************************* */
///////////////////////////////////////////////
"use strict"

let vuelta;

function cadenaAleatoria(maximo,minimo) {
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);  
   
}
function aleatoriosMios(){
    let texto = cadenaAleatoria(1, 10);
    while (texto == vuelta) {
        texto = cadenaAleatoria(1, 10);
    }
    switch (texto) {
        case 1:
            mayuscula();
            break;
        case 2:
            minuscula();
            break;
        case 3:
            primeraMayuscula();
            break;
        case 4:
            ultimaMayuscula();
            break;
        case 5:
            primeraMinuscula();
            break;
        case 6:
            ultimaMinuscula();
            break;
        case 7:
            vocalesMayusculas();
            break;
        case 8:
            vocalesMinusculas();
            break;
        case 9:
            consonantesMayusculas();
            break;
        case 10:
            consonantesMinusculas();
    }
    vuelta == texto;
};
