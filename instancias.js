"use strict";

//Creamos un constructor de objetos
function Fruta() {
    let nombre; //let es lo mismo que var pero no hace hoisting
    this.setNombre = function(value) { nombre = value };
    this.getNombre = function() {
        return nombre };
}

//Creamos objeto fruta
const fruta = new Fruta;

fruta.setNombre('Limon');

console.log(fruta, fruta.getNombre());
