const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

router.post('/', async(req, res) =>{
    try{
        const credenciais  = req.body;
        const usuario = await Usuario.findOne(credenciais);
        console.log(usuario);
        if (usuario){
            res.json({error: false, message: ' usuário encontrado'});
        }else{
            res.json({error: true, message: 'Nenhum usuário encontrado'});
        }
    }catch{
        res.json({error: true, message: err.message})
    }
});

module.exports = router; 