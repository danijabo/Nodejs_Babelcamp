"use strict";

function Persona(nombre) {
    this.nombre = nombre;
}

const persona = new Persona('Neo');

//asignamos un metodo al prototipo de todas las personas

Persona.prototype.saluda = function() {
    console.log('Hola me llamo', this.nombre);
};

persona.saluda();

//------------ HERENCIA----------------

function Agente(nombre) {
    Persona.call(this, nombre);
    //Esto ejecuta el constructor de persona con el this de Agente
    //Esto es como llamar a super en otros lenguajes
}

//Asignamos como prototipo una persona
//Se puede meter dentro de la fincion Agente() pero se va a ejecutar cada vez que se cree un agente y es innecesario
//de este modo se ejecuta una sola vez y sirve para todos los agentes
Agente.prototype = new Persona('soy un prototipo');

const agente = new Agente('Smith');

agente.saluda();

//------------ HEREMCIA MULTIPLE -----------

function Superheroe() {
    this.vuela = function() {
        console.log(this.nombre, 'vuela');
    };
    this.esquivaBalas = function() {
        console.log(this.nombre, 'esquiva balas');
    };
}

//Asignar todas las propiedades (y metodos) de un Superheroe al prototipo de Agente

Object.assign(Agente.prototype, new Superheroe());

agente.vuela();
agente.esquivaBalas();
