const express = require('express');
const router = express.Router();
const _ = require('underscore');
const Evento = require('../models/evento');


router.get('/evento', async (req, res) => {
    try{
        const evento = await Evento.find({});
        res.json({ error: false, evento});
    } catch (err){
        
        res.json({error: true, message: err.message});
    }
});

router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const evento = await Evento.findById(id);
        res.json({ error: false, evento});
    }catch (err){
        
        res.json({error: true, message: err.message});
    } 
});

router.get('/participante/:id', async (req, res) => {
    try{
        const participante_id = req.params.id;
        const evento = await Evento.find({
            participantes_id: participante_id,
        });
        res.json({ error: false, evento});
    }catch (err){
        res.json({error: true, message: err.message});
    } 
});

router.get('/responsavel/:id', async (req, res) => {
    try{
        const responsavel = req.params.id;
        const evento = await Evento.find({
            responsavel_id: responsavel,
        });
        res.json({ error: false, evento});
    }catch (err){
        res.json({error: true, message: err.message});
    } 
});

router.post('/', async (req, res) => {
    try{
        const evento = req.body;
        await new Evento(evento).save();
        res.json({error: false, filme: evento});
    }catch (err) {
        res.json({error: true, message: err.message});
    }  
});

router.put('/:id',async (req, res) =>{
    try{
    const id = req.params.id;
    const novo_evento = req.body;
    id_new = novo_evento.usuario; 
    id_resp = await Evento.findById(id); 
    new_resp =  id_resp.responsavel_id;  
    if(new_resp == id_new){ 
        const evento = await Evento.findByIdAndUpdate(id, novo_evento);
        res.json({ error: false, novo_evento});
    }else{
        res.json({error: false, message: 'Você não tem permissão para atualizar esse evento'});
    }
    }catch{
        res.json({error: true, message: err.message});
    }
});

router.put('/add/:id',async (req, res) =>{
    try{
        const id = req.params.id;
        const novo_evento = req.body;
        const new_partcipant = novo_evento.participantes_id;
        const novo_participante = await Evento.findById(id);
        novo_participante.participantes_id.push(new_partcipant);
        await Evento.findByIdAndUpdate(id, novo_participante);
        res.json({ error: false, novo_evento});
    }catch{
        res.json({error: true, message: error.message});
    }
});

router.delete('/:id', async (req, res) =>{
    try{
        const id = req.params.id; 
        const id_usuario = req.body; 
        id_new = id_usuario.usuario; 
        id_resp = await Evento.findById(id); 
        new_resp =  id_resp.responsavel_id;  
        if(new_resp == id_new){ 
            await Evento.findByIdAndDelete(id);
            res.json({error: false});
         }else{
            res.json({error: false, message: 'Você não tem permissão para apagar esse evento'});
         }
    }catch{
       
        res.json({ error: true, message: err.message});
    }

});

module.exports = router;