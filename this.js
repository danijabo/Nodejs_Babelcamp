function Coche() {
    this.ruedas = 4;
    this.cuantasRuedas = function() {
        console.log('tiene', this.ruedas);
    };
}

const coche = new Coche();

//coche.cuantasRuedas();

const numRuedas = coche.cuantasRuedas.bind(coche); //bind() preasigna un this

//numRuedas(); //no sabe quien es this

//setTimeout(coche.cuantasRuedas, 2000); //es setTimeout quien llama a la funcion cuantasRuedas y por ello no conoce a this

//este si lo hace bien porque se ejecuta dentro
/*setTimeout(function() {
    coche.cuantasRuedas();
}, 2000);*/

//hay que buscar donde estan los parentesis de ejecucion

const camion = {
    ruedas: 8,
    cuantasRuedas: coche.cuantasRuedas.bind(coche) //va a decir que tiene 4 en vez de 8
}

//camion.cuantasRuedas();

camion.cuantasRuedas.call(coche);
