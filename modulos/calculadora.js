"use strict";

console.log('Inicializo la calculadora...')

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

module.exports = {
    suma: suma,
    resta: resta
};

//export es un alias y no debemos asignarlo
