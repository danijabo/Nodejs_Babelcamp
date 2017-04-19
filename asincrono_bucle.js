"use strict";
//Hacemos funcion asincrona

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log('texto' + texto);
        callback(); //le decimos que terminamos
    }, 2000);
}

//Funcion ayudante para bucle en serie
function serie(veces, fn, callback) {
    if (veces === 0) {
        callback();
        return;
    }
    veces--;
    fn(veces, function() {
        serie(veces, fn, callback);
    });
}

serie(5, escribeTras2Segundos, function() {
    console.log('fin');
});

/* escribeTras2Segundos('texto' + i, function() {

 });*/
