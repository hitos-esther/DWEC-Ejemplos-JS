/***********************************************************/
/**********"05b-Ejercicios(TipoString) Ejercicio 01"********/
/********************ESTHER HITOS GARCIA********************/
/************************ 2º DAW ***************************/
/********************************************************* */
/***********************************************************/
"use strict"
const textarea = document.getElementById("textarea");
let cargatexto = document.getElementById("cargatexto");

document.getElementById("mayuscula").addEventListener("click",mayuscula);
document.getElementById("minuscula").addEventListener("click",minuscula);
document.getElementById("primeraMayuscula").addEventListener("click",primeraMayuscula);
document.getElementById("ultimaMayuscula").addEventListener("click",ultimaMayuscula);
document.getElementById("primeraMinuscula").addEventListener("click",primeraMinuscula);
document.getElementById("ultimaMinuscula").addEventListener("click",ultimaMinuscula);

document.getElementById("vocalesMayusculas").addEventListener("click",vocalesMayusculas);
document.getElementById("vocalesMinusculas").addEventListener("click",vocalesMinusculas);
document.getElementById("consonantesMayusculas").addEventListener("click",consonantesMayusculas);
document.getElementById("consonantesMinusculas").addEventListener("click",consonantesMinusculas);

document.getElementById("aleatorio").addEventListener("click",aleatorio);
document.getElementById("parar").addEventListener("click",parar);
document.getElementById("rapido").addEventListener("click",rapido);
document.getElementById("lento").addEventListener("click",lento);

let resultado = document.getElementById("resultado");

//IMPORTANTE COMO RECOGO DE UN INPUT <input id="textarea" type="text" name="textarea"/>
// LA CADENA DE TEXTO (textarea)
//TENGO QUE PONER .value PARA QUE FUNCIONE LA VALIDACION DE LA CADENA
function mayuscula(event) {
    textarea.value = textarea.value.toUpperCase();
    //recogo toda la cadena y la convierto en mayuscula con .toUpperCase()

};


function minuscula(event) {
    textarea.value = textarea.value.toLowerCase();
    //recogo toda la cadena y la convierto en minuscula con .toLowerCase()
}


function primeraMayuscula(event) {
    const texto = textarea.value.split(" ");//separo con espacios en blanco para que lo entienda como un caracter
                                            // y divir por caracter la cadena con .split(" ")
                                            // de esta manera me trocea toda la frase con sus espacios en blanco
    for (let i = 0; i < texto.length; i++) {
        texto[i] = texto[i].charAt(0).toUpperCase() + texto[i].substring(1);
        //recogo el caracter de textarea utilizando la variable texto empezando por el caracter(0) y lo convierto en mayuscula toUpperCase()
        // y luego concateno el resto de las cadenas de textarea con .substring(1), que es la siguente posicion del char
    };
    textarea.value = texto.join(" ");//con join concateno las palabras entre espacios tambien
};


function ultimaMayuscula(event) {
    const texto = textarea.value.split(" ");//separo por espacios en blanco para divir por caracter la cadena
    for (let i = 0; i < texto.length; i++) {
        texto[i] = texto[i].substring(0, texto[i].length - 1) + texto[i].charAt(texto[i].length - 1).toUpperCase();
        // recogo las cadenas de textarea con .substring(0,texto[i].length -1), empezando por el final del textarea       
        //especificando el ultimo char (caracter)(texto[i].charAt(texto[i].length -1) convirtiendolo en mayuscula .toUpperCase()

    };
    textarea.value = texto.join(" ");//con join concateno las palabras entre espacios 
};


function primeraMinuscula(event) {
    const texto = textarea.value.split(" ");//separo por espacios en blanco para divir por caracter la cadena
    for (let i = 0; i < texto.length; i++) {
        texto[i] = texto[i].charAt(0).toLowerCase() + texto[i].substring(1);
        //recogo de textarea por caracter(0) y lo convierto en minuscula toUpperCase()
        // y luego concateno el resto de las cadenas de textarea con .substring(1)
    };
    textarea.value = texto.join(" ");//con join concateno las palabras entre espacios 
};


function ultimaMinuscula(event) {
    const texto = textarea.value.split(" ");//separo por espacios en blanco para divir por caracter la cadena
    for (let i = 0; i < texto.length; i++) {
        texto[i] = texto[i].substring(0, texto[i].length - 1) + texto[i].charAt(texto[i].length - 1).toLowerCase();
        //empiezo por el ultimo caracter(-1) de lo largo de la cadena y lo convierto en minuscula por caracter toLowerCase()

    };
    textarea.value = texto.join(" ");//con join concateno las palabras entre espacios 
};


function vocalesMayusculas(event) {
    const vocales = textarea.value.split("");//divir por caracter la cadena
    for (let i = 0; i < vocales.length; i++) {
        if ((vocales[i] == "a" || vocales[i] == "e" || vocales[i] == "i" || vocales[i] == "o" || vocales[i] == "u")) {
            //especifico una prueba completa para cada lado del operador OR porque si no NO funciona
            vocales[i] = vocales[i].toUpperCase();
        }


    }
    textarea.value = vocales.join("");//con join concateno los caracteres 
};


function vocalesMinusculas(event) {
    const vocales = textarea.value.split("");//divir por caracter la cadena
    for (let i = 0; i < vocales.length; i++) {
        if ((vocales[i] == "A" || vocales[i] == "E" || vocales[i] == "I" || vocales[i] == "O" || vocales[i] == "U")) {
            //especifico una prueba completa para cada lado del operador OR porque si no NO funciona
            vocales[i] = vocales[i].toLowerCase();
        }

    }
    textarea.value = vocales.join("");//con join concateno los caracteres 
};


function consonantesMayusculas(event) {
    const consonantes = textarea.value.split("");//divir por caracter la cadena
    for (let i = 0; i < consonantes.length; i++) {
        if (!(consonantes[i] == "a" || consonantes[i] == "e" || consonantes[i] == "i" || consonantes[i] == "o" || consonantes[i] == "u")) {
            //especifico una prueba completa para cada lado del operador OR porque si no NO funciona
            consonantes[i] = consonantes[i].toUpperCase();
        }


    }
    textarea.value = consonantes.join("");//con join concateno los caracteres 
};


function consonantesMinusculas(event) {
    const consonantes = textarea.value.split("");//divir por caracter la cadena
    for (let i = 0; i < consonantes.length; i++) {
        if (!(consonantes[i] == "A" || consonantes[i] == "E" || consonantes[i] == "I" || consonantes[i] == "O" || consonantes[i] == "U")) {
            //especifico una prueba completa para cada lado del operador OR porque si no NO funciona
            consonantes[i] = consonantes[i].toLowerCase();
        }


    }
    textarea.value = consonantes.join("");//con join concateno los caracteres 
};



