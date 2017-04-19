"use strict";

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

function suenatelefono(quien) {
    if (quien === 'madre') {
        return;
    }
    console.log('ring ring');
}

function vibrarTelefono() {
    console.log('brrr brrr');
}

eventEmitter.on('llamar telefono', suenatelefono);
eventEmitter.on('llamar telefono', vibrarTelefono);

eventEmitter.emit('llamar telefono', 'madre');

//se puede heredar de eventEmitter para que nuestro objeto pueda escuchar eventos
