"use strict";

function suma(a, b, callback) {
    const resultado = a + b;
    setTimeout(function() {
        callback(resultado);
        //return resultado; 		Este return se pierde porque pertenece al parámetro del setTimeout
    }, 2000);
}

suma(4, 7, function(res) {
    console.log(res);
});

console.log('fin');
