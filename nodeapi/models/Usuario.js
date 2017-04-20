"use strict";

const mongoose = require ('mongoose');

//Creamos un esquema
const usuarioSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        index: true
    },
    clave: string
});

mongoose.model('Usuario', usuarioSchema);