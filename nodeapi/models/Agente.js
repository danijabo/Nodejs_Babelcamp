"use strict";

const mongoose = require ('mongoose');

//Creamos un esquema
const agenteSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        index: true
    }
});

//Creamos metodo estatico en el modelo 
//para recuperar lista de agentes con filtros
agenteSchema.statics.list = function(
    criterios, limit, skip, select, sort,
    callback) {
    const query = Agente.find(criterios);
    //Añado limites
    query.limit(limit);
    //Selecciona los n-x ultimos
    query.skip(skip);

    query.select(select);
    //Ordena
    query.sort(sort);
    //Ejecuto la query
    query.exec(callback);
}

//Creamos el modelo de agente
//Utilizamos var para aprovecharnos del hoisting
//y poder utilizar Agente antes de esta sentencia
var Agente = mongoose.model('Agente', agenteSchema);

//si no queremos que pluralice se le puede definir directamente a que coleccion a la que pertenezca
//mongoose.model('Agente', agenteSchema, nombreColeccion);

//No necesitamos exportar el modelo porque 
//podemos recuperarlo donde queramos con 
//mongoose.model('Agente')
