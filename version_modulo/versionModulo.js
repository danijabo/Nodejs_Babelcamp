"use strict";

const fs = require('fs'); //cargar libreria fileSistem
const path = require('path');

//funcion que lea la version del modulo
function versionModulo(nombreModulo, callback) {
    const fichero = path.join('./node_modules', nombreModulo, 'package.json');

    fs.readFile(fichero, 'utf-8', function(err, datos) {
        if (err) {
            callback(err); //llamo a quien me llamo para decirle que he terminado por un error
            return;
        }
        //console.log('datos', datos);
        const packageJson = JSON.parse(datos);

        //llamamos al callback con el dato que nos pidieron
        callback(null, packageJson.version);
    });
}


//llamamos a la funcion
/*versionModulo('chance', function(err, version) {
    if (err) {
        console.log('¡Error!', err);
        return;
    }
    console.log('La version de chance es: ', version);
});
*/

module.exports = versionModulo;
