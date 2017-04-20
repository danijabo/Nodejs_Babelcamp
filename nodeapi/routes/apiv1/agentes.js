"use strict";

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
//Le pedimos a mongoose el modelo de Agente
const Agente = mongoose.model('Agente');

const basicAuth = require('../../lib/basicAuth');
router.use(basicAuth('admin', 'god'));

//Me lo llevo a lib
/*router.use((req, res, next) => {
    //Pedimos a basicAuth que intente sacar credenciales
    const user = basicAuth(req);
    console.log({user});
    if(!user || user.name !== 'admin' || user.pass !== '12345'){
        //Si no tengo credenciales, respuesta con cabecera pidiendolas
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        res.send(401);
        return;
    }
    next();
});*/


//GET /apiv1/agentes
router.get('/', (req, res, next) => {

    //Recogemos parametros de busqueda
    const name = req.query.name;
    const age = req.query.age;
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const select = req.query.select;
    const sort = req.query.sort;

    const criterios = {};

    //Si name no tiene nada no me interesa filtrar
    if(name){
        criterios.name = name;
    }

    if(age){
        criterios.age = age;
    }

    //Recuperamos una lista de agentes
    Agente.list(criterios, limit, skip, select, sort, (err, agentes) =>{
        if(err){
            next(err);
            return;
        }
        res.json({success: true, result: agentes});
    });
});

//GET /apiv1/agentes/:id
router.get('/:id', (req, res, next) => {
    const _id = req.params.id;
    Agente.findOne({_id: _id}).exec((err, agentes) => {
        if(err){
            next(err);
            return;
        }
        res.json({success: true, result: agentes});
    });
});

//POST /apiv1/agentes
router.post('/', (req, res, next) => {
    const datosAgente = req.body;

    //Creo instancia de agente
    const agente = new Agente(datosAgente);

    //Guardo mi instancia en la base de datos
    agente.save((err, agenteGuardado) => {
        if(err){
            next(err);
            return;
        }
        res.json({success: true, result: agenteGuardado});
    });
});

//PUT /apiv1/agentes/:id
router.put('/:id', (req, res, next) => {
    const datosAgente = req.body;
    const _id = req.params.id;

    Agente.update({_id: _id}, datosAgente, (err) => {
        if(err){
            next(err);
            return;
        }
        res.json({success: true})
    });
});

//DELETE /apiv1/agentes/:id
router.delete('/:id', (req, res, next) => {
    const _id = req.params.id;

    Agente.remove({_id: _id}, err => {
        if(err){
            next(err);
            return;
        }
        res.json({success: true});
    });
});

module.exports = router;