"use strict";

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res, next) => {
    //Recibimos credenciales
    const email = req.body.email;
    const clave = req.body.clave;

    //Buscamos el usuario en la base de datos
    Usuario.findOne({email: email}).exec((err, usuario) => {
        if(err){
            next(err);
            return;
        }
        if(!usuario){
            res.json({success: false, error: 'Credenciales incorrectas'});
            return;
        }
        //Comprobamos su clave
        if(clave !== usuario.clave){
            res.json({success: false, error: 'Credenciales incorrectas'});
            return;
        }
        //Creamos un token JWT
        jwt.sign({usuario_id: usuario._id}, 'fghdfhdfdgsdgfsaafsaffffwewffscve', {
           expiresIn: '2d' 
        }, (err, token) => {
            if(err){
                next(err);
                return;
            }
            //Se lo devolvemos
            res.json({succes: true, token: token});

        });
    });
    
});

module.exports = router;
