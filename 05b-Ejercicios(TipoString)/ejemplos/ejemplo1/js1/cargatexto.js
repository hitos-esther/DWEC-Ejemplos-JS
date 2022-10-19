///////////////////////////////////////////////
/*********************************************/
/**********EJ 5b (toString) Ejemplo 1*********/
/**********Authora: Esther Hitos Garcia*******/
/**************API Web. fetch() **************/
///////////////////////////////////////////////

"use strict"

cargatexto.addEventListener("click", function (event) {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => textarea.value=data.value)
    .catch(err => console.error(err))

    
});