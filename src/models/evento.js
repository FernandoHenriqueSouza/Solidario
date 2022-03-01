const mongoose = require('mongoose');


const Evento = mongoose.model('Evento',{
    nome: String,
    endereco : String, 
    responsavel_id: {
        type: mongoose.Types.ObjectId,
        ref: 'usuario',
    },
    participantes_id:[{
        type: mongoose.Types.ObjectId,
        ref: 'usuario',
    }]
});

module.exports = Evento;