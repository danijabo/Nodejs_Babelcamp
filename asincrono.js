"use strict";
//Hacemos funcion asincrona

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback(); //le decimos que terminamos
    }, 2000);
}


escribeTras2Segundos('texto1', function() {

    escribeTras2Segundos('texto2', function() {
        cnsole.log('fin');
    });
});
