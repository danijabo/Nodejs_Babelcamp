"use strict";
//Hacemos funcion asincrona

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log('texto' + texto);
        callback(); //le decimos que terminamos
    }, 2000);
}

//Funcion ayudante para bucle en serie
function serie(array, fn, callback) {
    if (array.length == 0) {
        callback();
        return;
    }
    //quito el primer elemento del array y se lo paso a la funcion
    fn(array.shift(), function() {
        serie(array, fn, callback);
    });
}

serie([1, 2, 3, 4, 5], escribeTras2Segundos, function() {
    console.log('fin');
});

/* escribeTras2Segundos('texto' + i, function() {

 });*/
