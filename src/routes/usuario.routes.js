const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');


router.get('/', async (req, res) => {
    try{
        const usuario = await Usuario.find({});
        res.json({ error: false, usuario});
    } catch (err){
        res.json({error: true, message: err.message});
    }
});

router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const usuario = await Usuario.findById(id);
        res.json({ error: false, usuario});
    }catch (err){
        res.json({error: true, message: err.message});
    }
    
});

router.post('/', async (req, res) => {
    try{
        const usuario = req.body;
        const response = await new Usuario(usuario).save();
        res.json({error: false, filme: response});
    }catch (err) {
        res.json({error: true, message: err.mensagem});
    }  
});

router.put('/:id',async (req, res) =>{
    try{
    const id = req.params.id;
    const novo_usuario = req.body;
    const usuario = await Usuario.findByIdAndUpdate(id, novo_usuario);
    res.json({ error: false, novo_usuario});
    }catch{
        res.json({error: true, message: err.mensagem});
    }
});

router.delete('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        await Usuario.findByIdAndDelete(id);
        res.json({error: false});
    }catch{
    res.json({ error: true, message: err.message});
    }

});

module.exports = router;